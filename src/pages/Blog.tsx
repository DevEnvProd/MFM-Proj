import { motion } from "motion/react";

const blogPosts = [
  { title: "Top 10 Hidden Gems in Malaysia", date: "March 15, 2026", excerpt: "Discover the secret spots that most tourists miss." },
  { title: "Sustainable Travel Tips", date: "March 10, 2026", excerpt: "How to explore responsibly and protect our environment." },
  { title: "A Guide to Malaysian Street Food", date: "March 5, 2026", excerpt: "The ultimate guide to the best local delicacies." },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-5xl font-heading font-bold text-emerald-900 text-center">Our Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <p className="text-amber-500 font-semibold mb-2">{post.date}</p>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
            <button className="text-pink-600 font-semibold hover:underline">Read More →</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
