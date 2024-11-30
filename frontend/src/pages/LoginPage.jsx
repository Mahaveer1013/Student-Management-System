import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authSlice";

const LoginPage = () => {
  const [registerOrRollNumber, setRegisterOrRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // For Faculty login
  const [isFacultyLogin, setIsFacultyLogin] = useState(false); // Toggle for Faculty login
  const [errorMessage, setErrorMessage] = useState("");
  const [isUserExist, setIsUserExist] = useState(false); // State to check if the user exists
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // API call to check if user exists
  const checkUserExistence = async (e) => {
    e.preventDefault()
    if (isFacultyLogin && !email) {
      setErrorMessage("Faculty email is required.");
      return;
    }

    if (!isFacultyLogin && !registerOrRollNumber) {
      setErrorMessage("Register number is required.");
      return;
    }
    setIsLoading(true);
    try {
      let response;
      if (!isFacultyLogin) {
        // Check student by register number
        response = { data: "vbgh" };
      } else {
        // Check faculty by email
        response = { data: "vbgh" };
      }

      // if (response.data.exists) {
      if (response.data) {
        setIsUserExist(true); // User exists, show password field
        setErrorMessage(""); // Reset any previous error message
      } else {
        setIsUserExist(false);
        setErrorMessage("User not found");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isUserExist) {
      setErrorMessage("Please enter a valid register number/email.");
      return;
    }

    if (!password) {
      setErrorMessage("Password is required.");
      return;
    }

    // Proceed with login (mock login for now)
    if (!isFacultyLogin) {
      console.log("Student Login Info:", { registerOrRollNumber, password, role: "student" });
      dispatch(login({ registerOrRollNumber, role: "student" }))
    } else {
      console.log("Faculty Login Info:", { email, password, role: "faculty" });
      dispatch(login({ email, role: "faculty" }))
    }

    // Redirect to dashboard or wherever
    navigate("/");
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
          <div className="mb-4 text-center">
            <button
              onClick={() => setIsFacultyLogin(false)}
              type="button"
              className={`mr-4 px-4 py-2 ${!isFacultyLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              Student Login
            </button>
            <button
              onClick={() => setIsFacultyLogin(true)}
              type="button"
              className={`px-4 py-2 ${isFacultyLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              Faculty Login
            </button>
          </div>

          {/* Student Login Field */}
          {!isFacultyLogin && (
            <div className="mb-4">
              <label
                htmlFor="registerOrRollNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Register Number / Roll Number
              </label>
              <input
                type="text"
                id="registerOrRollNumber"
                name="registerOrRollNumber"
                value={registerOrRollNumber}
                onChange={(e) => setRegisterOrRollNumber(e.target.value)}
                placeholder="Enter your register number"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Faculty Login Field */}
          {isFacultyLogin && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Faculty Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Show Password Field only if User exists */}
          {isUserExist && (
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
          )}

          {isUserExist
            ?
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            :
            <button
              onClick={checkUserExistence}
              type="button"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Check User"}
            </button>
          }
        </form>

        {isUserExist && <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
            </a>
          </p>
        </div>}
      </div>
    </div>
  );
};

export default LoginPage;
