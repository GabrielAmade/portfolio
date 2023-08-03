import React, { useState } from "react";
import Heading from "../Heading/Heading";
import "./Resume.css";

function Resume() {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Expériences professionnelles", logoSrc: "work-history.svg" },
    { label: "Technos", logoSrc: "programming-skills.svg" },
    { label: "Projets", logoSrc: "projects.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "React Js", ratingPercentage: 60 },
    { skill: "Node Js", ratingPercentage: 60 },
    { skill: "Mongo DB", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
      description:
        "Intégrer la maquette du site en HTML et CSS // Respecter le visuel fourni // Rendre l’interface parfaitement responsive pour smartphone et tablette",
      skills: "#html #css",
    },
    {
      title: "Créez une page web dynamique avec JavaScript",
      description:
        "Créer la page de présentation des travaux de l'architecte // Ajouter une page de connexion de l'administrateur du site // Afficher une fenêtre modale permettant d’ajouter et de supprimer de nouveaux projets",
      skills: "#javascript",
    },
    {
      title: "Créez une application web de location immobilière avec React",
      description:
        "Créer les pages et les composants du site // Mettre en place les routes pour connecter ces pages // Ajouter des animations de carroussel et de collapse",
      skills: "#react",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={
          "Formation “Développeur Web” avec Open Classroom en Alternance"
        }
        subHeading={
          "400 heures de formation sur 12 mois // Formation en distancielle // Principales notions abordées : HTML-CSS, Javascript, React, Node JS, Méthode Agile"
        }
        fromDate={"2022"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Formation Développeur Web Full Stack"}
        subHeading={
          "Formation en présentiel // Apprentissage des bases du HTML/CSS, JS, PHP et Laravel //  Programmation Orientée Objet // Utilisation d'API"
        }
        fromDate={"03/2022"}
        toDate={"07/2023"}
      />
      <ResumeHeading
        heading={"Master en Design Urbain"}
        subHeading={"Université d’Aix-Marseille // Mention Bien"}
        fromDate={"2011"}
        toDate={"2013"}
      />
      <div className="resume-screen-container" key="work-experience">
        <ResumeHeading
          heading={"Santé Formapro"}
          subHeading={"Alternance Développeur Web Full Stack"}
          fromDate={"2022"}
          toDate={"présent"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Présentement alternant développeur web et spécialiste SEO
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Construction de sites Wordpress
          </span>
          <br />
          <span className="resume-description-text">- Audit SEO</span>
          <br />
          <span className="resume-description-text">- Exemple à remplir</span>
        </div>
        ,
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage"
                ></div>
              </div>
            </div>
          ))}
        </div>
        ,
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetail, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetail.title}
              description={projectsDetail.description}
              skills={projectsDetail.skills}
            />
          ))}
        </div>
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <Heading title={"Expériences"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullet">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
