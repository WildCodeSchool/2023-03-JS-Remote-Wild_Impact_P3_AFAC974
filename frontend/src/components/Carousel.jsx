import React, { useState, useEffect } from "react";
// Import Swiper React components
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import ImageCard from "./ImageCard";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel() {
  const { id } = useParams();
  const [suggestedImages, setSuggestedImages] = useState([]);

  const getSuggestedImages = async () => {
    try {
      const suggestImg = await connexion.get(`/categories/${id}/works`);
      setSuggestedImages(suggestImg);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSuggestedImages();
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // eslint-disable-next-line react/jsx-boolean-value
      grabCursor={true}
      // eslint-disable-next-line react/jsx-boolean-value
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      // eslint-disable-next-line react/jsx-boolean-value
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay, Pagination, Navigation]}
      className="pb-10"
    >
      {suggestedImages.map((suggestedImage) => (
        <SwiperSlide className="h-96" key={suggestedImage.id}>
          <ImageCard
            cls="h-96 m-auto"
            src={suggestedImage.image_src}
            alt={suggestedImage.image_alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
