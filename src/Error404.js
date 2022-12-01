import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="error">
            <h2>Opps</h2>
            <p>Sorry, Page cannot be found</p>

            
            <Link to= "/">Go back home</Link>
        </div>
     );
}
 
export default Error404;
