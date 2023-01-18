import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import me from "../src/Images/me.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resume from "./Images/Momoreoluwa's Resume.pdf"

const Home = () => {

   
    return ( 
        
        
        <motion.div className="home"
           
        initial={{opacity: 0,}}
        animate={{opacity: 1,}}
        exit={{opacity:0,}}
        >

           

            <h1>Hi,.... I'm Jewel</h1>
            <div >
            <img className="imageme" src={me} width="220" height="300"  alt="jewel"/>
            
            </div>
            <p className="info">I'm a Writer and FrontEnd Developer in Nigeria.</p>

            <div className="tools"> <p>Some of the tools I use include;</p> </div>
            
            <div className="skills">
                
            <button className="react"><FaReact/>React<i class="fa-brands fa-react"></i></button> 
            <button className="vue"><FaVuejs/>vuejs<i class="fa-brands fa-vuejs"></i></button> 
            <button className="js"><FaJs/>js<i class="fa-brands fa-js"></i></button> 
            <button className="css"><FaCss3/>css3<i class="fa-brands fa-css3"></i></button>
            <button className="html"><FaHtml5/>html5<i class="fa-brands fa-html5"></i></button> 

            </div>

            <div className="resume">
                <button>
            <Link to="/Portfolio">CLICK FOR<br/> PORTFOLIO</Link>
            </button>
            </div>
            <div className="resume">
                <button>
                <a href= {resume}>CLICK FOR <br/> RESUME</a>
                </button>
            </div>
            
        </motion.div>
     
     );
}
 
export default Home;