import React from "react";
import Footer from "../Components/Footer/Footer";
import TopNavbar from "../Components/Header/TopNavbar";
import HeaderSlider from "../Components/Slider/HeaderSlider";
import AllCategories from "../Components/Categories/AllCategories";
import LatestProducts from "../Components/Products/LatestProducts";

const Homepage = () => {
  return (
    <>
      <div>
        <TopNavbar />
        <HeaderSlider />
        <AllCategories />
        <LatestProducts />
        <div className="mb-4 pb-4"></div>
        <div className="mb-4 pb-4"></div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
