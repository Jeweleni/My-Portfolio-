import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="links">
                
                <Link to="/About"> About Me</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/Portfolio">Portfolio</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;