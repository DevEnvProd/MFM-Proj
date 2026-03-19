import { motion } from "motion/react";
import { CategoryCard } from "../components/CategoryCard";

const categories = [
  { icon: "🏮", title: "Cultural Heritage", description: "Discover the rich history and traditions of Malaysia.", color: "teal", href: "/explore/culture" },
  { icon: "🌿", title: "Nature & Wildlife", description: "Explore pristine rainforests and diverse ecosystems.", color: "deep-green", href: "/explore/nature" },
  { icon: "🍜", title: "Culinary Adventures", description: "Savor the unique flavors of Malaysian cuisine.", color: "mango", href: "/explore/food" },
  { icon: "🏔️", title: "Adventure Sports", description: "Experience adrenaline-pumping activities across the country.", color: "magenta", href: "/explore/adventure" },
];

export default function Explore() {
  return (
    <div className="space-y-16 pb-24">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-center text-white p-4"
      >
        <div className="absolute inset-0 bg-emerald-900/60 z-10" />
        <img
          src="https://picsum.photos/seed/explore-hero/1920/1080"
          alt="Explore Malaysia"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold">Explore Malaysia</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Uncover hidden gems, vibrant cultures, and unforgettable experiences across the nation.</p>
          <div className="flex justify-center gap-4">
            <input type="text" placeholder="Search destinations..." className="px-6 py-3 rounded-full text-gray-900 w-full max-w-md shadow-lg" />
            <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-600">Search</button>
          </div>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-emerald-900 mb-12 text-center">Discover by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat as any} />
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-emerald-900 mb-12 text-center">Featured Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img src={`https://picsum.photos/seed/dest-${i}/800/600`} alt="Destination" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Hidden Gem {i}</h3>
                <p className="text-gray-600 mb-4">A brief description of this amazing destination that you absolutely must visit.</p>
                <button className="text-pink-600 font-semibold hover:underline">Read More →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
