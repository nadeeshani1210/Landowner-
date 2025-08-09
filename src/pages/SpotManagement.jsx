import React, { useState } from 'react';
import { MapPin, Car, Clock, User, Calendar } from 'lucide-react';

const SpotManagement = () => {
  const [editingSpot, setEditingSpot] = useState(null);
  const [spots, setSpots] = useState([
    {
      id: 'A-001',
      status: 'Available',
      location: 'Main Street Parking',
      timeSlot: '10:00 AM - 2:00 PM',
      customer: null
    },
    {
      id: 'A-024',
      status: 'Booked',
      location: 'Main Street Parking',
      timeSlot: 'Booked 10:00-12:00AA',
      customer: 'Parked at 9:30 AM'
    },
    {
      id: 'A-003',
      status: 'Available',
      location: 'Mall/Dura Parking',
      timeSlot: '2:00 PM - 6:00 PM',
      customer: null
    },
    {
      id: 'A-004',
      status: 'Booked',
      location: 'Main Street Parking',
      timeSlot: 'Booked 2:00-4:00PM',
      customer: 'Parked at 2:10 PM'
    },
    {
      id: 'A-005',
      status: 'Closed',
      location: 'Mall/Dura Parking',
      timeSlot: 'Temporarily Closed',
      customer: null
    },
    {
      id: 'A-006',
      status: 'Booked',
      location: 'Main Street Parking',
      timeSlot: 'Booked 6:00-8:00PM',
      customer: 'Parked at 5:50 PM'
    }
  ]);

  const getSpotStyles = (status) => {
    switch (status) {
      case 'Available':
        return {
          cardBg: 'bg-green-100 bg-opacity-30 border-green-300',
          statusColor: 'bg-green-100 text-green-800 border-green-200',
          iconBg: 'bg-green-50',
          iconColor: 'text-green-600'
        };
      case 'Booked':
        return {
          cardBg: 'bg-red-100 bg-opacity-30 border-red-300',
          statusColor: 'bg-red-100 text-red-800 border-red-200',
          iconBg: 'bg-red-50',
          iconColor: 'text-red-600'
        };
      case 'Closed':
        return {
          cardBg: 'bg-red-200 bg-opacity-50 border-red-400',
          statusColor: 'bg-red-200 text-red-900 border-red-400',
          iconBg: 'bg-red-100',
          iconColor: 'text-red-700'
        };
      default:
        return {
          cardBg: 'bg-gray-100 bg-opacity-30 border-gray-300',
          statusColor: 'bg-gray-100 text-gray-800 border-gray-200',
          iconBg: 'bg-gray-50',
          iconColor: 'text-gray-600'
        };
    }
  };

  const updateSpotStatus = (spotId, newStatus) => {
    setSpots(spots.map(spot => 
      spot.id === spotId 
        ? { ...spot, status: newStatus }
        : spot
    ));
    setEditingSpot(null);
  };

  const stats = [
    {
      title: 'Total Parking spots',
      value: spots.length.toString(),
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    },
    {
      title: 'Available spots',
      value: spots.filter(spot => spot.status === 'Available').length.toString(),
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    },
    {
      title: 'Occupied spots',
      value: spots.filter(spot => spot.status === 'Booked').length.toString(),
      bgColor: 'bg-white',
      textColor: 'text-gray-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Spot Management
          </h1>
          <p className="text-gray-600">Monitor and manage individual parking spaces</p>
        </div>

        {/* Current Location */}
        <div className="mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <MapPin size={18} className="mr-2 text-green-600" />
              Main Street Parking
            </h2>
            <p className="text-gray-600 ml-6">123 Main Street, Downtown</p>
          </div>
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

        {/* Bookings Grid */}
        <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Current Bookings & Available Spots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot) => {
              const styles = getSpotStyles(spot.status);
              
              return (
                <div key={spot.id} className={`border-2 ${styles.cardBg} rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 relative`}>
                  {/* Edit Button */}
                  <button
                    onClick={() => setEditingSpot(spot.id)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 hover:text-gray-800 p-1 rounded-full transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m18.5 2.5 3 3L10 17H7v-3L18.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Spot ID and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-800">{spot.id}</h3>
                    <span className={`px-3 py-1 rounded-full ${spot.status === 'Closed' ? 'text-base font-bold' : 'text-xs'} font-medium border ${styles.statusColor}`}>
                      {spot.status === 'Closed' ? 'CLOSED' : spot.status}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={14} className="mr-2" />
                    <span className="text-sm">{spot.location}</span>
                  </div>

                  {/* Time Slot */}
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock size={14} className="mr-2" />
                    <span className="text-sm">{spot.timeSlot}</span>
                  </div>

                  {/* Customer Info (if booked) */}
                  {spot.customer && (
                    <div className="flex items-center text-gray-600 mb-4">
                      <User size={14} className="mr-2" />
                      <span className="text-sm">{spot.customer}</span>
                    </div>
                  )}

                  {/* Vehicle Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-12 ${styles.iconBg} rounded-lg flex items-center justify-center`}>
                      <Car size={24} className={styles.iconColor} />
                    </div>
                  </div>

                  {/* Edit Modal */}
                  {editingSpot === spot.id && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg p-6 w-80 max-w-sm mx-4">
                        <h3 className="text-lg font-semibold mb-4">Edit Spot {spot.id}</h3>
                        
                        <div className="space-y-3">
                          <button
                            onClick={() => updateSpotStatus(spot.id, 'Available')}
                            className="w-full p-3 text-left bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors"
                          >
                            <span className="text-green-800 font-medium">Available</span>
                            <p className="text-green-600 text-sm">Spot is ready for booking</p>
                          </button>
                          
                          <button
                            onClick={() => updateSpotStatus(spot.id, 'Booked')}
                            className="w-full p-3 text-left bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
                          >
                            <span className="text-red-800 font-medium">Booked</span>
                            <p className="text-red-600 text-sm">Spot is currently occupied</p>
                          </button>
                          
                          <button
                            onClick={() => updateSpotStatus(spot.id, 'Closed')}
                            className="w-full p-3 text-left bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg transition-colors"
                          >
                            <span className="text-red-900 font-medium">Closed</span>
                            <p className="text-red-700 text-sm">Temporarily unavailable</p>
                          </button>
                        </div>

                        <button
                          onClick={() => setEditingSpot(null)}
                          className="w-full mt-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpotManagement;