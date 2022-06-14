import { SiSalesforce } from 'react-icons/si';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { TbSettingsAutomation } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';



export default  [
    {
        id: 1,
        titleOne: <Link  className="link" style={{ textDecoration: 'none', color:"#13183F",}} to="/leadpage">Lead list</Link>,
        description: "Create prospect list full of key decision makers for your sales team",
        IconLeads: <SiSalesforce color="#FF6F48" size={35}/>,
        
    },
    {
        id: 2,
        titleTwo: <Link className="link" style={{ textDecoration: 'none', color:"#13183F",}} to="/ColdCallingPage">Cold Calling</Link>,
        description: "We have developed innovative techniques to break through gatekeepers and have meaningful discussions with decision makers.",
        IconCalling: <FaHeadphonesAlt color="#FF6F48" size={35}/>,
        
    },
    {
        id: 3,
        titleThree: <Link className="link" style={{ textDecoration: 'none', color:"#13183F",}} to="/ApptPage">Appointment setting</Link>,
        description: "Assist with calling and qualifying prospects and book appointments for product demonstrations.",
        IconAppt: <BsFillCalendarCheckFill color="#FF6F48" size={35}/>,
       
    },
    {
        id: 4,
        titleFour: <Link className="link" style={{ textDecoration: 'none', color:"#13183F",}} to="/AutoPage">Lead automation</Link>,
        description: "Automated your cold outreach campaigns, reach out to key decision makers via automated linkedIn messaging and email campaigns.",
        IconAuto: <TbSettingsAutomation color="#FF6F48" size={35}/>,
        
    },
    {
        id: 4,
        titleFive: <Link className="link" style={{ textDecoration: 'none', color:"#13183F",}} to="/WebCreation">Website creation</Link>,
        description: "Your website has one job, generating inbound leads. We will build a SEO friendly website and lead landing page that will convert online traffic.",
        IconWeb: <CgWebsite color="#FF6F48" size={35}/>,
       
    }
]