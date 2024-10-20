"use client"; // Ensures this code runs on the client-side
import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { JoinNowButton } from "@/components/JoinNowButton";

const JoinWaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Use Convex mutation to store data in the database
  const createdb = useMutation(api.numerapi.createdb);

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Submit the name and email to the backend via Convex
    createdb({
      name,
      email,
    });

    // Log form submission
    console.log("Form submitted:", { name, email });

    // Display success message
    setMessage("Thank you for joining the waitlist!");

    // Clear form inputs
    setName("");
    setEmail("");
  };

  return (
    <div id="JoinWaitlistform" className="max-w-md mx-auto  mb-8 rounded-md shadow-md bg-black">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Join Our Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-center text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-center text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="relative flex justify-center">
          <JoinNowButton>Join Now</JoinNowButton>
        </div>
      </form>

      {/* Display success message */}
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  );
};

export default JoinWaitlistForm;
