import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import MessMenu from './components/MessMenu';
import Events from './components/Events';
import Notices from './components/Notices';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'radial-gradient(ellipse at 20% 10%, #1a3a2a 0%, #0f2419 40%, #0a0f0b 100%)',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-0">
          <QuickAccess />
          <MessMenu />
          <Events />
          <Notices />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
