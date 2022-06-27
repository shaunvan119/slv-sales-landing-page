import CountWeb from "../CountWeb"
import Header from "../Header"
import apparel from "./portfolio/baseapparel.png"
import payapi from "./portfolio/pay.png"
import suite from "./portfolio/suite.png"
import sunnyside from "./portfolio/sunnyside.png"



function WebCreation() {
    
    return (
        <div className="top-section">
        <Header/>
            <h2 className="top-heading">Fully responsive website with purpose</h2> 
            <p className="top-paragraph">We will design a fully responsive website that will convert traffic into buyers, your website has one job, generate leads. <br/>
            Web designers are great at making things pretty but they can not build you a website that can attract buyers, typically a web designer doesn't have
             a background in the psychology of a consumer's buying behavior to attract buyers.<br/> 
             Your website needs to have emotional triggers to convert online traffic to hit that submit or buy button. </p>
          <p className="top-paragraph">Your website is a central hub for all your marketing spend, you spend thousands of dollars to direct online traffic to your page<br/>
           with no conversion, and your marketing team or agency get excited because clicks have increased, that's great but you need leads not another fluff meeting
           with a marketing agency discussing stats around clicks.</p>
           <h1 className="projects-header">Some of our projects</h1>
           <div className="portfolio-grid">
        
                <img class="portfolio-grid-images" src={apparel} alt="apparel"/>
                <img class="portfolio-grid-images" src={payapi} alt="payapi"/>
                <img class="portfolio-grid-images" src={suite} alt="suite"/>
                <img class="portfolio-grid-images" src={sunnyside} alt="sunnyside"/>
           </div>
              
           
            
        </div>
        
    )
}

export default WebCreation