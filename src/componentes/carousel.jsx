import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideImage from '../images/asdsadsafdsa.png';

function CarroNoCeu() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src={slideImage}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src="https://www.infomoney.com.br/wp-content/uploads/2024/04/neymar-al-hilal.webp?fit=767%2C575&quality=50&strip=all"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[550px] bg-gray-300"
          src="https://cdn.oantagonista.com/uploads/2024/06/Neymar-se-desculpa-com-torcida-do-Santos-apos-aparecer-com-camisa-do-Flamengo.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroNoCeu;
