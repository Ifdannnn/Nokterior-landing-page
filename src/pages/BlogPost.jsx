import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: "5 Trends Shaping Luxury Interiors in 2024",
        content: `
      <p class="mb-6">The world of luxury interior design is constantly evolving, with new trends emerging that redefine how we perceive and interact with our living spaces. In 2024, we are seeing a shift towards more sustainable, biophilic, and personalized design elements.</p>
      <h3 class="text-2xl font-serif font-bold text-brown mb-4">1. Biophilic Design 2.0</h3>
      <p class="mb-6">Nature continues to be a major inspiration. It's not just about adding a few plants anymore; it's about integrating organic materials, natural light, and fluid shapes into the very architecture of the home.</p>
      <h3 class="text-2xl font-serif font-bold text-brown mb-4">2. Sustainable Luxury</h3>
      <p class="mb-6">Eco-conscious choices are becoming a hallmark of true luxury. High-end clients are demanding materials that are ethically sourced and environmentally friendly, without compromising on aesthetics.</p>
      <h3 class="text-2xl font-serif font-bold text-brown mb-4">3. Quiet Luxury</h3>
      <p class="mb-6">Minimalism is getting warmer and more textured. "Quiet luxury" focuses on quality materials, craftsmanship, and subtle details rather than flashy logos or ostentatious displays of wealth.</p>
    `,
        image: "/images/interior-1.jpg",
        date: "March 15, 2024",
        author: "Elena Rossi",
        category: "Trends"
    },
    {
        id: 2,
        title: "The Art of Minimalism: Less is More",
        content: `
      <p class="mb-6">Minimalism is often misunderstood as cold or empty. But when done right, it can be incredibly warm, inviting, and luxurious. The key lies in the deliberate selection of every object and the thoughtful use of negative space.</p>
      <p class="mb-6">In a minimalist home, every piece of furniture and every decor item has a purpose. It's about stripping away the non-essential to reveal the essence of the design.</p>
    `,
        image: "/images/bedroom-1.jpg",
        date: "March 10, 2024",
        author: "David Chen",
        category: "Design Tips"
    },
    {
        id: 3,
        title: "Choosing the Perfect Color Palette",
        content: `
      <p class="mb-6">Color has the power to transform a room and influence our mood. Choosing the right palette is one of the most important decisions in the design process.</p>
      <p class="mb-6">For a luxury feel, we recommend sticking to a cohesive color scheme. Monochromatic palettes with varying textures can create a sophisticated look, while contrasting colors can add drama and energy.</p>
    `,
        image: "/images/bedroom-2.jpg",
        date: "March 05, 2024",
        author: "Sarah James",
        category: "Guides"
    }
];

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="pt-32 pb-24 text-center">
                <h1 className="text-4xl font-serif text-brown">Post not found</h1>
                <Link to="/blog" className="text-gold-brown mt-4 inline-block">Return to Journal</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Nokterior Journal</title>
                <meta name="description" content={`Read ${post.title} on Nokterior Journal.`} />
            </Helmet>

            <article className="pt-32 pb-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center space-x-2 text-gray-500 hover:text-gold-brown transition-colors mb-8">
                        <ArrowLeft size={20} />
                        <span>Back to Journal</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-6 leading-tight">{post.title}</h1>

                        <div className="flex items-center space-x-6 mb-10 text-gray-500">
                            <span className="text-gold-brown font-medium uppercase tracking-wider">{post.category}</span>
                            <div className="flex items-center space-x-2">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar size={18} />
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
                            <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover" />
                        </div>

                        <div
                            className="prose prose-lg prose-brown max-w-none text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>
                </div>
            </article>

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

export default BlogPost;
