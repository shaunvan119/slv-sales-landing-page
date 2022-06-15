import CountWeb from "../CountWeb"
import Header from "../Header"

function WebCreation() {
    
    return (
        <div className="top-section">
        <Header/>
            <h2 className="top-heading">Fully responsive website with purpose</h2> 
            <p className="top-paragraph">We will design a fully responsive website that will convert traffic into buyers, your website has one job, generate leads. <br/>
            Web designers are great at making things pretty but they can not build you a website that can attract buyers, typically a web designer doesn't have<br/>
             a background in the psychology of a consumer's buying behavior to attract buyers. Your website needs to have emotional triggers to convert <br/>
             online traffic to hit that submit or buy button. </p>
          <p className="top-paragraph">Your website is a central hub for all your marketing spend, you spend thousands of dollars to direct online traffic to your page<br/>
           with no conversion, and your marketing team or agency get excited because clicks have increased, that's great but you need leads not another fluff meeting <br/>
           with a marketing agency discussing stats around clicks.</p>
           
        <div className="counter-section">
            <CountWeb/> 
            </div> 
        </div>
        
    )
}

export default WebCreation