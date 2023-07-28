import React from 'react'
import Heading from "../Heading/Heading"
import data_fr from "../../datas_fr.json";
import "./AboutMe.css"
import CV_GABRIEL_AMADE from "../../assets/AboutMe/CV_GABRIEL_AMADE.pdf";


function AboutMe(props) {
  return (
      <>
      <Heading title={'À Propos'} />
      <div className='about-me-container screen-container'>
      <div className='about-me-parent'>
        <div className='about-me-columns'>
          <div className='about-me-content'>
            <div className='about-me-description-title'>
              <h2>{data_fr.description_title_1}</h2>
              <h2>{data_fr.description_title_2}</h2>
            </div>
            <div className='about-me-description'>
              {data_fr.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className='about-me-cv'>
                <a href={CV_GABRIEL_AMADE} target="_blank" rel="noopener noreferrer">
                    Télécharger mon CV
                </a>
            </div>
          </div>
          <div className='about-me-general-skills'>
            <ul>
              {data_fr.general_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe;
