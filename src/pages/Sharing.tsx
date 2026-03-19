import { motion } from "motion/react";

export default function Sharing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-5xl font-heading font-bold text-emerald-900 text-center">Share Your Journey</h1>
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center space-y-6">
        <h2 className="text-3xl font-bold text-emerald-900">Join Our Community</h2>
        <p className="text-xl text-gray-600">Have a story to share or a hidden gem to recommend? We'd love to feature your experiences on our platform.</p>
        <button className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-teal-600 transition-colors">
          Submit Your Story
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Why Share?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Inspire fellow travelers</li>
            <li>Help local communities</li>
            <li>Get featured on our homepage</li>
            <li>Connect with like-minded explorers</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Guidelines</h3>
          <p className="text-gray-600">Please ensure your stories are authentic, respectful of local cultures, and provide helpful insights for other travelers.</p>
        </div>
      </div>
    </div>
  );
}
