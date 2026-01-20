import { Link } from "react-router"

export const NavBar = () => {
    return (
        <nav id="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/instructions">Instructions</Link>
                </li>
            </ul>
        </nav>
    );
}