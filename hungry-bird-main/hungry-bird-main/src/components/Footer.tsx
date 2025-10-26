
import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-orange-500">FoodieHub</div>
            <p className="text-gray-300">
              Delivering delicious food to your doorstep since 2020. Quality ingredients, fast delivery, unforgettable taste.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Menu</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Delivery Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">info@foodiehub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">123 Food Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 FoodieHub. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
