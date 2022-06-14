import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <div className="navDiv">
            <nav className="navbar">
                <Link to="/">Home</Link>
            <Link to="/Settings">Settings</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;