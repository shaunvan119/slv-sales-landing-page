import CountWeb from "../CountWeb"
import Header from "../Header"
import apparel from "./portfolio/baseapparel.png"
import payapi from "./portfolio/pay.png"
import suite from "./portfolio/suite.png"
import bbq from "./portfolio/bbq.png"
import { Link } from "react-router-dom"



function WebCreation() {
    
    return (

        <div className="container-web">
        <Header/>
        
        <div className="top-section">
        
            <h2 className="top-heading">Fully responsive website<br/>
             with purpose</h2> 
            <p className="top-paragraph">We will design a fully responsive website that will convert traffic into buyers,<br/> your website has one job, generate leads. 
            Web designers are great at making<br/> 
            things pretty but they can not build you a website that can attract buyers,<br/> 
            typically a web designer doesn't have a background in the psychology<br/> 
            of a consumer's buying behavior to attract buyers. Your website needs to <br/> have emotional triggers to convert online traffic to hit that<br/> 
            submit or buy button. </p>
          <p className="top-paragraph">Your website is a central hub for all your marketing spend, you spend thousands<br/> 
            of dollars to direct online traffic to your page with no conversion, and your<br/>
            marketing team or agency get excited because clicks have increased,<br/> 
            that's great but you need leads not another fluff meeting with a <br/>
            marketing agency discussing stats around clicks.</p>
           <h1 className="projects-header">Some of our projects</h1>
           <div className="portfolio-grid">
        
                <a href="https://magnificent-dieffenbachia-b7bc19.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={apparel} alt="apparel"/></a>
                <a href="https://symphonious-chebakia-166971.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={payapi} alt="payapi"/></a>
                <a href="https://regal-gecko-130083.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={suite} alt="suite"/></a>
                <a href="https://shaunvan119.github.io/bbq-webpage/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={bbq} alt="bbq"/></a>
           </div>
              
           
            
        </div>
      </div>  
    )
}

export default WebCreation