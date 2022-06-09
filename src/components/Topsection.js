import {Link} from "react-router-dom"

function TopSection() {
    
    return (
        <div className="top-section">
            <h2 className="top-heading">Minimize your spend<br/>on marketing and wages</h2> 
            <p className="top-paragraph">Increase leads without the huge cost of recruiting and retaining B2B and sales reps,<br/> or spending thousands on marketing agencies with no transparency or results.<br/> 
            Our lead generation approach combines a mix of manual outbound calling, <br/>
            automated cold outreach and building websites that can create a flood of <br/>hungry buyers.</p>
            <Link to="/contact"><button className="more-info">More Info</button></Link>
        </div>
    )
}

export default TopSection