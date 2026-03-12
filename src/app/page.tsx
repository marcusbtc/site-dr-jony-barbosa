"use client";

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import CategoriesSection from '../components/CategoriesSection'
import AboutDoctor from '../components/AboutDoctor'
import ServicesSection from '../components/ServicesSection'
import ExamsSection from '../components/ExamsSection'
import ProceduresSection from '../components/ProceduresSection'
import WhyChooseSection from '../components/WhyChooseSection'
import VideoSection from '../components/VideoSection'
import FaqSection from '../components/FaqSection'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CategoriesSection />
        <AboutDoctor />
        <ServicesSection />
        <ExamsSection />
        <ProceduresSection />
        <WhyChooseSection />
        <VideoSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
