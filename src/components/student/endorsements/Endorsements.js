import React from "react";
import Swiper from "react-id-swiper";
import { Pagination } from "swiper/dist/js/swiper.esm";

const Endorsements = props => {
  const params = {
    modules: [Pagination],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    loop: true
  };

  return (
    <>
      <div className="endorsements">
        <h2>Endorsement</h2>
        <Swiper {...params}>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
          </div>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus dolorum, commodi excepturi a aliquam! Fugiat ut
              repudiandae blanditiis vel, porro officia vitae aspernatur
              reiciendis nesciunt! Debitis rem illo reprehenderit?
            </p>
          </div>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus dolorum, commodi excepturi a aliquam! Fugiat ut
              repudiandae blanditiis vel, porro officia vitae aspernatur
              reiciendis nesciunt! Debitis rem illo reprehenderit?
            </p>
          </div>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus dolorum, commodi excepturi a aliquam! Fugiat ut
              repudiandae blanditiis vel, porro officia vitae aspernatur
              reiciendis nesciunt! Debitis rem illo reprehenderit?
            </p>
          </div>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus dolorum, commodi excepturi a aliquam! Fugiat ut
              repudiandae blanditiis vel, porro officia vitae aspernatur
              reiciendis nesciunt! Debitis rem illo reprehenderit?
            </p>
          </div>
          <div className="swiper-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus dolorum, commodi excepturi a aliquam! Fugiat ut
              repudiandae blanditiis vel, porro officia vitae aspernatur
              reiciendis nesciunt! Debitis rem illo reprehenderit?
            </p>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Endorsements;
