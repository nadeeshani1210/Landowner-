import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' }
  ];

  const rightNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Spot management', path: '/spot-management' },
    { name: 'Profile', path: '/profile' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Brand and main nav */}
          <div className="flex items-center space-x-8">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-black">Just</span>
                <span className="text-green-600">Park.lk</span>
              </span>
            </Link>
            
            {/* Main Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-gray-900 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Dashboard nav and logout */}
          <div className="flex items-center space-x-6">
            {/* Right Navigation */}
            <div className="hidden md:flex space-x-6">
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-gray-900 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Logout Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button - for future mobile responsiveness */}
      <div className="md:hidden">
        {/* You can add mobile menu here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;