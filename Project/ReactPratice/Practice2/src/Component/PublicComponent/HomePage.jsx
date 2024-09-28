
import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <header className="w-full flex flex-col items-center justify-center bg-blue-500 text-white py-20">
        <h1 className="text-4xl font-bold">Welcome to MyWebsite</h1>
        <p className="mt-4 text-lg">
          We provide amazing solutions to grow your business.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-500 font-semibold rounded">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p>Details about this amazing feature.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Feature 2</h3>
            <p>Details about this amazing feature.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Feature 3</h3>
            <p>Details about this amazing feature.</p>
          </div>
        </div>
      </section>

    
    </div>
  )
}




