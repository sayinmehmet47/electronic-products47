// Import css files

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function CarouselComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="bg-gradient-to-r from-white to-slate-200 ">
      <div className="adimg ad1img ">
        <Image className="" width={1200} height={900} src="/phone.jpg" alt="" />
      </div>

      <div className="adimg ad3img ">
        <Image width={1200} height={900} src="/apple.jpg" alt="" />
      </div>
      <div className="adimg ad4img ">
        <Image width={1200} height={900} src="/device.png" alt="" />
      </div>
      <div className="adimg ad4img ">
        <Image width={1200} height={900} src="/ipad.jpg" alt="" />
      </div>
    </Slider>
  );
}
