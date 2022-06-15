import CountAppts from "../CountAppt"
import Header from "../Header"

function ApptPage() {
    
    return (
        
        <div className="top-section">
        <Header/>
            <h2 className="top-heading">Appoitment Setting</h2> 
            <p className="top-paragraph">We qualify and set appointments for your sales team,<br/> 
            depending on the type product consumer VS enterprise based we can generate <br/>
            an average of five appointments per day. You have access to a shared calendar <br/>
            where appointments will be booked.</p>
        <div className="counter-section">
            <CountAppts/>
            </div> 
        </div>
        
    )
}

export default ApptPage