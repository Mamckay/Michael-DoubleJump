import React from "react";
import "./css/banner.css";
import { Slide } from "react-slideshow-image";

export default class Banner extends React.Component {
  render() {
    const slideImages = [
      "https://siliconangle.com/wp-content/blogs.dir/1/files/2015/06/Halo-5-Guardians-banner.jpg",
      "https://i.imgur.com/aEwNXVn.jpg",
      "https://dslv9ilpbe7p1.cloudfront.net/QMEPQFv6b9muDGmJddE59A_store_banner_image.png",
      "http://www.psnation.com/wp-content/uploads/2018/07/Call-of-Duty-Black-Ops-4-updated-banner.png",
      "http://3rd-strike.com/wp-content/uploads/2016/11/The-Elder-Scrolls-V-Skyrim-Banner.jpg"
    ];

    const properties = {
      duration: 7000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true
    };

    const bannerMaker = slideImages.map((img, index) => {
      return (
        <div key={index} className="each-slide">
          <img src={img} alt="Banner" />
        </div>
      );
    });

    return (
      // create a banner function to create dynamic number of banners
      <Slide className="banner-slide" {...properties}>
        {bannerMaker}
      </Slide>
    );
  }
}
