import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-teal-500">
          MALAYSIA FUN MAP
        </Link>
        <div className="flex gap-6 font-subheading font-medium items-center">
          <Link to="/about" className="hover:text-teal-500">Our Platform</Link>
          <Link to="/explore" className="hover:text-teal-500">Explore</Link>
          <Link to="/blog" className="hover:text-teal-500">Blog</Link>
          <Link to="/sharing" className="hover:text-teal-500">Sharing</Link>
          <Link to="/login" className="hover:text-teal-500">
            <LogIn className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
