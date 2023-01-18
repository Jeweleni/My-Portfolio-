import {FaStop} from "react-icons/fa"
import { motion } from "framer-motion";


const About = () => {
    return ( 
        <motion.div className="about"
        initial={{width: 0,}}
        animate={{width: "100%",}}
        exit={{x: window.innerWidth,transition:{ duration: 0.2}}}
        >
            <h2>NOT SO FUN FACTS ABOUT ME</h2>
            <p><FaStop/><i class="fa-sharp fa-solid fa-period"></i>Hi, my name is Jewel </p>
            <p>and I love to write.</p>
            <p>I write codes, music, novels and short stories</p>
            <p><FaStop/><i class="fa-sharp fa-solid fa-period"></i>I wrote my first "Hello World" in April of 2022 thanks to Altschool Africa </p>

            <div className="about b">
            <p><FaStop/><i class="fa-sharp fa-solid fa-period"></i>I love listening to albums </p>
            <p>and my favourite artist is BEYONCE </p>
          
            </div>
            
    
        </motion.div>
     );
}
 
export default About;
