// LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the login page
    navigate("/login");
  };


    return (
        <button onClick={handleLogout} className="btn btn-primary mb-3 rounded-pill">
            Logout
        </button>
    );
};

export default LogoutButton;
