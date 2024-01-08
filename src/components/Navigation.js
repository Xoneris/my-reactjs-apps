import { Link } from "react-router-dom";

function Navigation() {

    return (
        <nav>
            <ul>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/calculator"><li>Calculator</li></Link>
            </ul>
        </nav>
    );
}

export default Navigation;