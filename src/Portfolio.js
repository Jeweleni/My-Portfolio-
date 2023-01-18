import { useState,useEffect } from "react";
import PortfolioList from "./PortfolioList";
import { motion } from "framer-motion";
import rentalagency from "../src/Images/portfolioimg/rentalagency.png";
import github from "../src/Images/portfolioimg/github.png";
import bookapp from "../src/Images/portfolioimg/bookapp.png";
import recipe from "../src/Images/portfolioimg/recipe.png";
import party from "../src/Images/portfolioimg/party.png";
import calculator from "../src/Images/portfolioimg/calculator.png";

const Portfolio = () => {
    
        const [portfolio, setPortfolio] = useState([
         {title: "Rental Agency", image: <img src={rentalagency} width="100" height="75s"  alt="" />, body: "Lorem ipsum...", author: "EMJcreates", url: "https://rental-agency.vercel.app/", id: 1},
         {title: "Github Portfolio", image: <img src={github} width="100" height="75" alt=""/>, body: "Lorem ipsum...", author: "EMJcreates", url:"https://holiday-challenge-my-github-portfolio.vercel.app/", id: 2, },
         {title: "Book App",image: <img src={bookapp} width="100" height="75" alt=""/>, body: "Lorem ipsum...", author: "EMJcreates", url: "https://book-app-olive.vercel.app/", id: 3},
         {title: "Reciepe Website", image: <img src={recipe} width="100" height="75" alt=""/>, body: "Lorem ipsum...", author: "EMJcreates", url:"https://food-website-byemjcreates.vercel.app/", id: 4, },
         {title: "Party Website", image: <img src={party} width="100" height="75" alt=""/>, body: "Lorem ipsum...", author: "EMJcreates", url: "https://altschoolreactrouterassignment.netlify.app/",  id: 5},
         {title: "Calculator App", image: <img src={calculator} width="100" height="75" alt=""/>, body: "Lorem ipsum...", author: "EMJcreates", url: "https://Altschool-Calculator-App-Assignment.emjcreates.repl.co",  id: 6},
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