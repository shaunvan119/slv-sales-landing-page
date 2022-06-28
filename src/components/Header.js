import {Link} from "react-router-dom"



function Header() {
    
    return (
        <header className="top-header">
            <h1 className="heading"><span className="color-logo">SLV</span><span className="color-dev">DEVELOPMENTS</span></h1>
            <Link to="/contact"><button className="call-button">Contact</button></Link>
              
        </header>
    )
}

export default Header