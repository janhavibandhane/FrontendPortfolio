import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import form from "/Images/Form.gif"
import axios from 'axios';

function Contact({Img,item1,item2,style}) {
  const [email, setEmail] = useState('');
  const[name,SetName]=useState('');
  const[text,setText]=useState('');

  //  const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   try {
  //     const response=await axios.post('http://localhost:3000/users',
  //       {email,name,text}
  //     );
  //     alert("Submited")
  //     // reset it
  //     setEmail('');
  //     SetName('');
  //     setText('');
  //   } catch (error) {
  //     console.log(error)
  //     alert("Response Not submted")
  //   }
  //  }



  const clipPathStyle = {
    clipPath: "polygon(0 0, 15% 0, 0 15%, 0 100%, 100% 100%, 100% 0)",
  };
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid  #cccccc",
    outline: "none",
    padding: "8px 0",
    width: "100%",
  };

  return (
    <div className=" bg-[#02021E] flex justify-center font-Poppins md:pr-8 md:pl-8 pr-8 pl-8 pt-60 h-[70rem]"
    style={{style}}
    >

      <div
        className={`lg:w-[70rem] lg:h-[35.8rem] md:w-[48rem] md:h-[30.8rem] w-[40rem] h-[53rem] rounded-xl overflow-hidden bg-white  md:flex md:justify-evenly`}
        style={{ ...clipPathStyle }}
      >
        {/* GIF */}
        <div >
          <img src={form} ></img>
        </div>
       
       {/* All Inputs */}
        <div className="md:pt-10 lg:ml-[-5rem] pl-3 pr-3">
          <div className=" lg:text-[2rem] md:text-[1.5rem] font-bold text-[1.5rem] md:ml-0 ml-3">
            {item1}
          </div>

          <div className=" md:flex justify-between mt-3">
            <div>
              <div className=" lg:text-xl md:text-lg text-[#02021E]">Full Name</div>
              <input type="text"
               placeholder="Enter text" 
               style={inputStyle}
               value={name}
               onChange={(e)=>SetName(e.target.value)}
               />
            </div>
            <div>
              <div className=" lg:text-xl md:text-lg text-[#02021E]">Email</div>
              <input type="text" 
              placeholder="Enter text" 
              style={inputStyle} 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="lg:text-xl md:text-lg mt-10 text-[#02021E]">Message</div>
            <input type="text" 
            placeholder="Enter text" 
            style={inputStyle} 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
          </div>

          <div className=" flex mt-10 text-[#cccccc]">
              <div className=" mr-5 text-sm">   </div>
              <button className="btn  lg:w-[10rem] lg:h-[2rem] md:w-[7rem] md:h-[1.5rem] w-[7rem] bg-[#02021E] text-white hover:text-black  "
              // onClick={handleSubmit}
              >Submit </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Contact;
