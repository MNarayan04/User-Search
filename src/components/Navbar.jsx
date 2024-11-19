// import React from 'react'
// import Logo from '../assets/logo.svg'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Search from './Search'

// const Navbar = () => {
//   const { pathname } = useLocation()
//   const navigate = useNavigate()

//   return (
//     <div
//       className={`flex items-center justify-between p-4 px-8 border-b md:flex-row gap-x-4 flex-col `}
//     >
//       <div
//         className="flex items-center mb-4 cursor-pointer md:mb-0"
//         onClick={() => navigate('/')}
//       >
//         <img src={Logo} alt="Girman Technologies " className="mr-2" />
//         <div>
//           <h1 className="text-xl font-bold">Girman</h1>
//           <p className="text-sm text-gray-500">TECHNOLOGIES</p>
//         </div>
//       </div>
//       <div
//         className={`${pathname.includes('results') && 'w-[80%] md:w-[40%]'}`}
//       >
//         {pathname.includes('results') ? (
//           <Search />
//         ) : (
//           <div className="flex space-x-4">
//             <a
//               onClick={() => navigate('/results')}
//               className="font-bold text-blue-600 underline cursor-pointer underline-offset-4"
//             >
//               SEARCH
//             </a>
//             <a
//               href="https://girmantech.com/"
//               target="_blank"
//               className="font-semibold text-gray-800"
//             >
//               WEBSITE
//             </a>
//             <a
//               href="https://www.linkedin.com/company/girmantech/"
//               target="_blank"
//               className="font-semibold text-gray-800"
//             >
//               LINKEDIN
//             </a>
//             <a
//               href="mailto:contact@girmantech.com"
//               className="font-semibold text-gray-800"
//             >
//               CONTACT
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }




import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 px-8 border-b md:flex-row flex-wrap gap-x-4">
      {/* Logo Section */}
      <div
        className="flex items-center mb-4 cursor-pointer md:mb-0"
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="Girman Technologies" className="mr-2" />
        <div>
          <h1 className="text-xl font-bold">Girman</h1>
          <p className="text-sm text-gray-500">TECHNOLOGIES</p>
        </div>
      </div>

      {/* Hamburger Icon (Only Visible on Mobile) */}
      <div
        className="md:hidden flex items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Menu Items (Desktop and Mobile) */}
      <div
      style={{marginLeft:"246px"}}
        className={`md:flex z-12 ${isMenuOpen ? 'block' : 'hidden'} flex-col`}
      >
        {pathname.includes('results') ? (
          <Search />
        ) : (
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <a
              onClick={() => navigate('/results')}
              className="font-bold text-blue-600 underline cursor-pointer underline-offset-4 mb-2 md:mb-0"
            >
              SEARCH
            </a>
            <a
              href="https://girmantech.com/"
              target="_blank"
              className="font-semibold text-gray-800 mb-2 md:mb-0"
            >
              WEBSITE
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech/"
              target="_blank"
              className="font-semibold text-gray-800 mb-2 md:mb-0"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@girmantech.com"
              className="font-semibold text-gray-800 mb-2 md:mb-0"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
