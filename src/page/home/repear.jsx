import React from 'react'

const repear = () => {
  return (
    <div>
        <section className="bg-blue-900 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400">Our Services</h2>
          <p className="text-xl text-gray-200">Repair and support services for all your tech needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Service Cards */}
          {['PC Repairs', 'Laptop Diagnostics', 'Software Installation'].map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">{service}</h3>
              <p className="text-sm text-gray-400 mb-4">
                Professional repair and maintenance services to keep your devices running smoothly.
              </p>
              <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default repear