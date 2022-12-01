import React from "react";
import {FaGithub, FaMedium, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin} from "react-icons/fa"



const Contacts = () => {
    return ( 
    <div className="contacts">
        <h2>You can always find me on one of these</h2>

         <div>

         <a href="https://github.com/jeweleni">
          <button className="github"><FaGithub/> GitHub<i className="fa-brands fa-github"></i></button>
        </a>


         <a href="https://twitter.com/jeweleni_diva/">
          <button className="twitter"><FaTwitter/> Twitter<i className="fa-brands fa-twitter"></i></button>
        </a>

        
      <a href=" https://medium.com/@EMJCREATES"> 
        <button className="medium"><FaMedium/> Medium<i className="fa-brands fa-medium"></i></button>
      </a>

      <a href=" https://https://www.linkedin.com/in/momoreoluwa-jewel-eni-018848188/"> 
        <button className="linkedin"><FaLinkedin/> linkedin<i className="fa-brands fa-linkedin"></i></button>
      </a>


      <a href=" https://www.instagram.com/emj_creates/">
        <button className="instagram"><FaInstagram/> Instagram<i className="fa-brands fa-medium"></i></button>
      </a> 

    

      <a href="mailto:jeweleni@gmail.com">
        <button className="email">< FaEnvelope />Email</button>
      </a>


         </div>

    </div> );
}
 
export default Contacts;