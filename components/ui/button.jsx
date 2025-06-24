import React from 'react';

// Button Component
const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg text-white ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
