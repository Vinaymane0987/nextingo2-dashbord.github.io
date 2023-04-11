import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Solutions from './pages/solutions/Solutions';
import Careers from './pages/careers/Careers';
import Contact from './pages/contacts/Contact';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="careers" element={<Careers />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
