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
import ScrollToTop from "./components/Utils/ScrollToTop";
import PoliticaPrivacidad from './components/Legal/PoliticaPrivacidad';
import TerminosServicio from "./components/Legal/TerminosDeServicio";
import ReporteProblemas from "./components/ReporteProblemas";
import AdminApp from "./components/Admin/AdminApp";


function App() {
  return (
    <Router>
      <ScrollToTop/>
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
            <Route path="/legal/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/legal/terminos-servicio" element={<TerminosServicio />}/>
            <Route path="/reportar-problemas" element={<ReporteProblemas />} />
            <Route path="/admin/*" element={<AdminApp />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;