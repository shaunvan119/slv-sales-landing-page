import CountCalls from "../CountCalls"
import Header from "../Header"

function ColdCallingPage() {
    
    return (
        <div className="info-container">
        <Header/>
            <h2 className="top-heading">Cold Calling</h2> 
            <p className="top-paragraph">With over 10 years experience cold calling we have developed innovative scripts that cut through<br/>
                gate keepers, and have meaningful discussions with key decision makers. How many times <br/>
                have you answered an unknown number to find yourself talking to a sales person with broken <br/>
                communication skills and a shady approach to engage into a discussion.  Our call scripts are <br/>
                focused around using our instincts as every prospect responds differently, some prospects are <br/>
                short straight to the point and others are willing to give you some time of day. Our script is really <br/>
                focused on reading customer behavior, personality profiling and using this to set the tone of the sales call. 
</p>
        <div className="counter-section">
            <CountCalls/> 
            </div> 
        </div>
        
    )
}

export default ColdCallingPage