import React, { useState, useEffect } from 'react';
import Img from '/Images/head.webp';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Header() {
  const fullText = "Hiii! I'm Janhavi Bandhane. I'm a Web Developer With 7 Months Of Experience";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed of the typewriter effect here
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [fullText]);

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce {
            animation: bounce 1s infinite;
          }
        `}
      </style>
      <div className="w-full z-10 ">
        <img src={Img} className="w-full md:h-[55rem] h-[30rem]" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
          <div className="text-center lg:text-5xl md:text-4xl text-2xl text-white font-bold space-y-3 md:mt-12 mt-[-10rem]">
            <span className=' lg:pl-20 lg:pr-20'>{displayedText}</span>
          </div>
          <div className="text-white md:text-2xl text-xl font-semibold text-center mt-6 bounce">
            Explore More 
            <MdOutlineKeyboardArrowDown className="ml-12 text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
