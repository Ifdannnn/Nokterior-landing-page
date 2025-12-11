import { ArrowRight, Star, PenTool, Layout as LayoutIcon, Home as HomeIcon, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Nokterior | Premium Interior Design & Furniture</title>
                <meta name="description" content="Transform your space with Nokterior. We offer luxury interior design, premium furniture styling, and architectural planning." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-1.jpg"
                        alt="Luxury Modern Living Room"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight"
                    >
                        Design That <span className="text-gold-brown italic">Transcends</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-timberwolf"
                    >
                        Elevating your living spaces with a perfect blend of modern minimalism and timeless luxury.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center space-x-2 bg-gold-brown text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gold-brown transition-all duration-300"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                                <img src="/images/bedroom-1.jpg" alt="Minimalist Bedroom" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-timberwolf/20 rounded-full -z-0 blur-3xl"></div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown">
                                Redefining <span className="text-gold-brown">Luxury Living</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Nokterior, we believe that your home should be a sanctuary—a place that reflects your personality and aspirations. Our team of expert designers and architects work tirelessly to create spaces that are not only visually stunning but also deeply functional.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <h4 className="text-3xl font-bold text-gold-brown mb-2">150+</h4>
                                    <p className="text-gray-500 uppercase tracking-widest text-sm">Projects Completed</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-gold-brown mb-2">12+</h4>
                                    <p className="text-gray-500 uppercase tracking-widest text-sm">Years Experience</p>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link to="/our-story" className="text-brown font-medium hover:text-gold-brown transition-colors inline-flex items-center space-x-2 border-b-2 border-gold-brown pb-1">
                                    <span>Read Our Story</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-24 bg-off-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-6">Our Expertise</h2>
                        <p className="text-gray-600 text-lg">We offer a comprehensive suite of design services tailored to your unique needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gold-brown/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-brown transition-colors duration-300">
                                <HomeIcon className="text-gold-brown group-hover:text-white transition-colors duration-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-4">Interior Design</h3>
                            <p className="text-gray-600 mb-6">Full-scale interior design services from concept development to final installation.</p>
                            <Link to="/services" className="text-gold-brown font-medium hover:text-brown transition-colors">Learn More &rarr;</Link>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gold-brown/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-brown transition-colors duration-300">
                                <PenTool className="text-gold-brown group-hover:text-white transition-colors duration-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-4">Furniture Styling</h3>
                            <p className="text-gray-600 mb-6">Curating and sourcing the perfect furniture pieces to complement your space.</p>
                            <Link to="/services" className="text-gold-brown font-medium hover:text-brown transition-colors">Learn More &rarr;</Link>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gold-brown/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-brown transition-colors duration-300">
                                <LayoutIcon className="text-gold-brown group-hover:text-white transition-colors duration-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-4">Space Planning</h3>
                            <p className="text-gray-600 mb-6">Optimizing your layout for better flow, functionality, and aesthetic appeal.</p>
                            <Link to="/services" className="text-gold-brown font-medium hover:text-brown transition-colors">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Projects - Business/Commercial Focus */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown">Our Projects</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We specialize in transforming commercial environments into powerful assets for your business. From high-end corporate offices to boutique hospitality spaces, our interior design solutions are crafted to enhance productivity, client experience, and brand identity.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our portfolio reflects our commitment to excellence, functional innovation, and aesthetic prestige. Whether you're looking to redefine your workspace or create a memorable retail atmosphere, our team delivers results that elevate your business.
                            </p>
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-gold-brown text-white px-8 py-4 rounded-full font-medium hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span>Consult via WhatsApp</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative h-[400px] overflow-hidden rounded-2xl group shadow-2xl">
                                <img src="/images/office-1.jpg" alt="Modern Corporate Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-xl font-serif">Corporate Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services - Brief Description */}
            {/* Our Services - Brief Description */}
            <section className="py-24 bg-summit-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-6">Comprehensive Design Services</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We tailor every aspect of our service to meet the distinct needs of our clients, ensuring a seamless journey from concept to reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
                        {/* Service 1 */}
                        <div className="group">
                            <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-64">
                                <img src="/images/bedroom-1.jpg" alt="Residential Design" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-3">Residential Design</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                crafting personalized sanctuaries that reflect your lifestyle, from cozy apartments to sprawling luxury estates.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group">
                            <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-64">
                                <img src="/images/interior-1.jpg" alt="Commercial Spaces" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-3">Commercial Spaces</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Designing inspiring work environments and retail experiences that enhance productivity and brand identity.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="group">
                            <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-64">
                                <img src="/images/office-1.jpg" alt="Space Planning" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brown mb-3">Space Planning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Optimizing layouts to maximize flow, functionality, and aesthetic appeal for any property type.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center space-x-2 bg-gold-brown text-white px-8 py-3 rounded-full font-medium hover:bg-brown transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <span>View All Services</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

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

export default Home;
