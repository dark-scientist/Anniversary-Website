import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import Animate from "./Animate";
// import { AnimateOnChange } from "react-animation";

const items = [
  {
    src: "https://i.im.ge/2024/12/07/z0Ec7y.qweqe.png",
  },
  {
    src: "https://i.im.ge/2024/12/05/ziMFLa.Snapchat-1381007688.jpeg",
  },
  {
    src: "https://i.im.ge/2024/12/05/ziM1ny.Snapchat-482750390.md.jpeg",
  },
];

function Title(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="slide-images" alt="title-images" />
      </CarouselItem>
    );
  });

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-img">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div className="carousel-content">
          <Animate />
        </div>
      </div>
    </section>
  );
}

export default Title;
