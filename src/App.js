import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import LeadPage from "./components/infopages/LeadPage";
import ColdCallingPage from "./components/infopages/ColdCallingPage";
import ApptPage from "./components/infopages/ApptPage";
import AutoPage from "./components/infopages/AutoPage";
import WebCreation from "./components/infopages/WebCreation";


function App() {
  return (
    <div className="wrapper">
    

      <Routes>
      <Route path="/" element={[<Header/>,<TopSection/>,<MainContent/>, <Pricing/>,<Footer/> ]}/>   
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/leadpage" element={<LeadPage/>}/> 
          <Route path="/ColdCallingPage" element={<ColdCallingPage/>}></Route> 
          <Route path="/ApptPage" element={<ApptPage/>}></Route>     
          <Route path="/AutoPage" element={<AutoPage/>}></Route>     
          <Route path="/WebCreation" element={<WebCreation/>}></Route>         
      </Routes>
    </div>
  );
}



export default App;
