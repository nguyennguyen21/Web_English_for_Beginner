import React, { useState } from "react";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  // Controlled form states
  const [loginData, setLoginData] = useState({ username: "", password: "", remember: false });
  const [signUpData, setSignUpData] = useState({ fullName: "", email: "", password: "" });

  // Handlers for input changes
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSwitchForm(e) {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
  }

  function handleSignIn(e) {
    e.preventDefault();
    // TODO: Add real authentication logic
    console.log("Sign In", loginData);
  }

  function handleSignUp(e) {
    e.preventDefault();
    // TODO: Add real sign up logic
    console.log("Sign Up", signUpData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      <div className="bg-white shadow-md rounded-2xl flex w-2/3 max-w-4xl overflow-hidden relative">
        {/* Main Container */}
        <div className="w-2/3 relative flex flex-col items-center justify-center">
          <div className="text-3xl font-bold absolute z-10 top-5">
            <span className="text-yellow-300">EFB</span> (English for Beginners)
          </div>
          {/* Sign In Form */}
          <form
            className={`absolute translate-y-[10px] top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ${
              isSignUp ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
            }`}
            onSubmit={handleSignIn}
            style={{ zIndex: isSignUp ? 0 : 2 }}
            autoComplete="off"
          >
            <div className="w-full p-5">
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-[#ebd8c3]">Sign In</h2>
                <div className="border-2 w-10 border-[#ebd8c3] inline-block mb-2"></div>
                <div className="flex justify-center gap-4 mb-2">
                  <button type="button" className="border-2 border-gray-200 p-2 rounded-full" aria-label="Sign in with Facebook"><FaFacebookF /></button>
                  <button type="button" className="border-2 border-gray-200 p-2 rounded-full" aria-label="Sign in with Google"><FaGoogle /></button>
                  <button type="button" className="border-2 border-gray-200 p-2 rounded-full" aria-label="Sign in with Instagram"><FaInstagram /></button>
                </div>
                <p className="text-gray-500 mb-2 text-center">or use your email account</p>
                <div className="flex flex-col items-center">
                  <div className="flex items-center relative mb-4">
                    <FaUser className="mr-2 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="border-2 border-gray-300 rounded-full px-4 py-2 w-64 pl-10"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="flex items-center relative mb-4">
                    <FaLock className="mr-2 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border-2 border-gray-300 rounded-full px-4 py-2 w-64 pl-10"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4 w-64 mx-auto">
                  <label className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={loginData.remember}
                      onChange={handleLoginChange}
                      className="accent-[#ebd8c3] rounded-full"
                    />
                    Remember Me
                  </label>
                  <a href="#" className="text-blue-500 text-sm hover:underline">Forgot Password?</a>
                </div>
                <button
                  className="border-2 border-[#ebd8c3] text-gray-500 rounded-full px-12 py-2 hover:bg-[#ebd8c3] hover:text-white transition duration-300 w-48 mx-auto block cursor-pointer"
                  type="submit"
                >
                  Sign In
                </button>
                <p
                  className="mt-4 text-blue-500 cursor-pointer text-center"
                  onClick={handleSwitchForm}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSignUp}
                >
                  Don't have an account? <span className="underline">Sign up</span>
                </p>
              </div>
            </div>
          </form>
          {/* Sign Up Form */}
          <form
            className={`absolute translate-y-[10px] top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out ${
              isSignUp ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
            }`}
            onSubmit={handleSignUp}
            style={{ zIndex: isSignUp ? 2 : 0 }}
            autoComplete="off"
          >
            <div className="w-full p-5">
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-[#ebd8c3]">Sign Up</h2>
                <div className="border-2 w-10 border-[#ebd8c3] inline-block mb-2"></div>
                <p className="text-gray-500 mb-2">Create your account</p>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                    value={signUpData.fullName}
                    onChange={handleSignUpChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <button
                  className="border-2 border-[#ebd8c3] text-[#ebd8c3] rounded-full px-12 py-2 hover:bg-[#ebd8c3] hover:text-white transition duration-300 w-48"
                  type="submit"
                >
                  Sign Up
                </button>
                <p
                  className="mt-4 text-blue-500 cursor-pointer text-center"
                  onClick={handleSwitchForm}
                  tabIndex={0}
                  role="button"
                  aria-pressed={!isSignUp}
                >
                  Already have an account? <span className="underline">Sign in</span>
                </p>
              </div>
            </div>
          </form>
        </div>
        {/* Right Side Info */}
        <div className="w-1/3 bg-[#ebd8c3] rounded-tr-2xl rounded-br-2xl py-36 px-12 relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-2 text-white text-center">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <div
            className="border-2 w-10 border-white inline-block mb-2"
            style={{ transition: "width 0.3s ease" }}
          ></div>
          <p className="mb-2 text-white text-xl text-center">
            {isSignUp
              ? "Welcome back! Let's get started."
              : "Fill up personal information and start journey with us"}
          </p>
          <button
            className="border-2 border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-[#ebd8c3] text-white transition duration-300 mt-4"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;