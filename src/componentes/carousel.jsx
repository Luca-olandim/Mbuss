import Carousel from 'react-bootstrap/Carousel';

function CarroNoCeu() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] bg-gray-300"
          src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] bg-gray-300"
          src="https://www.infomoney.com.br/wp-content/uploads/2024/04/neymar-al-hilal.webp?fit=767%2C575&quality=50&strip=all"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[600px] bg-gray-300"
          src="https://cdn.oantagonista.com/uploads/2024/06/Neymar-se-desculpa-com-torcida-do-Santos-apos-aparecer-com-camisa-do-Flamengo.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel >
  );
}

export default CarroNoCeu;