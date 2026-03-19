import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/Layout';
import OurPlatform from './pages/OurPlatform';
import Explore from './pages/Explore';
import Blog from './pages/Blog';
import Sharing from './pages/Sharing';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<div>Games</div>} />
          <Route path="/food" element={<div>Food</div>} />
          <Route path="/travel" element={<div>Travel</div>} />
          <Route path="/relax" element={<div>Relax</div>} />
          <Route path="/about" element={<OurPlatform />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sharing" element={<Sharing />} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
