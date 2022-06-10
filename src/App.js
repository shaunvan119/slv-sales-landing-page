import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import PersonalProfile from "./components/PersonalProfile";


function App() {
  return (
    <div className="wrapper">

      <Routes>
      <Route path="/" element={[<Header/>,<TopSection/>,<MainContent/>,<PersonalProfile/>, <Pricing/> ]}/>   
          <Route path="/contact" element={<Contact/>}/>    
      </Routes>
    </div>
  );
}



export default App;
