import {Link} from "react-router-dom"

function Header() {
    
    return (
        <header className="top-header">
            <h1 className="heading"><span className="color-logo">SLV</span>PERFORMANCE</h1>
            <Link to="/contact"><button className="call-button">More Info</button></Link>
        </header>
    )
}

export default Header