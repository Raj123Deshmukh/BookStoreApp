// AboutUs.js

import React from 'react';
import bookstore from "../../public/bookstore.jpg"
import Footer from './Footer';
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    <Navbar/>

    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">About Us</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Welcome to [Bookstore Name], where we have been passionate about books and literature for over a decade. Our mission is to provide a welcoming space for book lovers to discover, explore, and enjoy their favorite reads. With a carefully curated selection of books from various genres, we strive to cater to the diverse interests of our community.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={bookstore}
                alt="Bookstore"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Our knowledgeable staff is here to help you find the perfect book based on your interests and reading history. We offer personalized recommendations to ensure you find your next great read.
              </p>
            </div>
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Clubs & Events</h3>
              <p className="text-gray-600">
                Join our vibrant book clubs and attend events featuring authors, book signings, and literary discussions. We host regular events to bring together book enthusiasts and foster a love of reading.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Ordering & Delivery</h3>
              <p className="text-gray-600">
                Browse our extensive catalog online and enjoy convenient ordering and delivery options. Whether you're at home or on the go, we make it easy to get the books you love delivered right to your door.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Offers</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-2">20% off all new arrivals - Use code NEW20 at checkout.</li>
            <li className="mb-2">Buy 2 get 1 free on select classics.</li>
            <li>Free shipping on orders over $50.</li>
          </ul>
        </div>
      </div>
    </div>
  
  <Footer/>

  </>
  );


 
 
};

export default About;
