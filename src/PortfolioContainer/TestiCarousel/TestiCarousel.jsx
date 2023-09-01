import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "./TestiCarousel.css";
import "react-multi-carousel/lib/styles.css";
import data_fr from "../../datas_fr.json";
import data_en from "../../datas_en.json";
import data_it from "../../datas_it.json";

const TestiCarousel = () => {
  const [language, setLanguage] = useState("fr");
  const data = language === "en" ? data_en : language === "it" ? data_it : data_fr;

  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    if (detectedLanguage === "fr" || detectedLanguage === "en" || detectedLanguage === "it") {
      setLanguage(detectedLanguage);
    } else {
      setLanguage("en");
    }
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop"]}
        draggable={true}

      >
        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              {data.testimonial_description_1}
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="client-info">
            <img src="img/testimonial/lady.png" alt="lady-png" />
            <h5>Guillaume G.</h5>
            <p>Directeur Pédagogique</p>
          </div>
        </div>
        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Gabriel rédige très très bien, une écriture naturelle et des
              fondamentaux de rédaction SEO bien intégrés. Il réalise un travail
              de recherche de fond sur le sujet, et le résultat donne un article
              à l'opposé d'une production fade qui est souvent délivré par
              d'autres rédacteurs présent sur la plateforme.
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="client-info">
            <img src="img/testimonial/lady.png" alt="lady-png" />
            <h5>Philippe L.</h5>
            <p>Photographe</p>
          </div>
        </div>

        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left" />
              Depuis que je travaille avec Gabriel, l'engagement dans nos
              articles et le nombre de commentaires a fait un énorme bond en
              avant. Ses textes sont parfaitement rédigés, interconnectés, bien
              structurés et faciles à lire. Gabriel est un professionnel et ça
              change tout. (Un de nos articles a même été repris par la presse
              papier !) Encore un immense merci Gabriel
              <i className="fa fa-quote-right" />
            </p>
          </div>
          <div className="client-info">
            <img src="img/testimonial/lady.png" alt="lady-png" />
            <h5>Adrien C.</h5>
            <p>Créateur de contenus</p>
          </div>
        </div>

        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left" />
              Depuis que je travaille avec Gabriel, l'engagement dans nos
              articles et le nombre de commentaires a fait un énorme bond en
              avant. Ses textes sont parfaitement rédigés, interconnectés, bien
              structurés et faciles à lire. Gabriel est un professionnel et ça
              change tout. (Un de nos articles a même été repris par la presse
              papier !) Encore un immense merci Gabriel
              <i className="fa fa-quote-right" />
            </p>
          </div>
          <div className="client-info">
            <img src="img/testimonial/lady.png" alt="lady-png" />
            <h5>Adrien C.</h5>
            <p>Créateur de contenus</p>
          </div>
        </div>
      </Carousel>
      ;
    </>
  );
};

export default TestiCarousel;
