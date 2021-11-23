import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: false,
    // autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/peach.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/peach.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/peach.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
