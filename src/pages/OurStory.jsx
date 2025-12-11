import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <>
            <Helmet>
                <title>Our Story | Nokterior</title>
                <meta name="description" content="Learn about the journey of Nokterior, our philosophy, and the team behind our luxury interior designs." />
            </Helmet>

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-6">Our Story</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Crafting spaces that tell stories, evoke emotions, and stand the test of time.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/bedroom-2.jpg" alt="Our beginning" className="w-full h-[600px] object-cover rounded-2xl shadow-xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-serif font-bold text-brown">The Beginning</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in 2010, Nokterior began with a simple yet powerful vision: to bridge the gap between architectural functionality and aesthetic luxury. What started as a small boutique studio has grown into a premier interior design firm, renowned for our ability to transform ordinary spaces into extraordinary experiences.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our name, "Nokterior," is a fusion of "Nocturne" and "Interior," symbolizing our dedication to creating spaces that feel as serene and enchanting as a quiet night, yet as vibrant and alive as the day.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2 lg:order-1"
                        >
                            <h2 className="text-3xl font-serif font-bold text-brown">Our Philosophy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that design is not just about how it looks, but how it makes you feel. Every texture, every color, and every light fixture is chosen with intention. We prioritize sustainable materials and work with local artisans to create bespoke pieces that add character and depth to our projects.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our approach is collaborative. We listen to your needs, understand your lifestyle, and translate your dreams into reality. Whether it's a cozy apartment or a sprawling estate, we treat every project with the same level of passion and precision.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <img src="/images/interior-1.jpg" alt="Design Philosophy" className="w-full h-[600px] object-cover rounded-2xl shadow-xl" />
                        </motion.div>
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

export default OurStory;
