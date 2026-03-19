import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Story Slides
const storySlides = [
  {
    title: "The Beginning",
    content: "Malaysia Fun Map was born from a simple realization: Malaysia is bursting with hidden gems, vibrant cultures, and unforgettable experiences, yet finding them can feel like searching for a needle in a haystack.",
    image: "https://picsum.photos/seed/malaysia-story-1/800/600"
  },
  {
    title: "Our Vision",
    content: "To create a world where every traveler feels like a local, effortlessly discovering the authentic, vibrant, and fun side of Malaysia.",
    image: "https://picsum.photos/seed/malaysia-story-2/800/600"
  },
  {
    title: "Our Mission",
    content: "To be the ultimate digital companion for anyone looking to live, eat, and play in Malaysia. We strive to curate authentic, high-quality recommendations that empower you to create your own Malaysian adventures.",
    image: "https://picsum.photos/seed/malaysia-story-3/800/600"
  }
];

// Journey Milestones
const milestones = [
  { year: "2024", title: "The Spark", description: "The idea was born over a late-night Mamak session." },
  { year: "2025", title: "First Map", description: "Launched our beta platform covering KL and Penang." },
  { year: "2026", title: "Nationwide", description: "Expanding to every state in Malaysia with a vibrant community." },
];

// Team Members
const team = [
  { name: "Ahmad", role: "Founder & Explorer", bio: "Loves finding the best Nasi Lemak in town." },
  { name: "Sarah", role: "Content Curator", bio: "Travel enthusiast with a keen eye for hidden spots." },
  { name: "Wei", role: "Tech Lead", bio: "Building the map that connects us all." },
];

export default function OurPlatform() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % storySlides.length);
  const prev = () => setIndex((prev) => (prev - 1 + storySlides.length) % storySlides.length);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] flex items-center justify-center text-center text-white p-4"
      >
        <div className="absolute inset-0 bg-emerald-900/70 z-10" />
        <img
          src="https://picsum.photos/seed/malaysia-platform/1920/1080"
          alt="Our Platform"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold">Our Platform</h1>
          <p className="text-2xl font-subheading">Discovering the hidden soul of Malaysia</p>
        </motion.div>
      </motion.section>

      {/* Story Slider */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-emerald-900 mb-12 text-center">Our Story</h2>
        <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row bg-white"
            >
              <img src={storySlides[index].image} alt={storySlides[index].title} className="w-full md:w-1/2 h-64 md:h-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-4xl font-heading font-bold text-emerald-900">{storySlides[index].title}</h2>
                <p className="text-xl text-gray-700 leading-relaxed">{storySlides[index].content}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg z-20 hover:bg-white"><ChevronLeft /></button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg z-20 hover:bg-white"><ChevronRight /></button>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-emerald-900 mb-12 text-center">Our Journey</h2>
        <div className="relative border-l-4 border-teal-200 ml-6 md:ml-12 space-y-16">
          {milestones.map((m, i) => (
            <motion.div 
              key={m.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[22px] top-0 w-10 h-10 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                {i + 1}
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                <div className="font-heading font-bold text-2xl text-teal-600 mb-2">{m.year}</div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">{m.title}</h3>
                <p className="text-gray-700 text-lg">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-emerald-900 mb-12 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div 
              key={member.name}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-24 h-24 bg-teal-100 rounded-full mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-teal-600 text-center font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-center text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
