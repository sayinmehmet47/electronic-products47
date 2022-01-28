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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="bg-gradient-to-r from-white to-slate-300 ">
      <div className="adimg ad1img !grid">
        <Image className="" width={900} height={470} src="/phone.jpg" alt="" />
      </div>
      <div className="adimg ad2img !grid">
        <Image width={900} height={470} src="/devices.png" alt="" />
      </div>
      <div className="adimg ad3img !grid">
        <Image width={900} height={470} src="/devices.png" alt="" />
      </div>
      <div className="adimg ad4img !grid">
        <Image width={900} height={470} src="/device.png" alt="" />
      </div>
    </Slider>
  );
}
