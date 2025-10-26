
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Delicious Food
              <span className="block text-yellow-300">Delivered Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-md">
              Craving something delicious? Browse our menu and get your favorite meals delivered hot and fresh to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/menu')}
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200 text-lg">
                View Menu
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop" 
                alt="Delicious pizza" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
