import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [loadedSections, setLoadedSections] = useState({ home: true });

  useEffect(() => {
    // Preload all sections after mount
    setTimeout(() => {
      setLoadedSections({ home: true, about: true, projects: true, contact: true });
    }, 1000); // Delay to prevent unnecessary load on first render
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'about':
        return loadedSections.about ? <About /> : <LoadingScreen />;
      case 'projects':
        return loadedSections.projects ? <Projects /> : <LoadingScreen />;
      case 'contact':
        return loadedSections.contact ? <Contact /> : <LoadingScreen />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-[#202729] min-h-screen">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
    </div>
  );
}

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen text-white">
    <p>Loading...</p>
  </div>
);

export default App;