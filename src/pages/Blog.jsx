import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "5 Trends Shaping Luxury Interiors in 2024",
        excerpt: "From biophilic design to sustainable luxury, discover what's defining the future of high-end home interiors.",
        image: "/images/interior-1.jpg",
        date: "March 15, 2024",
        author: "Elena Rossi",
        category: "Trends"
    },
    {
        id: 2,
        title: "The Art of Minimalism: Less is More",
        excerpt: "How to achieve a clean, uncluttered look without sacrificing warmth and personality in your living space.",
        image: "/images/bedroom-1.jpg",
        date: "March 10, 2024",
        author: "David Chen",
        category: "Design Tips"
    },
    {
        id: 3,
        title: "Choosing the Perfect Color Palette",
        excerpt: "A guide to understanding color psychology and selecting the right hues for every room in your home.",
        image: "/images/bedroom-2.jpg",
        date: "March 05, 2024",
        author: "Sarah James",
        category: "Guides"
    }
];

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Journal | Nokterior</title>
                <meta name="description" content="Read our latest insights on interior design trends, tips, and inspiration." />
            </Helmet>

            <div className="pt-32 pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-6">The Journal</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights, inspiration, and stories from the world of luxury design.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="overflow-hidden rounded-2xl mb-6 h-64">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                                    <span className="text-gold-brown font-medium uppercase tracking-wider">{post.category}</span>
                                    <span>•</span>
                                    <div className="flex items-center space-x-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-serif font-bold text-brown mb-3 group-hover:text-gold-brown transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.id}`} className="text-gold-brown font-medium hover:text-brown transition-colors flex items-center space-x-1">
                                        <span>Read More</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
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

export default Blog;
