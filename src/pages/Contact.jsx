import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Nokterior</title>
                <meta name="description" content="Get in touch with Nokterior to discuss your next interior design project." />
            </Helmet>

            <div className="pt-32 pb-24 bg-off-white min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-6">Get In Touch</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to start your design journey? We'd love to hear from you. Fill out the form below or reach us directly.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-10"
                        >
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-serif font-bold text-brown mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gold-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="text-gold-brown" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brown mb-1">Our Studio</h4>
                                            <p className="text-gray-600">123 Design Avenue, Creative District, NY 10012</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gold-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="text-gold-brown" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brown mb-1">Phone</h4>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                            <p className="text-gray-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gold-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="text-gold-brown" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brown mb-1">Email</h4>
                                            <p className="text-gray-600">hello@nokterior.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white p-10 rounded-2xl shadow-lg"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-brown mb-2">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-brown focus:ring-1 focus:ring-gold-brown outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-brown mb-2">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-brown focus:ring-1 focus:ring-gold-brown outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-brown focus:ring-1 focus:ring-gold-brown outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-brown mb-2">Service Interested In</label>
                                    <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-brown focus:ring-1 focus:ring-gold-brown outline-none transition-all">
                                        <option value="">Select a service</option>
                                        <option value="interior-design">Interior Design</option>
                                        <option value="furniture-styling">Furniture Styling</option>
                                        <option value="space-planning">Space Planning</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">Message</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-brown focus:ring-1 focus:ring-gold-brown outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gold-brown text-white font-bold py-4 rounded-lg hover:bg-brown transition-colors flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
