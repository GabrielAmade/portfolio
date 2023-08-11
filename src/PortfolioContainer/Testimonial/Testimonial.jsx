import React from "react";
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
            items: 1
        },
        1000:{
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
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        <i className="fa fa-quote-right"></i>
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Daidy Dominic</h5>
                      <p>CEO Global</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"></i>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        <i className="fa fa-quote-right"></i>
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Daidy Dominic</h5>
                      <p>CEO Global</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                        lorem ipsum lorem ipsum lorem ipsum lorem  ipsum ipsum
                        <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="lady-png" />
                      <h5>Daidy Dominic</h5>
                      <p>CEO Global</p>
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
