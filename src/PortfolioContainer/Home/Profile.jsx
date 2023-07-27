import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Profile.css";
import profilephoto from "../../assets/Home/profilephoto.jpg";
import data_fr from "../../datas_fr.json";
import data_en from "../../datas_en.json";

const Profile = () => {
  const [language, setLanguage] = useState("fr");
  const data = language === "en" ? data_en : data_fr;

  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    setLanguage(detectedLanguage);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-columns">
        <div className="profile-details">
          <div className="profile-role">
            <h1>{data.greeting}</h1>
            <span>
              <p className="profile-role-tagline">{data.tagline}</p>
            </span>
          </div>

          <div className="colz">
            <a href="https://github.com/GabrielAmade">
              <FontAwesomeIcon icon={faGithub} className="fa-3x icon" />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} className="fa-3x icon" />
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="background-color"></div>
          <img src={profilephoto} alt="photo_profil" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
