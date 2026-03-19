import { Instagram, Smartphone, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-2xl font-heading font-bold text-teal-400">MALAYSIA FUN MAP</h3>
          <p className="text-sm opacity-80 leading-relaxed max-w-md">
            Your premier digital companion for exploring the vibrant tapestry of Malaysia. 
            From hidden culinary gems and serene travel escapes to immersive local experiences, 
            we curate the best of the nation for the modern explorer.
          </p>
          <div className="flex gap-4 text-teal-400 pt-2">
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer" />
            <Smartphone className="w-6 h-6 hover:text-white cursor-pointer" />
            <Facebook className="w-6 h-6 hover:text-white cursor-pointer" />
            <Youtube className="w-6 h-6 hover:text-white cursor-pointer" />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold mb-6 text-lg">Stay Updated</h4>
          <p className="text-sm opacity-80 mb-6">Subscribe to our newsletter for curated travel insights and exclusive hidden gem recommendations.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-10 pr-4 py-3 rounded-full bg-emerald-900 border border-emerald-800 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400"
              />
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-bold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-emerald-800 text-center text-sm opacity-60">
        © 2026 Malaysia Fun Map. All rights reserved. Curated with passion for the Malaysian lifestyle.
      </div>
    </footer>
  );
}
