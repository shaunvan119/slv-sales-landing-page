import {Link} from "react-router-dom"

function TopSection() {
    
    return (
        <div className="top-section">
            <h2 className="top-heading">Minimize your spend<br/>on marketing and wages</h2> 
            <p className="top-paragraph">Increase leads without the huge cost recruiting and retaining B2B and sales reps,<br/>employing internal sales staff is a huge cost to your business, You recruit a B2B,<br/>spend time and money on training, then in 6 to 10 months time they leave<br/> and then you start the cycle again causing disruption to the sales cylce.<br/>Break the cycle and find out how we can help  </p>
            <Link to="/contact"><button className="more-info">More Info</button></Link>
        </div>
    )
}

export default TopSection