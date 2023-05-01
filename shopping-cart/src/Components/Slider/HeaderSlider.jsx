import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../slider/230353-1600x1067-woman-holding-leather-handbag.jpg";
import Button from "react-bootstrap/esm/Button";

const HeaderSlider = () => {
  return (
    <>
      <Carousel variant="dark" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.dmarge.com/wp-content/uploads/2022/10/2022-08-10-MJBALE-SHOT7-2162.jpg"
            alt="First slide"
            style={{ height: "90vh", objectFit: "contain" }}
          />
          <Carousel.Caption className="bg-white">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">shop now!</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cf.ltkcdn.net/handbags/images/orig/230353-1600x1067-woman-holding-leather-handbag.jpg"
            alt="Second slide"
            style={{ height: "90vh", objectFit: "contain" }}
          />

          <Carousel.Caption className="bg-white">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mb-3">
              <Button variant="dark">shop now!</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pngall.com/wp-content/uploads/8/Home-Kitchen-Appliances-PNG-Free-Download.png"
            alt="Third slide"
            style={{ height: "90vh", objectFit: "contain" }}
          />

          <Carousel.Caption className="bg-white">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div className="mb-3">
              <Button variant="dark">shop now!</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderSlider;
