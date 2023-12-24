import React from "react";
import Navbar from "../components/Navbar";
import banner from "../images/banner.png";
import landing from "../images/landing.jpeg";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />

      <img src={banner} alt="" className="w-full " />

      <h1 className="text-5xl text-purple-700 font-semibold text-center mt-12">
        2024 Clown College
      </h1>
      <h1 className="text-3xl text-purple-700 font-semibold text-center mt-4">
        Located in Oshkosh, Wisconsin
      </h1>

      <p className="text-3xl text-green-700 underline font-semibold text-center mx-auto mt-4">
        <a href="https://www.clowninstitute.com/registration.html">
          Click here to Register Today
        </a>
      </p>

      <div className="flex max-w-5xl mx-auto mt-8 gap-8 mb-16">
        <img className="w-1/2" src={landing} alt="" />
        <div className="w-1/2">
          <h1 className="text-3xl">Looking to expand your skills?</h1>
          <ul className="list-disc mt-4 ml-8">
            <li>
              Professional Education in the Art & Science of Clowning for over
              30 years!
            </li>
            <li>
              A full and robust curriculum for new clowns covering every aspect
              of clowning taught by experienced professional instructors
            </li>
            <li>
              An outstanding selection of courses to meet the needs of even
              experienced clowns!
            </li>
            <li>Makeup and Costume Competitions</li>
            <li>
              Build new skills, make new friends, and advance your abilities as
              a professional clown!
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
