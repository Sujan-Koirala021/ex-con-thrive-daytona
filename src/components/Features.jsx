import React from 'react';
import Career from '../assets/img/career.png';
import Housing from '../assets/img/housing.png';
import Legal from '../assets/img/legal.png';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">More than just a tool</h2>
        <p className="text-gray-600 mb-12">Explore what else we can do for you</p>

        {/* Flexbox to align cards horizontally */}
        <div className="flex justify-center space-x-8 p-8">
          {/* Career Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs">
            <div className="flex justify-center mb-4 p-8">
              <img src={Career} alt="Career Icon" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Assistance</h3>
            <p className="text-gray-600">Tailored job search assistance, resume writing support, and interview preparation.</p>
          </div>

          {/* Housing Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs">
            <div className="flex justify-center mb-4 p-8">
              <img src={Housing} alt="Housing Icon" className="w-20 h-20" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mental Health Support</h3>
            <p className="text-gray-600">Receive guidance on mental health resources, counseling services, and strategies for emotional well-being during reintegration</p>
          </div>

          {/* Legal Feature */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs">
            <div className="flex justify-center mb-4 p-8">
              <img src={Legal} alt="Legal Icon" className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Legal Support</h3>
            <p className="text-gray-600">Guidance on legal rights, record expungement, and finding pro-bono services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
