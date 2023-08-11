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
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
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
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Expériences professionnelles", logoSrc: "work-history.svg" },
    { label: "Technos", logoSrc: "programming-skills.svg" },
    { label: "Projets", logoSrc: "projects.svg" },
    { label: "Intêrets", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Mongo DB", ratingPercentage: 60 },
    { skill: "PHP", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: (
        <a
          href="https://github.com/GabrielAmade/bookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Créez la page d'accueil d'une agence de voyage
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <div className="project-container">
          <div className="project-description project-description-1">
            Intégrer la maquette du site en HTML et CSS // Respecter le visuel
            fourni // Rendre l’interface parfaitement responsive pour smartphone
            et tablette
          </div>
          <div className="project-image project-image-1"></div>
        </div>
      ),
    },
    {
      title: (
        <a
          href="https://github.com/GabrielAmade/Portfolio-architecte-sophie-bluel-master"
          target="_blank"
          rel="noopener noreferrer"
        >
          Créez une page web dynamique
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },

      description: (
        <div className="project-container">
          <div className="project-description project-description-2">
            Créer la page de présentation des travaux d'une architecte //
            Ajouter une page de connexion de l'administrateur du site //
            Afficher une fenêtre modale permettant d’ajouter et de supprimer de
            nouveaux projets
          </div>
          <div className="project-image project-image-2"></div>
        </div>
      ),
    },

    {
      title: (
        <a
          href="https://github.com/GabrielAmade/kasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Créez une application web de location immobilière
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <div className="project-container">
          <div className="project-description project-description-3">
            Créer les pages et les composants du site // Mettre en place les
            routes pour connecter ces pages // Ajouter des animations de
            carrousel et de collapse
          </div>
          <div className="project-image project-image-3"></div>
        </div>
      ),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Formation “Développeur Web” avec Open Classroom - Alternance"}
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
        fromDate={"04-"}
        toDate={"07/22"}
      />
      <ResumeHeading
        heading={"Master en Design Urbain"}
        subHeading={"Université d’Aix-Marseille // Mention Bien"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Santé Formapro // Développeur Web Full-Stack"}
          subHeading={"Contrat en alternance d'un an"}
          fromDate={"2022"}
          toDate={"Présent"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Intégration de cours e-learning
          </span>
          <br />
          <span className="resume-description-text">
            - Création de nouvelles fonctionnalités en PHP pour la plateforme
          </span>
          <br />
          <span className="resume-description-text">
            - Gestion et création de sites Wordpress{" "}
          </span>
          <br />
          <span className="resume-description-text">- Réalisation d'audits et optimisation SEO des sites du groupe SFP Expansion </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Écriture"
        description="Ma passion pour les mots m'a guidé vers une expérience passionnante en tant que rédacteur indépendant pendant deux ans sur la plateforme Come up. J'ai eu le plaisir d'écrire des dizaines d'articles sur une variété de sujets, du bien-être au web marketing en passant par la photographie, laissant ainsi ma plume explorer un large éventail d'horizons captivants."
      />
      <ResumeHeading
        heading="Cinéma"
        description="Je suis captivé par l'art cinématographique et ses histoires en mouvement, trouvant inspiration et évasion dans chaque scène."
      />
      <ResumeHeading
        heading="Voyages"
        description="L'appel de l'aventure m'a conduit à vivre cinq ans à l'étranger, explorant plusieurs pays bien différents (Australie, Nouvelle-Zélande, Bali, les îles Fidji, Thaïlande, Malaysie, Singapour, Écosse, Canada...) et découvrant une multitude de cultures, élargissant ainsi ma vision du monde de manière incroyable."
      />
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
          alt="logo"
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
    <>
      <div id="experiences"></div>
      <Heading title={"Expériences"} />
      <div className="resume-container screen-container">
        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
