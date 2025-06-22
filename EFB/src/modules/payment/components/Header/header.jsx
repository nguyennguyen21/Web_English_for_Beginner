import React from "react";



//Header pages Home(trang chủ)
const Header = () =>{
    
    return (
       <div className="sm:flex sm:justify-between">
       <div className="lg:text-[50px] md:text-md font-bold">Logo</div>
        <ul className="sm:flex sm:flex-nowrap justify-around items-center w-1/2 ">
            <li className="lg:text-2xl md:text-md font-bold text-red-300 pr-5">Home</li>
            <li className="lg:text-2xl md:text-md sm:text-sm text-gray-600 pr-5">Document</li>
            <li className="lg:text-2xl md:text-md text-gray-600 pr-5">exams</li>
            <li className="lg:text-2xl md:text-md text-gray-600 pr-5">About</li>
            <li className="lg:text-2xl md:text-md text-gray-600 pr-5">Login</li>
        </ul>
       </div>
    );
}

export {Header} ;