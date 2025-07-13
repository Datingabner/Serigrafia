import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tecnicas from './components/Tecnicas';
import Muestras from './components/Muestras';
import ComoTrabajamos from './components/ComoTrabajamos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/inicio" element={<Hero />} />
            <Route path="/tecnicas" element={<Tecnicas />} />
            <Route path="/trabajos-realizados" element={<Muestras />} />
            <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;