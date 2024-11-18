import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Hero Section with animation */}
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Welcome to Radiantly Movies
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Your one-stop platform for exploring, reviewing, and discovering amazing movies.
        </p>
        <div className="mt-6">
          <Link to="/movies">
            <motion.button
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Movies
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Features Section with animation */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="p-6 shadow-lg rounded-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3">Movie Database</h3>
            <p className="text-gray-500">
              Browse through a vast collection of movies, from the latest blockbusters to timeless classics.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="p-6 shadow-lg rounded-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-3">Movie Reviews</h3>
            <p className="text-gray-500">
              Read insightful movie reviews to help you make informed decisions before watching.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="p-6 shadow-lg rounded-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-3">IMDB Integration</h3>
            <p className="text-gray-500">
              View ratings and details directly from IMDb for a better user experience.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section with animation */}
      <motion.section
        className="text-center py-8 bg-gray-100 rounded-lg mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
        <p className="text-lg mb-4">
          Discover the best movies, read reviews, and stay updated with the latest releases.
        </p>
        <Link to="/movies">
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Exploring
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
