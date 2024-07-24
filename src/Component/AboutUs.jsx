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
               <div className=" text-xl md:text-3xl font-serfic pb-3  text-teal-300">ABOUT</div>
               <div className=" text-lg md:text-xl">This is the selection of works of Marta Veludo. Currently working in Amsterdam. Inspired by the pop-culture, folk art, pound shops and tumblr, fascinated by inventions, colour, movement and compositions. She designs & conceptualises for both cultural and commercial fields. Whether in the digital realm or on a three-dimensional scale, she combines different disciplines and mediums to build engaging experiences.</div>    
            </div>
            <div className=" lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3 text-teal-300">WHAT LAGNUAGES AND FRAMEWORKS I KNOW</div>
               <div className=" text-lg md:text-xl">HTML — Css — Tailwind Css — Daisyui —Javascript – React js — Express Js — Mongo DB</div>    
            </div>
            
            <div className="lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-5 pr-5">
               <div className=" text-xl md:text-3xl font-serfic pb-3 text-teal-300">EXPIRENCE</div>
               <div className="text-lg md:text-xl">This is the selection of works of Marta Veludo. Currently working in Amsterdam. Inspired by the pop-culture, folk art, pound shops and tumblr, fascinated by inventions, colour, movement and compositions. She designs & conceptualises for both cultural and commercial fields. Whether in the digital realm or on a three-dimensional scale, she combines different disciplines and mediums to build engaging experiences.</div>    
            </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;