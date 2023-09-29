import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <div>
            <nav>
                <Link to="/">
                    <div>Main Page</div>
                </Link>
                <Link to="/Food">
                    <div>Saved Foods</div>
                </Link>
            </nav>
        </div>
    )
}

export default Header;