import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import me from "../src/Images/me.jpg"
import { motion } from "framer-motion";


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
            <p className="info">Writer, FrontEnd Developer, AltSchooler</p>

            <div className="skills">
            <button className="react"><FaReact/>React<i class="fa-brands fa-react"></i></button> 
            <button className="vue"><FaVuejs/>vuejs<i class="fa-brands fa-vuejs"></i></button> 
            <button className="js"><FaJs/>js<i class="fa-brands fa-js"></i></button> 
            <button className="css"><FaCss3/>css3<i class="fa-brands fa-css3"></i></button>
            <button className="html"><FaHtml5/>html5<i class="fa-brands fa-html5"></i></button> 
            


            </div>
            
        </motion.div>
     
     );
}
 
export default Home;