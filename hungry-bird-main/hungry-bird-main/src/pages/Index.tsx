
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <FeaturedDishes />
      <Footer />
    </div>
  );
};

export default Index;
