import React, { useState } from 'react';
import { ArrowUpRight, Loader2, Phone, Mail, Clock } from 'lucide-react';
import { InstagramLogo, TiktokLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';

interface ContactProps {
    endpoint?: string;
}

const Contact: React.FC<ContactProps> = ({ endpoint = "https://formspree.io/f/xanrpygk" }) => {
    const [submitting, setSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [details, setDetails] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = {
            name,
            email,
            services: selectedServices,
            budget: selectedBudget,
            details
        };

        console.log("Datos del formulario capturados:", formData);

        try {
            const submitUrl = endpoint?.trim();

            if (submitUrl) {
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
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            alert("¡Gracias! Nos pondremos en contacto pronto.");
            
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
    <section id="contact" className="bg-[#EFEDE8] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto px-4 md:px-8">
                
            {/* Lado Izquierdo - Formulario (50%) */}
            <div className="flex items-start lg:items-center justify-center lg:justify-end">
                <div className="w-full max-w-[560px] bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-sm">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Syne'] mb-8 text-black">Contactanos</h3>
                        
                        <form onSubmit={handleSubmit} action={endpoint} method="POST" className="space-y-6">
                            <div className="space-y-4">
                                <div className="group">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2 ml-1">Nombre *</label>
                                    <input 
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                        type="text" 
                                        className="w-full bg-[#F5F5F0] rounded-lg border-none py-3 px-4 text-base placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all outline-none" 
                                        placeholder="Tu nombre" 
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 ml-1">Correo *</label>
                                    <input 
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                        type="email" 
                                        className="w-full bg-[#F5F5F0] rounded-lg border-none py-3 px-4 text-base placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all outline-none" 
                                        placeholder="tu@email.com" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">¿Qué servicios te interesan?</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Contenido', 'Gestión', 'Ads', 'Todo'].map(opt => (
                                        <label key={opt} className="cursor-pointer group relative">
                                            <input 
                                                type="checkbox" 
                                                name="services"
                                                className="peer sr-only" 
                                                onChange={() => toggleService(opt)}
                                                checked={selectedServices.includes(opt)}
                                            />
                                            <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-800 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400 transition-all duration-200 ease-in-out">
                                                {opt}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">¿Presupuesto mensual?</label>
                                <div className="flex flex-wrap gap-2">
                                    {['- de $600K', '$600K-$2M', '$2M-$6M', '$6M+'].map(opt => (
                                        <label key={opt} className="cursor-pointer">
                                            <input 
                                                type="radio" 
                                                name="budget" 
                                                className="peer sr-only" 
                                                onChange={() => setSelectedBudget(opt)}
                                                checked={selectedBudget === opt}
                                            />
                                            <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-800 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400 transition-all duration-200 ease-in-out">
                                                {opt}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="details" className="block text-sm font-medium text-gray-600 mb-2 ml-1">Detalles del proyecto *</label>
                                <textarea 
                                    id="details"
                                    name="details"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    required 
                                    rows={3} 
                                    className="w-full bg-[#F5F5F0] rounded-lg border-none py-3 px-4 text-base placeholder:text-gray-400 text-gray-900 focus:ring-1 focus:ring-black focus:bg-[#F5F5F0] transition-all resize-none outline-none" 
                                    placeholder="Cuéntanos más..."
                                ></textarea>
                            </div>

                            <button 
                                disabled={submitting} 
                                type="submit" 
                                className="w-full bg-black text-white py-3 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-gray-900 transform active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {submitting ? <Loader2 className="animate-spin" size={18} /> : <>Enviar <ArrowUpRight className="w-4 h-4" /></>}
                            </button>
                        </form>
                    </div>
                </div>

            {/* Lado Derecho - Tarjetas de Contacto (50%) */}
            <div className="flex items-start lg:items-center justify-center lg:justify-start">
                <div className="w-full max-w-[560px] bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-sm">
                        {/* Header */}
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Syne'] mb-3 text-black">
                                Otras formas de contacto
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Estamos disponibles a través de múltiples canales.
                            </p>
                        </div>

                        {/* Cards Grid - 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Email + Redes */}
                            <div className="bg-[#F5F5F0] rounded-lg p-4 md:p-5 transition-all duration-200 min-w-0 sm:col-span-2">
                                <div className="space-y-5">
                                    {/* Email */}
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-3 mb-3 min-w-0">
                                            <div className="p-2 bg-white/60 rounded-lg">
                                                <Mail size={18} className="text-stone-900" />
                                            </div>
                                            <h3 className="font-semibold text-stone-900 text-sm md:text-base">Email</h3>
                                        </div>
                                        <p className="text-xs md:text-sm text-stone-500 mb-3 leading-relaxed">
                                            Respuesta en 24 horas.
                                        </p>
                                        <a
                                            href="mailto:rnt.sstudio@gmail.com"
                                            className="font-semibold text-stone-900 text-sm md:text-base mb-1 block whitespace-normal break-words"
                                            title="rnt.sstudio@gmail.com"
                                        >
                                            rnt.sstudio@gmail.com
                                        </a>
                                        <p className="text-xs text-stone-400">Respuesta garantizada</p>
                                    </div>

                                    <div className="h-px bg-white/60" />

                                    {/* Redes */}
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-stone-900 text-sm md:text-base mb-3">Síguenos</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <a
                                                href="https://www.instagram.com/rnt_studios/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center p-2 rounded-lg bg-white/60 hover:bg-white transition-colors"
                                                title="Instagram"
                                            >
                                                <InstagramLogo size={16} className="text-stone-900" weight="fill" />
                                            </a>
                                            <a
                                                href="https://www.tiktok.com/@rnt.studio"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center p-2 rounded-lg bg-white/60 hover:bg-white transition-colors"
                                                title="TikTok"
                                            >
                                                <TiktokLogo size={16} className="text-stone-900" weight="fill" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Horarios */}
                            <div className="bg-[#F5F5F0] rounded-lg p-4 md:p-5 transition-all duration-200 min-w-0 overflow-hidden">
                                <div className="flex items-center gap-3 mb-3 min-w-0">
                                    <div className="p-2 bg-white/60 rounded-lg">
                                        <Clock size={18} className="text-stone-900" />
                                    </div>
                                    <h3 className="font-semibold text-stone-900 text-sm md:text-base truncate">Horarios</h3>
                                </div>
                                <ul className="text-xs md:text-sm space-y-1.5">
                                    <li className="flex justify-between">
                                        <span className="text-stone-500">L-V</span>
                                        <span className="font-semibold text-stone-900">09:00-18:00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-stone-500">Sábado</span>
                                        <span className="font-semibold text-stone-900">Cerrado</span>
                                    </li>
                                    <li className="flex justify-between opacity-50">
                                        <span className="text-stone-500">Domingo</span>
                                        <span className="font-semibold text-stone-900">Cerrado</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 1. Teléfono */}
                            <div className="bg-[#F5F5F0] rounded-lg p-4 md:p-5 transition-all duration-200 min-w-0 overflow-hidden">
                                <div className="flex items-center gap-3 mb-3 min-w-0">
                                    <div className="p-2 bg-white/60 rounded-lg">
                                        <Phone size={18} className="text-stone-900" />
                                    </div>
                                    <h3 className="font-semibold text-stone-900 text-sm md:text-base truncate">Teléfono</h3>
                                </div>
                                <p className="text-xs md:text-sm text-stone-500 mb-3 leading-relaxed">
                                    Llamanos para una consulta rápida.
                                </p>
                                <p className="font-semibold text-stone-900 text-sm md:text-base mb-1 break-words">+ 54 9 11 3231 1023</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
