import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);  // Navigate back to the last page
    };

    return (
        <button
            onClick={handleBackClick}
            className="btn btn-secondary mb-3"
            style={{
                backgroundColor: 'blue',
                borderRadius: '10px', // Adjust as needed
            }}
        >
            Back
        </button>
    );
};

export default BackButton;
