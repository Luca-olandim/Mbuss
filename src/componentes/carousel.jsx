import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Importação das imagens
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
// import banner3 from '../images/banner3.png';
import banner4 from '../images/banner4.png';

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

      {/* Segundo banner */}
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={banner2}
          alt="Segundo slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Terceiro banner */}
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={banner4}
          alt="Terceiro slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroNoCeu;
