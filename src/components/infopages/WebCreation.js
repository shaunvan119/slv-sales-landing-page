
import Header from "../Header"
import apparel from "./portfolio/baseapparel.png"
import payapi from "./portfolio/pay.png"
import suite from "./portfolio/suite.png"
import scoot from "./portfolio/scoot.png"
import bbq from "./portfolio/bbq.png"
import webpic from "./portfolio/image-web-design-large.jpg"
import ContactOffer from "../ContactOffer"
import Footer from "../Footer"





function WebCreation() {
    
    return (


        <div className="container-web">
        <div className="header-web">
        <Header/>
        </div>
        <div className="about-section"  >
        <div className="about-section-left">
            <h1 className="h1-webdesign">Turn website visitors<br/> into buyers</h1>
            <p className="p-webdesign">
             Get it right the first time, dont spend 30K<br/> on a landing page with all the
             bells and whistles.<br/> From the point your prospect hits your website<br/> 
             you have less then 15 secounds to attract<br/> their attention.</p>
        </div>
        <div className="computer-image">
                <img class="image-computer" src={webpic} alt="computer"/>
                <div class="centered"><span className="webdesign">NEXT LEVEL</span><br/><span className="view-projects">WEB DEVELOPMENT</span></div>
        </div>
        </div>
        <div className="top-section-webdesign">
         <div className="top-section-left">
                <h2 className="heading-webdesign">Fully responsive 
                website<br/>with purpose</h2> 
                <p className="paragraph-webdesign">       
                We will design a fully responsive website that will <br/>
                convert traffic into buyers, your website has one job, <br/>
                generate leads. Web designers are great at making <br/>
                things pretty but they can not build you a website<br/>
                that can attract buyers, typically a web designer <br/>
                doesn't have a background in the psychology of <br/>
                a consumer's buying behavior to attract buyers.<br/>
                Your website needs to have emotional triggers to<br/> 
                convert online traffic to hit that submit or buy button. </p>
            
        </div>
          <div className="contactOffer">
                 <ContactOffer/>
          </div>
        </div>
        
                <h1 className="projects-header">Some of our projects</h1>
        <div className="portfolio-grid">
                <a href="https://transcendent-gnome-a5e02c.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={scoot} alt="scoot"/></a>
                <a href="https://magnificent-dieffenbachia-b7bc19.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={apparel} alt="apparel"/></a>
                <a href="https://symphonious-chebakia-166971.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={payapi} alt="payapi"/></a>
                <a href="https://regal-gecko-130083.netlify.app/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={suite} alt="suite"/></a>
                <a href="https://shaunvan119.github.io/bbq-webpage/" target="_blank" rel="noreferrer"><img class="portfolio-grid-images" src={bbq} alt="bbq"/></a>
        </div>
         
       <Footer/>
      </div>  
    )
}

export default WebCreation