// components/LoginForm.jsx
import React, { useState } from "react";

const LoginPage = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!registerNumber || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }

    // For demonstration, you can replace this with actual login logic
    console.log("Login Info:", { registerNumber, password });
    setErrorMessage(""); // Reset error message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-500 mb-6">
          Login
        </h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="registerNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Register Number / Roll Number
            </label>
            <input
              type="text"
              id="registerNumber"
              name="registerNumber"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              placeholder="Enter your register number"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-600">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
