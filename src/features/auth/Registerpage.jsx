import React, { useState } from "react";
import Modal from "react-modal";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import Authentication from "../../assets/standard-quality-control-concept-m.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "12px",
    overflow: "hidden",
    maxWidth: "900px",
    width: "90%",
    // Advanced height structure
    height: "auto", // Base height
    maxHeight: "calc(100vh - 40px)", // Accounts for viewport minus margin
    minHeight: "400px", // Minimum height to prevent too small modals
    // Responsive height adjustments
    "@media (min-height: 600px)": {
      maxHeight: "90vh"
    },
    "@media (min-height: 800px)": {
      maxHeight: "85vh"
    },
    // For very tall screens
    "@media (min-height: 1200px)": {
      maxHeight: "80vh"
    },
    // Mobile-specific adjustments
    "@media (max-width: 768px)": {
      width: "95%",
      maxHeight: "calc(100vh - 20px)",
      minHeight: "300px"
    }
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    backdropFilter: "blur(3px)",
    // Smooth transitions
    transition: "opacity 200ms ease-in-out",
    // Scroll handling
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Mobile overlay adjustments
    "@media (max-width: 768px)": {
      alignItems: "flex-start",
      paddingTop: "20px",
      paddingBottom: "20px"
    }
  }
};

// Make sure to bind modal to your appElement
if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

const AuthModal = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleForgotPasswordClick = () => {
    setActiveTab("forgot");
    setEmailSent(false);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to send the reset email
    console.log("Reset email would be sent to:", resetEmail);
    setEmailSent(true);
    setResetEmail("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Authentication Modal"
      closeTimeoutMS={200}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side - Promotional content with image */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white relative">
          <button
            onClick={onRequestClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -mt-16 -ml-16"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full -mb-32 -mr-32"></div>
          </div>

          {/* Content container */}
          <div className="flex flex-col justify-between h-full z-0 relative">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to Our Shopping Community
              </h2>
              <p className="mb-6 text-lg opacity-90">
                Enjoy personalized recommendations, wishlists, and members-only
                deals when you join.
              </p>
            </div>

            {/* Image container */}
            <div className="mt-8 relative">
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply opacity-20"></div>
              <div className="relative z-10">
                <img
                  src={Authentication}
                  alt="Happy people celebrating"
                  className="rounded-lg shadow-xl object-cover w-full h-48"
                />
              </div>
            </div>

            {/* Offer badge */}
            <div className="mt-6 bg-black bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium">
                <span className="font-bold">Special Offer:</span> Sign up today
                and get 20% off your first purchase!
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Auth content */}
        <div className="w-full md:w-3/5 bg-white p-6 md:p-8 relative overflow-y-auto">
          {/* Close button for mobile */}
          <button
            onClick={onRequestClose}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "login"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              LOGIN
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "register"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("register")}
            >
              REGISTER
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Sign in to your account
                </h3>
                <p className="text-sm text-gray-600">
                  Access your personalized dashboard
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="login-password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-md transition duration-200 shadow-md hover:shadow-lg"
                >
                  SIGN IN
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
                >
                  <FcGoogle size={20} />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
                >
                  <FaFacebook size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                  onClick={() => setActiveTab("register")}
                >
                  Sign up
                </button>
              </p>
            </div>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Create your account
                </h3>
                <p className="text-sm text-gray-600">
                  Join our community today
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="register-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="register-name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="register-password"
                      placeholder="Create a password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition"
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 8 characters with at least one number
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="register-confirm-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="register-confirm-password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-md transition duration-200 shadow-md hover:shadow-lg"
                >
                  CREATE ACCOUNT
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
                >
                  <FcGoogle size={20} />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
                >
                  <FaFacebook size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                  onClick={() => setActiveTab("login")}
                >
                  Sign in
                </button>
              </p>
            </div>
          )}

          {/* Forgot Password Form */}
          {activeTab === "forgot" && (
            <div className="space-y-5">
              <button
                type="button"
                className="flex items-center text-blue-600 hover:text-blue-500 mb-4"
                onClick={() => setActiveTab("login")}
              >
                <FaArrowLeft className="mr-2" />
                Back to Login
              </button>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {emailSent ? "Check your email" : "Reset your password"}
                </h3>
                {!emailSent && (
                  <p className="text-sm text-gray-600">
                    We'll send you a link to reset your password
                  </p>
                )}
              </div>

              {!emailSent ? (
                <>
                  <form className="space-y-4" onSubmit={handleResetSubmit}>
                    <div>
                      <label
                        htmlFor="reset-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="reset-email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-md transition duration-200 shadow-md hover:shadow-lg"
                    >
                      SEND RESET LINK
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-2 font-medium">
                    Password reset link sent!
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    We've sent a password reset link to your email address.
                    Please check your inbox.
                  </p>
                  <p className="text-sm text-gray-500">
                    Didn't receive the email?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-500 font-medium"
                      onClick={() => setEmailSent(false)}
                    >
                      Resend
                    </button>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;