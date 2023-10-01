import "./header.css"
import { Link } from "react-router-dom"

const Header = (props) => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'green'
      }



    return (
        <div>
            <nav>
                <section>
                    <Link to="/" style={linkStyle}>
                        <div>Main Page</div>
                    </Link>
                </section>
                <section>
                    <Link to="/Food" style={linkStyle}>
                        <div>Saved Foods</div>
                    </Link>
                </section>
            </nav>
        </div>
    )
}

export default Header;