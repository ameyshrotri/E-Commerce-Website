import React from "react";
import "./DescriptionBox.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Discover the ultimate online shopping experience with our e-commerce
          website, offering a vast selection of products across various
          categories. Enjoy user-friendly navigation, detailed product
          descriptions, and high-resolution images to make informed purchasing
          decisions. Benefit from secure payment options, fast shipping, and
          hassle-free returns. Stay updated with our latest deals, exclusive
          discounts, and personalized recommendations. Join our community of
          satisfied customers and shop with confidence, knowing that your
          satisfaction is our top priority.
        </p>
        <p>
          Our dedicated customer support team is available 24/7 to assist you
          with any queries or issues. Explore our curated collections,
          handpicked to cater to diverse tastes and preferences. Experience the
          convenience and joy of online shopping with us, where quality meets
          affordability every day.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
