import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const AddParking = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    time: '',
    date: '',
    vehicleTypes: [],
    parkingSpots: '',
    pricePerHour: '',
    name: '',
    email: '',
    contactNumber: ''
  });

  const [uploadedImages, setUploadedImages] = useState([]);

  const vehicleOptions = ['Car', 'Bike', 'Van', 'Truck'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVehicleTypeChange = (vehicle) => {
    setFormData(prev => ({
      ...prev,
      vehicleTypes: prev.vehicleTypes.includes(vehicle)
        ? prev.vehicleTypes.filter(v => v !== vehicle)
        : [...prev.vehicleTypes, vehicle]
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In a real app, you'd upload these files to a server
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Parking spot added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-black">Add </span>
            <span className="text-green-600">Parking </span>
            <span className="text-black">Spot</span>
          </h1>
          <p className="text-gray-600">Fill in the details to add a new parking space</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Basic Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter briefly the title of your spot..."
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">Enter the place or postal code...</option>
                      <option value="colombo">Colombo</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">Select time slot</option>
                      <option value="morning">Morning (6:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 6:00 PM)</option>
                      <option value="evening">Evening (6:00 PM - 12:00 AM)</option>
                      <option value="fullday">Full Day (24 hours)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Vehicle that can park</label>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicleOptions.map((vehicle) => (
                        <label key={vehicle} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.vehicleTypes.includes(vehicle)}
                            onChange={() => handleVehicleTypeChange(vehicle)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-700">{vehicle}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-600 mb-2">Parking Spots</label>
                      <input
                        type="number"
                        name="parkingSpots"
                        value={formData.parkingSpots}
                        onChange={handleInputChange}
                        placeholder="No. of spots"
                        min="1"
                        className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-600 mb-2">Price per Hour</label>
                      <input
                        type="number"
                        name="pricePerHour"
                        value={formData.pricePerHour}
                        onChange={handleInputChange}
                        placeholder="Rs. 00.00"
                        min="0"
                        step="0.01"
                        className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-6 h-fit">
                <h2 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Detail
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name..."
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address..."
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-600 mb-2">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="Add the phone number"
                      className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Add up to 4 photos
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="relative">
                      {uploadedImages[index] ? (
                        <div className="relative w-full h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                          <img 
                            src={uploadedImages[index]} 
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer">
                          <div className="w-full h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50">
                            <Upload size={20} className="text-gray-400" />
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Post ads
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddParking;