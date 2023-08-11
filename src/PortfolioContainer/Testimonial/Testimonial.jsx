import React from "react";
import './Testimonial.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Heading from "../Heading/Heading";

export default function Testimonial(props) {

  const options={
      loop:true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive:{
          0:{
              items: 1
          },
          768:{
            items: 2
        },
        1440:{
            items: 3
        },
      }
  }
    
  return (
    <div>
      <Heading title={"Témoignages"} />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"></i>
                        Par sa démarche au fil des cours, des ateliers et des projets, Gabriel a démontré à l’ensemble de l’équipe pédagogique une évidente envie de bien faire et une volonté de compréhension fine des notions qu’il met en pratique. Cette curiosité et cette détermination à acquérir des fondamentaux solides font de Gabriel, à mon sens, un très bon profil junior.

                        <i className="fa fa-quote-right"></i>
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Guillaume G.</h5>
                      <p>Directeur Pédagogique</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"></i>
                        Gabriel rédige très très bien, une écriture naturelle et des fondamentaux de rédaction SEO bien intégrés. Il réalise un travail de recherche de fond sur le sujet, et le résultat donne un article à l'opposé d'une production fade qui est souvent délivré par d'autres rédacteurs présent sur la plateforme.
                        <i className="fa fa-quote-right"></i>
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Philippe L.</h5>
                      <p>Photographe</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                        Depuis que je travaille avec Gabriel, l'engagement dans nos articles et le nombre de commentaires a fait un énorme bond en avant. Ses textes sont parfaitement rédigés, interconnectés, bien structurés et faciles à lire. Gabriel est un professionnel et ça change tout. (Un de nos articles a même été repris par la presse papier !) Encore un immense merci Gabriel
                        <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Adrien C.</h5>
                      <p>Créateur de contenus</p>
                  </div>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
