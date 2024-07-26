import { Link } from "react-router-dom"

function ProjectCard({item1,item2,item3}){
    return(
        <>
        <Link to={"/video"}>
        <div className="card bg-base-100 md:w-96 w-90 shadow-xl hover:translate-y-[5px]  duration-300 ease-in-out ml-2 mr-2">
          <div className="card-body">
            <h2 className="card-title">{item1}</h2>
            <p className=" text-xl font-bold">{item2}</p>
          </div>
          <figure>
            <img
              src={item3}
              alt="Shoes"
              className="h-60 w-90"
            />
          </figure>
        </div>
        </Link>
        </>
    )
}
export default ProjectCard