import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brown text-white/80 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white tracking-tighter">
                            NOKTERIOR<span className="text-gold-brown">.</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-timberwolf">
                            Elevating spaces with timeless elegance and modern functionality. We create interiors that tell your story.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold text-white mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link to="/our-story" className="hover:text-gold-brown transition-colors">Our Story</Link></li>
                            <li><Link to="/services" className="hover:text-gold-brown transition-colors">Services</Link></li>
                            <li><Link to="/blog" className="hover:text-gold-brown transition-colors">Journal</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-brown transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="hover:text-gold-brown transition-colors cursor-pointer">Interior Design</li>
                            <li className="hover:text-gold-brown transition-colors cursor-pointer">Furniture Styling</li>
                            <li className="hover:text-gold-brown transition-colors cursor-pointer">Space Planning</li>
                            <li className="hover:text-gold-brown transition-colors cursor-pointer">Consultation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-gold-brown" />
                                <span>123 Design Avenue, Creative District, NY</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-gold-brown" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-gold-brown" />
                                <span>hello@nokterior.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="hover:text-gold-brown transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-gold-brown transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-gold-brown transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-gold-brown transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-timberwolf/60">
                    <p>&copy; {new Date().getFullYear()} Nokterior. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
