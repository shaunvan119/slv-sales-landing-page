
import CountRev from "./CountRev"
import CountLeads from "./CountLeads"
import CountWeb from "./CountWeb"
import Circle from "../assets/bg-pattern-circle.svg"

function TopSection() {
    
    return (
        
        <div className="top-section">
        <img src={Circle} alt="Logo" className="circle" /> 
            <h2 className="top-heading">Super charge your lead<br/> generation</h2> 
            <p className="top-paragraph">Increase leads without the huge cost of recruiting and retaining B2B and sales reps,<br/> or spending thousands on marketing agencies with no transparency or results.<br/> 
            our lead generation approach combines a mix of manual outbound calling, <br/>
            automated cold outreach and building websites that can create a flood of <br/>hungry buyers.</p>
        <div className="counter-section">
            <CountRev/>
            <CountLeads/>
            <CountWeb/> 
            </div> 
            <div className="color-item"></div>
        </div>
        
    )
}

export default TopSection