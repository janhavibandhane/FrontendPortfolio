import ProjectCard from "../ReuseCompo/ProjectCard";
import AdechoProject from "/Images/projectAdecho.png"
import ProjectSecond from "/Images/ProjectSecond.png"
import Project3 from "/Images/Project3.png"

function Project() {
  return (
    <>
      <div className=" w-full bg-[#02021E] lg:h-[40rem] h-[90rem]">
        <div className=" text-center text-white text-3xl font-semibold pt-10">Projects Done By Me</div>
         <div className=" flex flex-col md:flex lg:flex-row lg:justify-evenly justify-center items-center pt-20 md:space-x-2 space-y-10">
       <div className=" mt-10">
       <ProjectCard 
         item1={"Adecho Technologies Webiste"}
         item2={"Click Here To See full Project"}
         item3={AdechoProject}
         />
       </div>
         <ProjectCard 
         item1={"700 Form"}
         item2={"Click Here To See full Project"}
         item3={ProjectSecond}
         />
         <ProjectCard 
         item1={"Portfolio"}
         item2={"Click Here To See full Project"}
         item3={Project3}
         />
         </div>
      </div>
    </>
  );
}
export default Project;
