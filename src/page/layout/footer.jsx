import React from 'react';

const Footer = () => {
  return (
    <div className="bg-green-900 text-white py-6  mt-3">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">UMUSHONGE</h3>
            <p className="text-gray-400">
              UMUSHONGE Flour is a nutritious, high-quality multigrain flour blend designed to enhance health and wellness while promoting Rwandan agricultural products. 
              
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 ">Home</a></li>
              <li><a href="/about" className="text-gray-400 ">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 ">Contact</a></li>
              <li><a href="/privacy-policy" className="text-gray-400">Shop</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Contact</h3>
            <p className="text-gray-400">Phone: +250 78807704</p>
            <p className="text-gray-400">Customers: +250 798580856</p>
            <p className="text-gray-400">Email: golden250gramsltd@gmail.com</p>
            <p className="text-gray-400">Address: Kigali, Rwanda</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Follow Us</h3>
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
            &copy; {new Date().getFullYear()} UMUSHONGE. All rights reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
