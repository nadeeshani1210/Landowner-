import React, { useState } from 'react';
import { MapPin, Car, Plus } from 'lucide-react';

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const stats = [
    {
      title: 'Total Parking spots',
      value: '20',
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    },
    {
      title: 'Available spots',
      value: '13',
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    },
    {
      title: 'Occupied spots',
      value: '07',
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    }
  ];

  const parkingSpots = [
    {
      id: 'main-street',
      name: 'Main Street Parking',
      location: '123 Main Street, Downtown',
      totalSpots: 10,
      availableSpots: 6,
      occupiedSpots: 4,
      vehicleTypes: ['Bike', 'Car', 'Van']
    },
    {
      id: 'mall-parking',
      name: 'Mall/Dura Parking',
      location: '456 Mall Road, Colombo',
      totalSpots: 8,
      availableSpots: 3,
      occupiedSpots: 5,
      vehicleTypes: ['Bike', 'Car', 'Van']
    }
  ];

  const VehicleIcon = ({ type }) => {
    const icons = {
      'Bike': '🏍️',
      'Car': '🚗',
      'Van': '🚐'
    };
    return <span className="text-lg">{icons[type] || '🚗'}</span>;
  };

  const handleManageClick = (spotId) => {
    console.log(`Navigating to spot management for: ${spotId}`);
    window.location.href = '/spot-management';
  };

  // Fixed navigation function for Add Parking button
  const handleAddParkingClick = () => {
    console.log('Navigating to Add Parking page');
    window.location.href = '/add-parking';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Dashboard
          </h1>
          <p className="text-gray-600">Here's an overview of your parking spots.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-xl border-2 border-gray-200 shadow-sm p-6`}>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
                <p className={`text-4xl font-bold ${stat.textColor}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Parking Spots Section */}
        <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Parking Spots
              </h2>
              <p className="text-gray-600">View and manage all your registered parking spaces</p>
            </div>
            {/* FIXED: Now properly navigates to add parking page */}
            <button 
              onClick={handleAddParkingClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus size={16} />
              <span>Add Parking</span>
            </button>
          </div>

          {/* Parking Spots Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {parkingSpots.map((spot) => (
              <div 
                key={spot.id} 
                className="bg-gray-100 bg-opacity-50 border border-gray-300 rounded-lg p-6 hover:bg-opacity-70 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{spot.name}</h3>
                    <p className="text-gray-600 text-sm flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {spot.location}
                    </p>
                  </div>
                </div>

                {/* Spot Statistics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total parking spots</p>
                    <p className="text-2xl font-bold text-gray-800">{spot.totalSpots}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Available spots</p>
                    <p className="text-2xl font-bold text-green-600">{spot.availableSpots}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Occupied spots</p>
                    <p className="text-2xl font-bold text-red-600">{spot.occupiedSpots}</p>
                  </div>
                </div>

                {/* Vehicle Types */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Vehicle Types:</p>
                  <div className="flex space-x-4">
                    {spot.vehicleTypes.map((vehicle, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <VehicleIcon type={vehicle} />
                        <span className="text-xs text-gray-600 mt-1">{vehicle}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => handleManageClick(spot.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Car size={16} />
                    <span>Manage Parking Spot</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;