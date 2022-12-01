import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import me from "../src/Images/me.jpg"

const Home = () => {

   
    return ( 
        
        <div className="home">
            <h1>Hi there,.... I'm Jewel</h1>
            <div >
            <img className="imageme" src={me} width="220" height="300"  alt="jewel"/>
            
            </div>
            <p>Writer, FrontEnd Developer, AltSchooler</p>

            <div >
            <button className="tech"><FaReact/>React<i class="fa-brands fa-react"></i></button> 
            <button className="tech"><FaVuejs/>vuejs<i class="fa-brands fa-vuejs"></i></button> 
            <button className="tech"><FaJs/>js<i class="fa-brands fa-js"></i></button> 
            <button className="tech"><FaCss3/>css3<i class="fa-brands fa-css3"></i></button>
            <button className="tech"><FaHtml5/>html5<i class="fa-brands fa-html5"></i></button> 
            


            </div>
            
        </div>
     
     );
}
 
export default Home;