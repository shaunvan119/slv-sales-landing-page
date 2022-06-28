
import Header from "../Header"
import apparel from "./portfolio/baseapparel.png"
import payapi from "./portfolio/pay.png"
import suite from "./portfolio/suite.png"
import bbq from "./portfolio/bbq.png"
import webpic from "./portfolio/image-web-design-large.jpg"
import ContactOffer from "../ContactOffer"




function WebCreation() {
    
    return (

        <div className="container-web">
        <Header/>
        
        <div className="top-section-webdesign">
         <div className="top-section-left">
                <h2 className="heading-webdesign">Fully responsive website<br/>
                with purpose</h2> 
                <p className="paragraph-webdesign">We will design a fully responsive website that will convert traffic into buyers, your website has one job, generate leads. 
                Web designers are great at making things pretty but they can not build you a website that can attract buyers, typically a web designer doesn't have a background in the psychology of a consumer's buying behavior to attract buyers. Your website needs to <br/> have emotional triggers to convert online traffic to hit that<br/> 
                submit or buy button. </p>
            <p className="paragraph-webdesign">Your website is a central hub for all your marketing spend, you spend thousands
                of dollars to direct online traffic to your page with no conversion, and your
                marketing team or agency get excited because clicks have increased,
                that's great but you need leads not another fluff meeting with a 
                marketing agency discussing stats around clicks.</p>
        </div>
                 <div className="contactOffer">
                 <ContactOffer/>
         </div>
        </div>
        <div className="about-section">
        <div className="about-section-left">
            <h1 className="h1-webdesign">Turn website visitors<br/> into buyers</h1>
            <p className="p-webdesign">
             Get it right the first time, dont spend 30K<br/> on a landing page with all the
             bells and whistles.<br/> From the point your prospect hits your website<br/> 
             you have less then 15 secounds to attract<br/> their attention.</p>
        </div>
        <div className="computer-image">
                <img class="portfolio-grid-images image-computer" src={webpic} alt="computer"/>
                <div class="centered"><span className="webdesign">NEXT LEVEL</span><br/><span className="view-projects">WEB DEVELOPMENT</span></div>
        </div>
        </div>
                <h1 className="projects-header">Some of our projects</h1>
        <div className="portfolio-grid">
                <a href="https://magnificent-dieffenbachia-b7bc19.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={apparel} alt="apparel"/></a>
                <a href="https://symphonious-chebakia-166971.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={payapi} alt="payapi"/></a>
                <a href="https://regal-gecko-130083.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={suite} alt="suite"/></a>
                <a href="https://shaunvan119.github.io/bbq-webpage/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={bbq} alt="bbq"/></a>
        </div>
              
           
            
       
      </div>  
    )
}

export default WebCreation