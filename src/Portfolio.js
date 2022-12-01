import { useState,useEffect } from "react";
import PortfolioList from "./PortfolioList";


const Portfolio = () => {
        const [portfolio, setPortfolio] = useState([
         {title: "Github Portfolio", body: "Lorem ipsum...", author: "EMJcreates", url:"https://jewelaltschool2ndsemesterexam.netlify.app/", id: 1, },
         {title: "Book App", body: "Lorem ipsum...", author: "EMJcreates", url: "https://book-app.emjcreates.repl.co", id: 2},
         {title: "Party Website", body: "Lorem ipsum...", author: "EMJcreates", url: "https://altschoolreactrouterassignment.netlify.app/",  id: 3},
         {title: "Calculator App", body: "Lorem ipsum...", author: "EMJcreates", url: "https://Altschool-Calculator-App-Assignment.emjcreates.repl.co",  id: 4},
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
             
             <div className="home">
                 <PortfolioList portfolio={portfolio} title="" />
             </div>
          
          );
     }

export default Portfolio;