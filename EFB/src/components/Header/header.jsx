import React from "react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái mở/đóng menu mobile
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const hideTimeout = useRef(null);

  // Hàm hiển thị header và đặt timeout để ẩn sau 5 giây
  const showHeader = () => {
    setIsVisible(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const buffer = 100;

      // Chỉ cho phép hiện header khi rê chuột nếu là màn hình >= 640px
      if (window.innerWidth >= 640) {
        if (e.clientY <= buffer) {
          showHeader();
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  // Hàm xử lý đăng nhập
  const handleSignIn = () => {
    setIsLoggedIn(true);
    alert("Signed in successfully!");
  };

  // Hàm xử lý đăng xuất
  const handleSignOut = () => {
    setIsLoggedIn(false);
    alert("Signed out!");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#ebd8c3] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="sm:flex sm:justify-between p-3">
        <div className="lg:text-[40px] md:text-md font-bold">Logo</div>

        {/* Nút toggle menu chỉ hiển thị dưới 640px */}
        <div
          className="md:hidden lg:hidden cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list-nested"} text-2xl`}></i>
        </div>

        {/* Menu: chỉ hiện khi là desktop hoặc là mobile và isMenuOpen = true */}
        <ul
          className={`${
            window.innerWidth >= 640 || isMenuOpen
              ? "block"
              : "hidden"
          } sm:flex sm:flex-nowrap justify-around items-center mt-2 sm:mt-0`}
        >
          {/* Home */}
          <li className="lg:text-2xl md:text-md sm:text-sm font-bold pr-5 menu-item flex items-center gap-1 hover:text-yellow-500 transition-all duration-300 link-underline">
            <i className="bi bi-house-fill"></i>
            <span className="menu-text">Home</span>
          </li>

          {/* Document */}
          <li className="lg:text-2xl md:text-md text-gray-600 pr-5 menu-item flex items-center gap-1 hover:text-blue-500 transition-all duration-300 link-underline">
            <i className="bi bi-file-earmark-text-fill"></i>
            <span className="menu-text">Document</span>
          </li>

          {/* Exams */}
          <li className="lg:text-2xl md:text-md text-gray-600 pr-5 menu-item flex items-center gap-1 hover:text-green-500 transition-all duration-300 link-underline">
            <i className="bi bi-file-ruled"></i>
            <span className="menu-text">Exams</span>
          </li>

          {/* About */}
          <li className="lg:text-2xl md:text-md text-gray-600 pr-5 menu-item flex items-center gap-1 hover:text-purple-500 transition-all duration-300 link-underline">
            <i className="bi bi-file-person-fill"></i>
            <span className="menu-text">About</span>
          </li>

          {/* Login - Dropdown */}
          <li className="relative group lg:text-2xl md:text-md text-gray-600 pr-5 menu-item flex items-center gap-1 hover:text-red-500 transition-all duration-300 link-underline">
            <i className="bi bi-person-circle"></i>
            <span className="menu-text">{isLoggedIn ? "Account" : "Login"}</span>

            {/* Dropdown menu */}
            <ul className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              {!isLoggedIn ? (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleSignIn}>
                    Sign In
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Create Account
                  </li>
                </>
              ) : (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleSignOut}>
                  Sign Out
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };