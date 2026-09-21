import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CostEstimator from './components/CostEstimator';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickContactWidget from './components/QuickContactWidget';

export default function App() {
  const [estimateData, setEstimateData] = useState(null);
  const [projectToQuote, setProjectToQuote] = useState(null);

  const handleApplyEstimate = (summary) => {
    setEstimateData(summary);
  };

  const handleSelectProjectToQuote = (projectTitle) => {
    setProjectToQuote(projectTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName) => {
    setEstimateData({
      product: serviceName,
      design: 'Tiêu chuẩn',
      features: [],
      estimatedPrice: 'Theo yêu cầu',
      timeline: '10 - 20 ngày'
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B132B] selection:bg-[#5BC0BE] selection:text-[#0B132B] font-sans antialiased">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Interactive Portfolio Showcase with Filter & Modals */}
        <Portfolio onSelectProjectToQuote={handleSelectProjectToQuote} />

        {/* 4. Interactive Cost & Timeline Estimator */}
        <CostEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 5. 5-Step Process */}
        <Process />

        {/* 6. Why Choose Us & Guarantees */}
        <WhyUs />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. Contact / Lead Form */}
        <Contact
          initialEstimate={estimateData}
          initialProject={projectToQuote}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (Zalo & Hotline) */}
      <QuickContactWidget />
    </div>
  );
}
