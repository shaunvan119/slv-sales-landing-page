import CountLeads from "../CountLeads"
import Header from "../Header"

function LeadPage() {
    
    return (
        
        <div className="top-section">
        <Header/>
            <h2 className="top-heading">Lead list generation</h2> 
            <p className="top-paragraph">We can generate 1000s of decision makers with emails, mobile and landline numbers, <br/>
            using contact scraping software we can pull a data list together based on roles and job titles, generating <br/>
            a list of decision makers specific to your target audience. </p>
        <div className="counter-section">
           
            <CountLeads/>
           
            </div> 
        </div>
        
    )
}

export default LeadPage