
import React from 'react';
import { Star, Plus } from 'lucide-react';

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      price: 18.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 9.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
      category: "Starters"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 6.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300&h=200&fit=crop",
      category: "Desserts"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and delicious dishes, crafted with the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {dish.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{dish.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-500">${dish.price}</span>
                  <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
