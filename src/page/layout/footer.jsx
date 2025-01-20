import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#070b17] text-white py-6 mt-12 border-t-2">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">IKTECH</h3>
            <p className="text-white">
              Your trusted platform for seamless property rentals in Rwanda. We connect landlords and tenants directly for a faster, more transparent rental experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 ">Home</a></li>
              <li><a href="/about" className="text-gray-400 ">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 ">Contact</a></li>
              <li><a href="/privacy-policy" className="text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Phone: +250 123 456 789</p>
            <p className="text-gray-400">Email: info@rentalhub.rw</p>
            <p className="text-gray-400">Address: Kigali, Rwanda</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col">
              <a href="#" className="text-gray-400">
                <i className="fab fa-facebook-f">Facebook</i> {/* Replace with actual icon */}
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-twitter">Twitter</i> {/* Replace with actual icon */}
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-instagram">Instagram</i> {/* Replace with actual icon */}
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-wa">Whastapp</i> {/* Replace with actual icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='bg-white h-[1px] m-8'></div>
        <div className=" text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IKTECH. All rights reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
