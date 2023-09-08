import Profile from "./PortfolioContainer/Home/Profile"
import Navbar from "./PortfolioContainer/Navbar/Navbar"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe"
import Resume from "./PortfolioContainer/Resume/Resume"
import TestiCarousel from "./PortfolioContainer/TestiCarousel/TestiCarousel"
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe"
import React, { useState, useEffect } from "react";



function App(){
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchAPIMessage() {
      try {
        const res = await fetch(`/api/message`);
        const { message } = await res.json();
        setMessage(message);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAPIMessage();
  }, []);

  return (
    <div className="App">
    <div className="App">
      <header className="App-header">
        <div className="App-link">{message}</div>
      </header>
    </div>
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


