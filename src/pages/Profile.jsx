import React, { useState } from 'react';
import { Edit, Save, User, Mail, MapPin, Phone, Building, CreditCard, Lock, Calendar, Shield } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Nimal Perera',
    email: 'nimalperera234@gmail.com',
    address: 'No. 23/A, lotus street, Homagama',
    contact: '077 2357123',
    dateOfBirth: '1985-06-15',
    nicNumber: '851651234V',
    bank: 'Bank of Ceylon (BOC)',
    accountNumber: '0734 34378 456 45678',
    accountHolder: 'Nimal Perera',
    branch: 'Homagama Branch',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [editPersonal, setEditPersonal] = useState(false);
  const [editBank, setEditBank] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear messages when typing
    setPasswordError('');
    setSuccessMessage('');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPasswordError('');
    
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setPasswordError('All password fields are required');
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    
    if (formData.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long');
      return;
    }
    
    console.log('Password change attempted:', formData);
    setSuccessMessage('Password changed successfully!');
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };

  const savePersonalInfo = () => {
    setEditPersonal(false);
    setSuccessMessage('Personal information updated successfully!');
    console.log('Personal Information Saved:', formData);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const saveBankInfo = () => {
    setEditBank(false);
    setSuccessMessage('Bank information updated successfully!');
    console.log('Bank Information Saved:', formData);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const cancelEdit = (type) => {
    if (type === 'personal') {
      setEditPersonal(false);
    } else {
      setEditBank(false);
    }
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-black">Profile </span>
            <span className="text-green-600">Management</span>
          </h1>
          <p className="text-gray-600">Manage your account information and security settings</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            {successMessage}
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* Profile Summary Card */}
            <div className="bg-white bg-opacity-70 border border-gray-200 rounded-xl shadow-sm p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{formData.name}</h2>
                <p className="text-gray-600 text-sm mb-1">{formData.email}</p>
                <p className="text-gray-500 text-xs">Parking Lot Owner • Member since 2023</p>
              </div>
            </div>

            {/* Personal Information Card */}
            <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <User size={20} className="mr-2 text-green-600" />
                  Personal Information
                </h2>
                <div className="flex space-x-2">
                  {editPersonal ? (
                    <>
                      <button
                        onClick={() => cancelEdit('personal')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={savePersonalInfo}
                        className="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors"
                      >
                        <Save size={14} />
                        <span>Save</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setEditPersonal(true)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors"
                    >
                      <Edit size={14} />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <User size={14} className="mr-1" />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <Mail size={14} className="mr-1" />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    Address
                  </label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <Phone size={14} className="mr-1" />
                    Contact Number
                  </label>
                  <input 
                    type="tel" 
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    Date of Birth
                  </label>
                  <input 
                    type="date" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <Shield size={14} className="mr-1" />
                    NIC Number
                  </label>
                  <input 
                    type="text" 
                    name="nicNumber"
                    value={formData.nicNumber}
                    onChange={handleInputChange}
                    readOnly={!editPersonal}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editPersonal 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>
              </div>
            </div>

            {/* Bank Information Card */}
            <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <Building size={20} className="mr-2 text-green-600" />
                  Bank Information
                </h2>
                <div className="flex space-x-2">
                  {editBank ? (
                    <>
                      <button
                        onClick={() => cancelEdit('bank')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveBankInfo}
                        className="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors"
                      >
                        <Save size={14} />
                        <span>Save</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setEditBank(true)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors"
                    >
                      <Edit size={14} />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <Building size={14} className="mr-1" />
                    Bank Name
                  </label>
                  <input 
                    type="text" 
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}
                    readOnly={!editBank}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editBank 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    Branch
                  </label>
                  <input 
                    type="text" 
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    readOnly={!editBank}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editBank 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <CreditCard size={14} className="mr-1" />
                    Account Number
                  </label>
                  <input 
                    type="text" 
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    readOnly={!editBank}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editBank 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2 flex items-center">
                    <User size={14} className="mr-1" />
                    Account Holder Name
                  </label>
                  <input 
                    type="text" 
                    name="accountHolder"
                    value={formData.accountHolder}
                    onChange={handleInputChange}
                    readOnly={!editBank}
                    className={`w-full h-10 px-4 rounded-full border ${
                      editBank 
                        ? 'bg-white border-green-300 focus:ring-2 focus:ring-green-500' 
                        : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                    } text-gray-800 focus:outline-none transition-all`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Account Security Card */}
            <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <Lock size={20} className="mr-2 text-green-600" />
                Account Security
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors">
                    Enable
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Login Notifications</p>
                    <p className="text-sm text-gray-600">Get notified of new logins</p>
                  </div>
                  <div className="w-12 h-6 bg-green-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Change Password Card */}
            <div className="bg-white rounded-xl border-2 border-green-200 shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <Lock size={20} className="mr-2 text-green-600" />
                Change Password
              </h2>
              
              {passwordError && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  {passwordError}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2">Current Password</label>
                  <input 
                    type="password" 
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    placeholder="Enter current password"
                    className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2">New Password</label>
                  <input 
                    type="password" 
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-600 mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                    className="w-full h-10 px-4 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-300"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    onClick={handlePasswordChange}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-sm font-medium transition-colors"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
