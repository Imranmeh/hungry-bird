
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Plus } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      category: "Main Course",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil"
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 9.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
      category: "Starters",
      description: "Crisp romaine lettuce with parmesan and Caesar dressing"
    },
    {
      id: 3,
      name: "Grilled Salmon",
      price: 18.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
      category: "Main Course",
      description: "Fresh Atlantic salmon grilled to perfection"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 6.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300&h=200&fit=crop",
      category: "Desserts",
      description: "Rich chocolate cake with creamy frosting"
    },
    {
      id: 5,
      name: "Fresh Orange Juice",
      price: 4.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop",
      category: "Beverages",
      description: "Freshly squeezed orange juice"
    },
    {
      id: 6,
      name: "Chicken Wings",
      price: 11.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1527477396000-a4821c6d3ebb?w=300&h=200&fit=crop",
      category: "Starters",
      description: "Spicy buffalo wings with ranch dipping sauce"
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-orange-100">Discover our delicious selection of dishes</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">${item.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2">
                      <Plus size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
