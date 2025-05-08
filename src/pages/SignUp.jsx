import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");           // Added state for email
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  // Added state for confirm password
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Dummy check — simulate success if something is entered
    if (email && username && password) {
      setMessage("Account created successfully!");
      navigate("/signin");
    } else {
      setMessage("Please fill all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3674B5]">
      <div className="bg-white p-8 rounded-lg shadow-md w-140">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-lg text-center mb-4">Welcome! Let’s get you set up.</p>
        <form onSubmit={handleSubmit}>
          <p className="text-sm text-left mb-2">Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}       // Corrected
            className="w-full px-3 py-2 mb-4 border rounded-lg"
            required
          />
          <p className="text-sm text-left mb-2">Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}    // Corrected
            className="w-full px-3 py-2 mb-4 border rounded-lg"
            required
          />
          <p className="text-sm text-left mb-2">Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-lg"
            required
          />
          <p className="text-sm text-left mb-2">Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  // Corrected
            className="w-full px-3 py-2 mb-4 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#3674B5] text-white py-2 rounded-lg hover:bg-[#2a5b8e] mt-4"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-center items-center mt-4 gap-1">
          <p className="text-sm">Already have an account?</p>
          <Link to="/signin" className="text-sm text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
