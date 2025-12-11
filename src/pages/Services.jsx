import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
    {
        title: "Residential Interior Design",
        description: "Full-service design for homes, apartments, and estates. From concept to completion.",
        features: ["Space Planning", "Color Consultation", "Custom Furniture Design", "Project Management"],
        image: "/images/bedroom-1.jpg"
    },
    {
        title: "Commercial Spaces",
        description: "Creating inspiring work environments that enhance productivity and brand identity.",
        features: ["Office Layouts", "Retail Design", "Hospitality Interiors", "Branding Integration"],
        image: "/images/office-1.jpg"
    },
    {
        title: "Styling & Décor",
        description: "The finishing touches that make a house a home. Sourcing art, accessories, and textiles.",
        features: ["Art Curation", "Window Treatments", "Accessories Selection", "Seasonal Styling"],
        image: "/images/hero-1.jpg"
    }
];

import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Nokterior</title>
                <meta name="description" content="Explore our premium interior design services, from residential planning to commercial styling." />
            </Helmet>

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive design solutions tailored to elevate your lifestyle and business.</p>
                    </motion.div>

                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover rounded-2xl shadow-xl" />
                                </div>

                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown mb-6">{service.title}</h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                                    <ul className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-brown">
                                                <CheckCircle size={20} className="text-gold-brown" />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <section className="py-24 bg-brown text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/hero-1.jpg" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Transform Your Space?</h2>
                    <p className="text-xl md:text-2xl text-timberwolf mb-12 max-w-2xl mx-auto">Let's collaborate to bring your vision to life. Contact us today for a consultation.</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-brown px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-brown hover:text-white transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
