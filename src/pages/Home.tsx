import { motion } from "motion/react";
import { CategoryCard } from "../components/CategoryCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] flex items-center justify-center text-center text-white p-4"
      >
        <div className="absolute inset-0 bg-emerald-900/60 z-10" />
        <img
          src="https://picsum.photos/seed/malaysia/1920/1080"
          alt="Malaysia Collage"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-20 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">Discover the Fun Side of Malaysia</h1>
          <p className="text-xl md:text-2xl font-subheading">Games | Food | Travel | Relax — Your ultimate guide to Malaysian lifestyle</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition">Start Exploring</button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition">View Categories</button>
          </div>
        </motion.div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Explore Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard icon="🎮" title="Game On" description="Board game cafes, arcades & TCG shops" color="teal" href="/games" />
          <CategoryCard icon="🍜" title="Food Trails" description="Hawker centers, hidden gems, trendy cafes" color="mango" href="/food" />
          <CategoryCard icon="🏝️" title="Travel Escapes" description="Beaches, highlands, islands, culture" color="magenta" href="/travel" />
          <CategoryCard icon="🧘" title="Relax & Unwind" description="Wellness retreats, spas, nature spots" color="deep-green" href="/relax" />
        </div>
      </motion.section>

      {/* Fun Facts Ticker */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-teal-500 text-white py-4 overflow-hidden">
        <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="whitespace-nowrap font-subheading font-medium">
          Did you know? Malaysia has over 300 board game cafes! • Penang is UNESCO's City of Gastronomy • 78% of Malaysians travel for food • TikTok is shaping Malaysia's food culture •
        </motion.div>
      </motion.section>

      {/* Newsletter */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto px-4 bg-white p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">Get the Fun Map in Your Inbox</h2>
        <p className="text-gray-600 mb-8">Weekly digest of new discoveries, viral spots, and exclusive tips.</p>
        <div className="flex gap-4 justify-center">
          <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-full border border-gray-300 w-full max-w-sm" />
          <button className="bg-emerald-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition">Subscribe</button>
        </div>
      </motion.section>
    </div>
  );
}
