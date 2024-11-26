import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';

function CarroNoCeu() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={banner1}
          alt="Primeiro slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={banner2}
          alt="Segundo slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={banner3}
          alt="Terceiro slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroNoCeu;
