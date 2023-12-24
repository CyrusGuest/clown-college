import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Roster = () => {
  let students = [
    { name: "Daniel Ortiz", year: "4th Year" },
    { name: "Andrew Reed", year: "3rd Year" },
    { name: "Savannah Burton", year: "2nd Year" },
    { name: "Denise Brown", year: "2nd Year" },
    { name: "Kimberly Robinson", year: "3rd Year" },
    { name: "Joel Campbell", year: "1st Year" },
    { name: "Ralph Terry", year: "2nd Year" },
    { name: "Justin Andrews", year: "2nd Year" },
    { name: "Richard Lawrence", year: "2nd Year" },
    { name: "Paul Daniels", year: "4th Year" },
    { name: "Randy Blankenship", year: "1st Year" },
    { name: "Rachel Newman", year: "4th Year" },
    { name: "Tammy Johnson", year: "4th Year" },
    { name: "Sarah Martinez", year: "2nd Year" },
    { name: "Olivia Horn", year: "2nd Year" },
    { name: "Zachary Anderson", year: "1st Year" },
    { name: "Tonya Lopez", year: "3rd Year" },
    { name: "Jordan Collins", year: "4th Year" },
    { name: "Natalie Miller", year: "3rd Year" },
    { name: "Tony Martinez", year: "3rd Year" },
    { name: "Paul Taylor", year: "2nd Year" },
    { name: "Amy Castillo", year: "3rd Year" },
    { name: "Alexis Phillips", year: "2nd Year" },
    { name: "John Anderson", year: "4th Year" },
    { name: "Jessica Foley", year: "2nd Year" },
    { name: "Vincent Hernandez", year: "2nd Year" },
    { name: "Mr. Matthew Sullivan", year: "4th Year" },
    { name: "Melissa Washington", year: "4th Year" },
    { name: "Joshua Miller", year: "4th Year" },
    { name: "Frank Lopez", year: "2nd Year" },
    { name: "Michele Martinez", year: "4th Year" },
    { name: "Jessica Mcclain", year: "4th Year" },
    { name: "Rowena Murphy", year: "1st Year" },
    { name: "Kristen Dixon", year: "2nd Year" },
    { name: "David Black", year: "3rd Year" },
    { name: "Kim Roberts", year: "3rd Year" },
    { name: "Barbara Jones DVM", year: "3rd Year" },
    { name: "Katelyn Mccall", year: "4th Year" },
    { name: "David Brooks", year: "3rd Year" },
    { name: "Mitchell Dorsey", year: "4th Year" },
    { name: "Jesse Vega", year: "1st Year" },
    { name: "Cynthia Warner", year: "2nd Year" },
    { name: "Nathan Garza", year: "2nd Year" },
    { name: "William Clark", year: "2nd Year" },
    { name: "Gregory Hubbard", year: "4th Year" },
    { name: "Jason Wyatt", year: "4th Year" },
    { name: "Arthur Garcia", year: "4th Year" },
    { name: "Christopher Flores", year: "3rd Year" },
    { name: "Maria Thomas", year: "1st Year" },
    { name: "Barry Webb", year: "1st Year" },
    { name: "Mark Shannon", year: "3rd Year" },
    { name: "Michael Rodriguez", year: "2nd Year" },
    { name: "Nancy Lopez PhD", year: "4th Year" },
    { name: "Jenny Harris", year: "3rd Year" },
    { name: "Mark Coffey", year: "1st Year" },
    { name: "Nathaniel Morton", year: "2nd Year" },
    { name: "Helen Peterson MD", year: "4th Year" },
    { name: "Sean Lewis", year: "2nd Year" },
    { name: "Keith Murphy", year: "2nd Year" },
    { name: "Jacob Rowe", year: "1st Year" },
    { name: "Jorge Ortiz", year: "2nd Year" },
    { name: "Michael Gillespie DDS", year: "1st Year" },
    { name: "Brian Smith", year: "2nd Year" },
    { name: "Julie Wood", year: "3rd Year" },
    { name: "Joseph Andrews", year: "3rd Year" },
    { name: "Samuel Nunez", year: "2nd Year" },
    { name: "Kelsey Miller", year: "2nd Year" },
    { name: "Curtis Bell", year: "1st Year" },
    { name: "Philip Gregory", year: "4th Year" },
    { name: "Erin Rodgers", year: "3rd Year" },
    { name: "Victoria Hoffman", year: "2nd Year" },
    { name: "Michelle Erickson", year: "4th Year" },
    { name: "Charles Flores", year: "3rd Year" },
    { name: "Renee Luna", year: "3rd Year" },
    { name: "Darlene Wilson", year: "1st Year" },
    { name: "Darren Mcbride", year: "4th Year" },
    { name: "Michael Johnson", year: "1st Year" },
    { name: "Corey Zhang", year: "2nd Year" },
    { name: "Holly Dodson", year: "4th Year" },
    { name: "Ashley Jefferson", year: "4th Year" },
    { name: "Jeremy Buchanan", year: "1st Year" },
    { name: "Theresa Patton", year: "2nd Year" },
    { name: "Debra Robinson", year: "4th Year" },
    { name: "Wendy Gonzales", year: "4th Year" },
    { name: "Robin Hahn", year: "2nd Year" },
    { name: "Mary Aguilar", year: "1st Year" },
    { name: "James Jones", year: "2nd Year" },
    { name: "Jeffrey Lee", year: "2nd Year" },
    { name: "James Howard", year: "4th Year" },
    { name: "Christopher Clark", year: "4th Year" },
    { name: "Nathan Horton", year: "4th Year" },
    { name: "Manuel Boyd", year: "3rd Year" },
    { name: "David Moody", year: "4th Year" },
    { name: "Elizabeth Johns", year: "3rd Year" },
    { name: "Stephanie Jackson", year: "1st Year" },
    { name: "Alex Wells", year: "4th Year" },
    { name: "Aaron Klein", year: "2nd Year" },
    { name: "Mitchell Good", year: "3rd Year" },
    { name: "Tiffany Carroll", year: "2nd Year" },
    { name: "Francisco Hooper", year: "3rd Year" },
  ];

  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-6xl mb-12">
        <h1 className="text-3xl mt-6 mb-4">2024-2025 Roster</h1>
        <p className="mb-6">Meet our talented group of clowns-in-training!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-md">{student.year}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Roster;
