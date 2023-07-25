import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader/Index";
import Modal from "../modal/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import imageone from "../../Images/book1.png";
import imageten from "../../Images/book2.png";
import imageeleven from "../../Images/book3.png";
import imagetwelve from "../../Images/book4.png";
import imagethirteen from "../../Images/book5.png";
import imagetwo from "../../Images/food1.png";
import imagethree from "../../Images/blood.png";
import imagefour from "../../Images/ecom1.png";
import imagefive from "../../Images/country1.png";
import imagesix from "../../Images/todo.png";
import imageseven from "../../Images/blog1.png";
import imageblog8 from "../../Images/blog_app/blog2.png";
import imageeight from "../../Images/demo1.png";
import imagenine from "../../Images/resp1.png";
import imageblood1 from "../../Images/blood_donation/blood1.png";
import imageblood3 from "../../Images/blood_donation/blood3.png";
import imageblood4 from "../../Images/blood_donation/blood4.png";
import imageblood5 from "../../Images/blood_donation/blood5.png";
import imageblood6 from "../../Images/blood_donation/blood6.png";
import imageblood7 from "../../Images/blood_donation/blood7.png";
import imageblood8 from "../../Images/blood_donation/blood8.png";
import imageblood9 from "../../Images/blood_donation/blood9.png";
import imageblood10 from "../../Images/blood_donation/blood10.png";
import imageblood11 from "../../Images/blood_donation/blood11.png";
import imagefood1 from "../../Images/food_app/food1.png";
import imagefood2 from "../../Images/food_app/food2.png";
import imagefood3 from "../../Images/food_app/food3.png";
import imagefood4 from "../../Images/food_app/food4.png";
import imagetech2 from "../../Images/tech/ecom2.png";
import imagetech3 from "../../Images/tech/ecom3.png";
import imagetech4 from "../../Images/tech/ecom5.png";
import imagetech5 from "../../Images/tech/ecom6.png";
import imagetech6 from "../../Images/tech/ecom7.png";
import imagecountry1 from "../../Images/country/country2.png";
import imagecountry2 from "../../Images/country/country3.png";
import imagetodo2 from "../../Images/todo/todo2.png";
import imagetodo3 from "../../Images/todo/todo3.png";
import imagetodo4 from "../../Images/todo/todo4.png";
import imagebasic1 from "../../Images/basic_website/demo2.png"
import imagebasic2 from "../../Images/basic_website/demo3.png"
import imageresp1 from "../../Images/responsive/resp2.png"
import imageresp2 from "../../Images/responsive/resp3.png"
import imageresp3 from "../../Images/responsive/resp4.png"
import { FaImages,FaGithub } from "react-icons/fa";
import "./style.scss";

const portfolioData = [
  {
    id: 3,
    name: "Book App",
    image: [imageone, imageten, imageeleven, imagetwelve, imagethirteen],
    link: "https://github.com/RyanMohammad18/Basic_Book_Management_with_CRUD",
  },
  {
    id: 2,
    name: "Blood Donation",
    image: [
      imagethree,
      imageblood1,
      imageblood3,
      imageblood4,
      imageblood5,
      imageblood6,
      imageblood7,
      imageblood8,
      imageblood9,
      imageblood10,
      imageblood11,
    ],
    link: "https://github.com/RyanMohammad18/Blood_Donation_Website_Django",
  },
  {
    id: 3,
    name: "Food app",
    image: [imagetwo, imagefood1,imagefood2,imagefood3,imagefood4],
    link: "https://github.com/RyanMohammad18/Food_App_Recipe_ReactJS",
  },
  {
    id: 2,
    name: "Tech E-commerce",
    image: [imagefour, imagetech2, imagetech3, imagetech4, imagetech5,imagetech6],
    link: "https://github.com/RyanMohammad18/Tech_Ecommerce_Website_flask_python",
  },
  {
    id: 3,
    name: "Country App",
    image: [imagefive, imagecountry1,imagecountry2],
    link: "https://github.com/RyanMohammad18/CountryApp_ReactJS",
  },
  {
    id: 3,
    name: "ToDo App",
    image: [imagesix, imagetodo2,imagetodo3,imagetodo4],
    link: "https://github.com/RyanMohammad18/TodoApp_Javascript",
  },
  {
    id: 3,
    name: "Blog Web",
    image: [imageseven, imageblog8],
    link: "https://github.com/RyanMohammad18/Blog_Post_with_ReactJS",
  },
  {
    id: 3,
    name: "Basic Website",
    image: [imageeight, imagebasic1,imagebasic2],
    link: "https://github.com/RyanMohammad18/Basic_Website",
  },
  {
    id: 3,
    name: "Responsive Website",
    image: [imagenine,imageresp1,imageresp2,imageresp3],
    link: "https://github.com/RyanMohammad18/Basic_Responsive_Website",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "ALL",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredValue, setfilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedImage(item);
    setOpenModal(true);
  };

  function handlefilter(currentId) {
    setfilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log(hoveredValue);

  const filterItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  const handleVisitButtonClick = (url) => {
    // Open the URL in a new tab/window when the "Visit" button is clicked
    window.open(url, "_blank");
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="Project"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="portfolio_content">
          <ul className="portfolio_content_filter">
            {filterData.map((item, index) => (
              <li
                className={item.filterId === filteredValue ? "active" : " "}
                onClick={() => handlefilter(item.filterId)}
                key={item.filterId}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio_content_cards">
            {filterItems.map((item, index) => (
              <div
                className="portfolio_content_cards_item"
                key={`cardItem${item.name.trim()}`}
              >
                <div className="portfolio_content_cards_item_img-wrapper">
                  <a>
                    <img alt="dummy data" src={item.image[0]} />
                  </a>
                </div>
                <div className="overlay">
                  <p>{item.name}</p>
                  <button
                    onClick={() => handleVisitButtonClick(item.link)}
                    className="github-btn"
                  >
                    GitHub <FaGithub/>
                  </button>

                  <button
                    onClick={() => {
                      handleOpenModal(item);
                    }}
                    className="img-btn"
                  >
                    Images <FaImages/>
                  </button>

                  {index === hoveredValue && (
                    <div className="overlay_content">
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {openModal && (
            <Modal
              closeModal={setOpenModal}
              img={portfolioData}
              selectedImage={selectedImage}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;