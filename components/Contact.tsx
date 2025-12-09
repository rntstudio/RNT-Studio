import React, { useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';

interface ContactProps {
    /**
     * URL del endpoint que recibirá el POST del formulario.
     * Si no se provee, se usará un endpoint por defecto.
     * Ejemplos:
     * - Formspree
     * - Un backend propio
     * - Un webhook seguro
     */
    endpoint?: string;
}

const Contact: React.FC<ContactProps> = ({ endpoint = "https://formspree.io/f/xanrpygk" }) => {
    const [submitting, setSubmitting] = useState(false);
    
    // Estados para capturar los datos del formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [details, setDetails] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        // Objeto con todos los datos listos para enviar
        const formData = {
            name,
            email,
            services: selectedServices,
            budget: selectedBudget,
            details
        };

        // Para propósitos de depuración, mostramos los datos en consola
        console.log("Datos del formulario capturados:", formData);

        try {
            const submitUrl = endpoint?.trim();

            if (submitUrl) {
                // Formspree recomienda enviar con FormData y header Accept: application/json
                const data = new FormData();
                data.append("name", name);
                data.append("email", email);
                selectedServices.forEach(service => data.append("services", service));
                if (selectedBudget) data.append("budget", selectedBudget);
                data.append("details", details);

                const response = await fetch(submitUrl, {
                    method: "POST",
                    body: data,
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    const msg = errorData?.errors?.map((e: any) => e.message).join(", ")
                        || "Oops! Hubo un problema enviando el formulario.";
                    throw new Error(msg);
                }
            } else {
                // Fallback de desarrollo: simulación de llamada a API
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            alert("¡Gracias! Nos pondremos en contacto pronto.");
            
            // Limpiar el formulario tras el envío exitoso
            setName("");
            setEmail("");
            setSelectedServices([]);
            setSelectedBudget("");
            setDetails("");
            
        } catch (error) {
            console.error("Error enviando formulario:", error);
            alert("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.");
        } finally {
            setSubmitting(false);
        }
    }

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4 md:px-8 bg-[#EFEDE8] flex items-center justify-center">
            <div className="w-full max-w-[800px] bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 shadow-sm">
                <h3 className="text-3xl md:text-4xl font-bold font-['Syne'] mb-10 text-black">Formulario de Contacto</h3>
                
                <form onSubmit={handleSubmit} action={endpoint} method="POST" className="space-y-8">
                    <div className="space-y-6">
                        <div className="group">
                            <label htmlFor="name" className="block text-base font-medium text-gray-600 mb-2 ml-1">Nombre *</label>
                            <input 
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                                type="text" 
                                className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-5 text-lg placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all outline-none" 
                                placeholder="Tu nombre" 
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="block text-base font-medium text-gray-600 mb-2 ml-1">Correo *</label>
                            <input 
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                type="email" 
                                className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-5 text-lg placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all outline-none" 
                                placeholder="tu@email.com" 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-medium text-gray-600 mb-3 ml-1">¿Qué servicios te interesan?</label>
                        <div className="flex flex-wrap gap-3">
                            {['Contenido', 'Gestión', 'Ads', 'Todo'].map(opt => (
                                <label key={opt} className="cursor-pointer group relative">
                                    <input 
                                        type="checkbox" 
                                        name="services"
                                        className="peer sr-only" 
                                        onChange={() => toggleService(opt)}
                                        checked={selectedServices.includes(opt)}
                                    />
                                    <span className="inline-block px-6 py-3 rounded-full border border-gray-200 bg-white text-base font-medium text-gray-800 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400 transition-all duration-200 ease-in-out">
                                        {opt}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-medium text-gray-600 mb-3 ml-1">¿Presupuesto mensual?</label>
                        <div className="flex flex-wrap gap-3">
                            {['- de $600K', '$600K-$2M', '$2M-$6M', '$6M+'].map(opt => (
                                <label key={opt} className="cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="budget" 
                                        className="peer sr-only" 
                                        onChange={() => setSelectedBudget(opt)}
                                        checked={selectedBudget === opt}
                                    />
                                    <span className="inline-block px-6 py-3 rounded-full border border-gray-200 bg-white text-base font-medium text-gray-800 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400 transition-all duration-200 ease-in-out">
                                        {opt}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="details" className="block text-base font-medium text-gray-600 mb-2 ml-1">Detalles del proyecto *</label>
                        <textarea 
                            id="details"
                            name="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            required 
                            rows={4} 
                            className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-5 text-lg placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all resize-none outline-none" 
                            placeholder="Cuéntanos más..."
                        ></textarea>
                    </div>

                    <button 
                        disabled={submitting} 
                        type="submit" 
                        className="w-full bg-black text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transform active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                        {submitting ? <Loader2 className="animate-spin" /> : <>Enviar Solicitud <ArrowUpRight className="w-5 h-5" /></>}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;