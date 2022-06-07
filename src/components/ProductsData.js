import { SiSalesforce } from 'react-icons/si';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { TbSettingsAutomation } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';


export default  [
    {
        id: 1,
        title: "Lead list",
        description: "Create prospect list full of key decision makers for your sales team",
        IconLeads: <SiSalesforce color="#FF6F48" size={35}/>
    },
    {
        id: 2,
        title: "Cold calling",
        description: "With over 10 years experience in sales on an executive level, we have developed innovative techniques to break through gatekeepers and have meaningful discussions with decision makers.",
        IconCalling: <FaHeadphonesAlt color="#FF6F48" size={35}/>
    },
    {
        id: 3,
        title: "Appointment setting",
        description: "Assist with calling and qualifying prospects and book appointments for product demonstrations.",
        IconAppt: <BsFillCalendarCheckFill color="#FF6F48" size={35}/>
    },
    {
        id: 4,
        title: "Lead automation",
        description: "Create automated quarterly cold outreach campaigns, with lead automation software we reach out to key decision makers via linkedIn messaging and email campaigns.",
        IconAuto: <TbSettingsAutomation color="#FF6F48" size={35}/>
    },
    {
        id: 4,
        title: "Website creation and customer journey mapping",
        description: "Your website has one job, generating inbound leads. We will build a SEO friendly website and lead landing page that will convert online traffic.",
        IconWeb: <CgWebsite color="#FF6F48" size={35}/>
    }
]