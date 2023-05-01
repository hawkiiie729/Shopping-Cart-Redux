import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesCard from "./CategoriesCard";

const AllCategories = () => {
    const [data,setData]=useState([])
    
  useEffect(()=>{
    fakeStore();
  },[])

    const fakeStore=async()=>{
        const res=await fetch("https://fakestoreapi.com/products/categories");
       // console.log("res->",res);
        const jsonData=await res.json();
       // console.log("jsonData",jsonData);
       setData(jsonData);
    }

    


  return (
    <Container>
      <h3 className="text-center mb-4">Browse Category</h3>
      <Row>
        {
           data.map((values)=>{
            return(
                <>
                <Col xs={12} sm={6} md={3} className="mb-2 p-0">
             <CategoriesCard category={values} />
               </Col>
                </>
            )
           })
        }
        
      </Row>
    </Container>
  );
};

export default AllCategories;
