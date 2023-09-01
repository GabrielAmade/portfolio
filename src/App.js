import Profile from "./PortfolioContainer/Home/Profile"
import Navbar from "./PortfolioContainer/Navbar/Navbar"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe"
import Resume from "./PortfolioContainer/Resume/Resume"
import TestiCarousel from "./PortfolioContainer/TestiCarousel/TestiCarousel"
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <AboutMe/>
      <Resume/>
      <TestiCarousel/>
      <ContactMe/>
    </div>
  );
}
export default App;