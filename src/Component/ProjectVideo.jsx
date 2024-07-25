import React from 'react';
import v from "/Images/adechofull.mp4"

function ProjectVideo() {
  return (
    <div className="flex flex-col items-center space-y-8 bg-[#02021E] pt-40 h-[60rem] p-10">


      <div className=' bg-slate-100 md:w-[50rem] md:h-[35rem] h-[25rem] flex flex-col justify-center items-center rounded-lg'>
        <div className=' text-[#1b6c7e] text-2xl font-bold'>Adecho Technologies Website</div>
        <div className=' md:text-lg text-black pb-5'>At Adecho Technologies, I worked on this full project</div>
        <div className=' md:text-lg text-black pb-5 pl-1 pr-1'>Technologies i use in this project React js ,Tailwind Css,Daisyui for frontend.</div> 
        <video width="900" controls>
          <source src={v} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>
     
    </div>
  );
}

export default ProjectVideo;
