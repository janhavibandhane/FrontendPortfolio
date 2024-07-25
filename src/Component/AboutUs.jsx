import AboutUS from "/Images/AboutUs.gif"
function AboutUs(){
    return(
        <>
        <div className=" w-full flex flex-col justify-center items-center md:pt-20  bg-[#02021E] text-white h-[100%] font-Oxygen">
            <div className="">
               <img src={AboutUS}></img>
            </div> 
            <div className="md:space-y-20 space-y-10">
               
            <div className="lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3  text-teal-300">About me</div>
               <div className=" text-lg md:text-xl">Hi, my name is Janhavi Abdanahne. I am a third-year Bachelor of Science in Information Technology (BSc IT) student, with a strong focus on learning and mastering MERN (MongoDB, Express.js, React, and Node.js) development.</div>    
            </div>
            <div className=" lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3 text-teal-300">Skills</div>
               <div className=" text-lg md:text-xl">HTML — Css — Tailwind Css — Daisyui —Javascript – React js — Express Js — Mongo DB</div>    
            </div>
            
            <div className="lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3 text-teal-300">Professional Experience</div>
               <div className="text-lg md:text-xl">I have accumulated 7 months of professional experience at Adecho Technologies, where I was involved in three significant projects, all centered around frontend development. I began my journey at Adecho Technologies as an intern, a position I held for 3 months. My performance during this internship led to a placement offer, which I accepted. During my tenure, I honed my skills in various frontend technologies and contributed to the successful completion of several key projects.</div>    
            </div>

            <div className="lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3 text-teal-300">Leadership and Contributions</div>
               <div className="text-lg md:text-xl">In addition to my technical experience, I have been an active member of the Placement Assistance Team for the past 2 years. In this role, I have played a vital part in helping my peers secure internships and job placements, providing guidance and support throughout the placement process. My involvement in this team has enhanced my leadership, communication, and organizational skills, making me a well-rounded professional ready to tackle challenges in the IT industry.</div>    
            </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;