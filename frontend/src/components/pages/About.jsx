import React from 'react';
import {Link} from 'react-router-dom'
import collabPhoto from '../../assets/collabPhoto.avif'
import lokesh_photo from '../../assets/lokesh.jpg';
import ashutosh_photo from '../../assets/ashutosh.jpg';
import atul_photo from '../../assets/atul.jpg'

function About() {
  return (
    <div className="py-16 bg-customGray">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {/* Introduction Section */}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src={collabPhoto}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
              Empowering Collaboration for Learning
            </h2>
            <p className="mt-6 text-gray-600">
              Our Collaborative Study Portal is designed to bring students and educators together in an
              interactive, user-friendly platform. From managing assignments to tracking progress, we make
              learning more engaging and efficient.
            </p>
            <p className="mt-4 text-gray-600">
              Join our mission to revolutionize collaborative learning and create an environment where everyone
              can succeed.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Our Features</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-orange-600">Homework Management</h4>
              <p className="mt-2 text-gray-600">Organize and track assignments with ease.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-orange-600">Collaborative To-Do Lists</h4>
              <p className="mt-2 text-gray-600">Work together on shared tasks and projects.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-orange-600">Book Search</h4>
              <p className="mt-2 text-gray-600">Find the resources you need for your studies.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Meet Our Team</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img
                src={lokesh_photo}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-700">Lokesh Singh Bagadwl</h4>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
            <div className="text-center">
              <img
                src={ashutosh_photo}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-700">Ashutosh Rana</h4>
              <p className="text-sm text-gray-500">Backend Developer</p>
            </div>
            <div className="text-center">
              <img
                src={atul_photo}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-700">Atul Jhinkwan</h4>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Ready to Join Us?</h3>
          <p className="mt-2 text-gray-600">
            Sign up today and take your collaboration to the next level.
          </p>
          <Link to="/register">
          <button   className="mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
