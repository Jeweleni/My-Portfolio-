import { useState,useEffect } from "react";
import PortfolioList from "./PortfolioList";
import { motion } from "framer-motion";

const Portfolio = () => {
    
        const [portfolio, setPortfolio] = useState([
         {title: "Github Portfolio", body: "Lorem ipsum...", author: "EMJcreates", url:"https://jewelaltschool2ndsemesterexam.netlify.app/", id: 1, },
         {title: "Book App", body: "Lorem ipsum...", author: "EMJcreates", url: "https://book-app-olive.vercel.app/", id: 2},
         {title: "Reciepe Website", body: "Lorem ipsum...", author: "EMJcreates", url:"https://food-website-tau.vercel.app/", id: 3, },
         {title: "Party Website", body: "Lorem ipsum...", author: "EMJcreates", url: "https://altschoolreactrouterassignment.netlify.app/",  id: 4},
         {title: "Calculator App", body: "Lorem ipsum...", author: "EMJcreates", url: "https://Altschool-Calculator-App-Assignment.emjcreates.repl.co",  id: 5},
        ]);
     
     
     
     
        useEffect(() => {
     
           fetch("http://localhost:8000/portfolio")
             .then(res =>{
              return res.json()
             })
             .then(data => {
              console.log(data);
             })
        }, [setPortfolio]);
     
     
       
         return ( 

         
             
             <motion.div className="portfolio"
             initial={{opacity: 0,}}
            animate={{opacity: 1,}}
            exit={{opacity:0,}}
            >
              <h2>
               <p className="title">My Creations</p>

               </h2>
                 <PortfolioList portfolio={portfolio} title=""  />
                 
             </motion.div>
            
          );
     }

export default Portfolio;