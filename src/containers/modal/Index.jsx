import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";

import imageone from "../../Images/book1.png";
import imagetwo from "../../Images/food1.png";
import imagethree from "../../Images/blood.png";
import imagefour from "../../Images/ecom1.png";
import imagefive from "../../Images/country1.png";
import imagesix from "../../Images/todo.png";
import imageseven from "../../Images/blog1.png";
import imageeight from "../../Images/demo1.png";
import imagenine from "../../Images/resp1.png";





const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Modal = ({ closeModal ,selectedImage}) => {

  // const selectedImageData = portfolioData.find((item) => item.image.includes(selectedImage));

  // Check if the selectedImageData exists and if it's an array
  const imagesArray = Array.isArray(selectedImage?.image) ? selectedImage.image : [];

  return (
    <div className="modalcontainer">
      <div className="parent">
        <button onClick={() => closeModal(false)}>X </button>


        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
       
       {imagesArray.map((image, index) => (
            <div className="slider" key={index}>
              <img src={image} alt={`image_${index}`} />
             
            </div>
          ))}


            </Carousel>

      </div>
    </div>
  );
};

export default Modal;
