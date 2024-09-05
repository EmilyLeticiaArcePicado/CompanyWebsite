import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

import pic01 from '../Img/pic01.jpg';
import pic02 from '../Img/pic02.jpg';
import pic03 from '../Img/pic03.jpg';
import pic04 from '../Img/pic04.jpg';
import pic06 from '../Img/pic06.jpg';
import pic07 from '../Img/pic07.jpg';
import pic08 from '../Img/pic08.jpg';
import pic09 from '../Img/pic09.jpg';
import pic10 from '../Img/pic10.jpg';
import pic11 from '../Img/pic11.jpg';
import pic12 from '../Img/pic12.jpg';
import pic13 from '../Img/pic13.jpg';
import pic14 from '../Img/pic14.jpg';
import pic15 from '../Img/pic15.jpg';

const carouselItems = [
  { img: pic01, title: "Pulvinar sagittis congue" },
  { img: pic02, title: "Fermentum sagittis proin" },
  { img: pic03, title: "Sed quis rhoncus placerat" },
  { img: pic04, title: "Ultrices urna sit lobortis" },
  { img: pic06, title: "Ultrices urna sit lobortis" },
  { img: pic07, title: "Ultrices urna sit lobortis" },
  { img: pic08, title: "Ultrices urna sit lobortis" },
  { img: pic09, title: "Ultrices urna sit lobortis" },
  { img: pic10, title: "Ultrices urna sit lobortis" },
  { img: pic11, title: "Ultrices urna sit lobortis" },
  { img: pic12, title: "Ultrices urna sit lobortis" },
  { img: pic13, title: "Ultrices urna sit lobortis" },
  { img: pic14, title: "Ultrices urna sit lobortis" },
  { img: pic15, title: "Ultrices urna sit lobortis" },
];

const CarouselItem = ({ img, title }) => (
  <article>
    <a href="#" className="image featured">
      <img src={img} alt={title} />
    </a>
    <header>
      <h3><a href="#">{title}</a></h3>
    </header>
    <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
  </article>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = carouselItems.length;
  const transitionDuration = 3000; // Duration of each slide transition
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <section
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={carouselRef}
    >
      <div
        className="reel"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: `transform ${transitionDuration / 1000}s ease-in-out`,
        }}
      >
        {[...carouselItems, ...carouselItems].map((item, index) => (
          <CarouselItem key={index} img={item.img} title={item.title} />
        ))}
      </div>
      <div className="backward" onClick={prevSlide}></div>
      <div className="forward" onClick={nextSlide}></div>
    </section>
  );
};

export default Carousel;
