import Slider from "react-slick";
import image3255 from "./assets/IMG_3255.jpeg";
import image3256 from "./assets/IMG_3256.jpeg";
import image3257 from "./assets/IMG_3257.jpeg";
import image3258 from "./assets/IMG_3258.jpeg";

function Responsive() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container text-black">
      <Slider {...settings}>
        <div className="mt-2">
          <img src={image3255} alt="image3255" />
          <p className="mt-2">SEMANGAT YAAA SAYANG 👍</p>
        </div>
        <div className="mt-2">
          <img src={image3256} alt="image3256" />
          <p className="mt-2">AKU SELALU SAYANG KAMUU😏</p>
        </div>
        <div className="mt-2">
          <img src={image3257} alt="image3257" />
          <p className="mt-2">SEGINI DULU YAAKK, WLEEKKK 😛😝</p>
        </div>
        <div className="mt-2">
          <img src={image3258} alt="image3258" />
          <p className="mt-2">MWAH MWAH 😙😘💋</p>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;