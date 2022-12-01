
const PortfolioList = (props) => {
    const portfolio = props.portfolio;
    const title = props.title
   


    return ( 
        <div className="portfolio-list">
            <h2>{title}</h2>
            {portfolio.map((portfolio) => (
               <div className="portfolio-preview" key={portfolio.id}>
                  <h2>{portfolio.title}</h2>
                  <p>By {portfolio.author}</p>
                  <a href={portfolio.url}>click to view</a>
                  
                 
               </div>
            ))}
        </div>
     );
}
 
export default PortfolioList;