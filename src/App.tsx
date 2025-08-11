import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import About from './pages/About';
import Solutions from './pages/Solutions';

function AppRoutes() {
   return (
    <>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </>
  );
}

function App() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      // GSAP ticker uses seconds; Lenis expects ms
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
