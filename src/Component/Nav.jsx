import React, { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${showNavbar ? 'bg-[#02021E]' : 'bg-transparent'} fixed w-full z-20`}>

        <div className={`flex-1 lg:space-x-4 md:block hidden text-white`}>
          <Link to={"/"}><a className="btn btn-ghost lg:text-xl text-lg">Home</a></Link>
          <Link to={"/about"}><a className="btn btn-ghost lg:text-xl text-lg">About</a></Link>
          <Link to={"/contact"}><a className="btn btn-ghost lg:text-xl text-lg">Contact</a></Link>
          <Link to={"/video"}><a className="btn btn-ghost lg:text-xl text-lg">Project</a></Link>
        </div>

        <div className={`flex-1 ml-6 space-x-4 text-white lg:text-2xl text-xl font-semibold`}>
            <p className=' font-serfic'>Janhavi Bandhane</p>
        </div>

        <div className={` md:flex hidden text-3xl space-x-3 text-white`}>
           <div><FaInstagram /></div>
           <div><FaFacebook /></div>
           <div><FaLinkedin /></div>
        </div>

        <div className="flex-none md:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content">
               {/* Page content here */}
                 <label htmlFor="my-drawer" className={`text-2xl drawer-button text-white`}><FaGripLines /></label>
              </div>
             <div className="drawer-side">
               <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#02021E] text-base-content  min-h-full w-80 p-4 pt-20">
                {/* Sidebar content here */}
                 <li className=' text-xl text-white'><Link to={""}>Home</Link></li>
                 <li className=' text-xl text-white'><Link to={"/about"}>About Us</Link></li>
                 <li className=' text-xl text-white'><Link to={"/contact"}>Contact Us</Link></li>
                 <li className=' text-xl text-white'><Link to={"/video"}>Project</Link></li>
               </ul>
             </div>
        </div>
        </div>

        <div>

        </div>
      </div>
    </>
  );
}

export default Nav;
