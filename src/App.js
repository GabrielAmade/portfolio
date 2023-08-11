import Profile from "./PortfolioContainer/Home/Profile"
import Navbar from "./PortfolioContainer/Navbar/Navbar"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe"
import Resume from "./PortfolioContainer/Resume/Resume"
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <AboutMe/>
      <Resume/>
      <Testimonial/>
    </div>
  );
}

export default App;
