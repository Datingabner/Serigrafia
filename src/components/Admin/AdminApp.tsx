import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

const AdminContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLoginSuccess = () => {
    setShowDashboard(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user || !showDashboard) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard />;
};

const AdminApp: React.FC = () => {
  return (
    <AuthProvider>
      <AdminContent />
    </AuthProvider>
  );
};

export default AdminApp;