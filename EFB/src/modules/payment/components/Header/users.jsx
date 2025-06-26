import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white shadow-md rounded-2xl flex w-2/3 max-w-4xl overflow-hidden">
          {/* Sign In Form */}
          <div
            className={`w-2/3 p-5 transform transition-transform duration-500 ease-in-out ${
              isSignUp ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-left font-bold">
              <span className="text-yellow-300">EFB</span> (english for beginners)
            </div>
            <div className="py-10 ma ">
              <h2 className="text-3xl font-bold mb-2 text-[#ebd8c3]">Sign In</h2>
              <div className="border-2 w-10 border-[#ebd8c3] inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <p className="border-2 border-gray-200 p-3 mx-2 rounded-full">
                  <i className="bi bi-facebook"></i>
                </p>
                <p className="border-2 border-gray-200 p-3 mx-2 rounded-full">
                  <i className="bi bi-google"></i>
                </p>
                <p className="border-2 border-gray-200 p-3 mx-2 rounded-full">
                  <i className="bi bi-instagram"></i>
                </p>
              </div>
              <p className="text-gray-500 mb-2">or use your email account</p>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                />
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex">
                  <input type="checkbox" />
                  <p className="text-gray-500">Forgot Password?</p>
                </div>
                <div className="flex">
                  <input type="checkbox" />
                  <p className="text-gray-500">Remember Me</p>
                </div>
              </div>
              <button
                className="border-2 border-[#ebd8c3] text-[#ebd8c3] rounded-full px-12 py-2 hover:bg-[#ebd8c3] hover:text-white transition duration-300 w-48"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
              <p
                className="mt-4 text-blue-500 cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Don't have an account? Sign up
              </p>
            </div>
          </div>

          {/* Sign Up Form - Có thể thêm nội dung sau */}
          <div
            className={`w-2/3 p-5  transform transition-transform duration-500 ease-in-out ${
              isSignUp ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="text-left font-bold">
              <span className="text-yellow-300">EFB</span> (english for beginners)
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 text-[#ebd8c3]">Sign Up</h2>
              <div className="border-2 w-10 border-[#ebd8c3] inline-block mb-2"></div>
              <p className="text-gray-500 mb-2">Create your account</p>
              {/* Nội dung form đăng ký sẽ thêm ở đây */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 rounded-full px-4 py-2 mb-4 w-64"
                />
              </div>
              <button
                className="border-2 border-[#ebd8c3] text-[#ebd8c3] rounded-full px-12 py-2 hover:bg-[#ebd8c3] hover:text-white transition duration-300 w-48"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
              <p
                className="mt-4 text-blue-500 cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Already have an account? Sign in
              </p>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="w-2/3 bg-[#ebd8c3] rounded-tr-2xl rounded-br-2xl py-36 px-12 relative z-10">
            <h2 className="text-3xl font-bold mb-2 text-white">
              {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <div
              className="border-2 w-10 border-white inline-block mb-2"
              style={{ transition: "width 0.3s ease" }}
            ></div>
            <p className="mb-2 text-white text-xl">
              {isSignUp
                ? "Welcome back! Let's get started."
                : "Fill up personal information and start journey with us"}
            </p>
            <button
              className="border-2 border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-[#ebd8c3] text-white transition duration-300"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };