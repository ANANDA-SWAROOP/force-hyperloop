import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecentWorkPage from './pages/RecentWorkPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import RecentWorksPage from './pages/RecentWorksPage';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recent-work" element={<RecentWorkPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/recent-works" element={<RecentWorksPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
