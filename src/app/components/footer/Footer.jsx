import React from 'react';

const Footer = () => {
    return (
        <div >
             <footer className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} digital products</p>
      </div>
    </footer>
        </div>
    );
};

export default Footer;