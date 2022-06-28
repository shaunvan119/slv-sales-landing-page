import facebook from "../assets/facebook.svg"
import linkedIn from "../assets/linkedin.svg"

function Footer() {
    
    return (
        <footer>
            <div class="container-flex-footer">
                
                
                <div className='social-logos'>
                    <img src={facebook} alt="facebook" className="facebook" /> 
                    <img src={linkedIn} alt="Logo" className="linkedIn" />  
                </div>
            </div>
        </footer>
    )
}

export default Footer