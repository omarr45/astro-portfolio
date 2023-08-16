import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';
import { useMediaQuery } from '../utils/useMediaQuery';

const ImageSlider = ({ imgs }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: matches ? true : false,
    pauseOnHover: true,
  };

  return (
    <div className='image-slider mt-2'>
      <Slider {...settings}>
        {imgs?.map((img, i) => (
          <img key={i} src={img} alt='slider' />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
