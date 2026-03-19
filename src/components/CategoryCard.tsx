import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  color: "teal" | "mango" | "magenta" | "deep-green";
  href: string;
}

const colorMap = {
  teal: "bg-teal-500",
  mango: "bg-amber-500",
  magenta: "bg-pink-600",
  "deep-green": "bg-emerald-900",
};

export function CategoryCard({ icon, title, description, color, href }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-amber-400 hover:shadow-xl transition-all"
    >
      <div className={`w-16 h-16 ${colorMap[color]} rounded-full flex items-center justify-center text-3xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-emerald-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={href} className="text-pink-600 font-semibold hover:underline">
        Explore →
      </Link>
    </motion.div>
  );
}
