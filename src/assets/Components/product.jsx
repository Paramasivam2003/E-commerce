import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function Product(){

  const [data,setData] =useState([]);
  const [filter,setFilter] =useState([]);
  const [loading,setLoading] =useState(false);
  
  useEffect(() =>{
    const getproduct = async () =>{
      setLoading(true);
      
      try{
        const response =await fetch("https://fakestoreapi.com/products");
      
      if(!response.ok){
        throw new Error("failed to fetch product")
      }

      const productData = await response.json();
  

      setData(productData);
      setFilter(productData);
    } catch(error){
      console.error("Error fetching product:", error);
    }finally {
      setLoading(false);
    }
    };
  getproduct();
  },[]);
  

  const handleFilter = (category) => {
    if (category === "All") {
      setFilter(data); // Show all products
    } else {
      const filteredProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilter(filteredProducts); // Filter by selected category
    }
  };


  const Loading =() =>{
    return(
      <>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      </>
    )
  }

  const Showproduct =() =>{
    return(
      <>
      <div className="button mb-4">
      <Button className="btn-outline-dark items" onClick={() =>handleFilter("All")}>All</Button>
      <Button className="btn-outline-dark items" onClick={() =>handleFilter("men's clothing")}>Men's Clothing</Button>
      <Button className="btn-outline-dark items" onClick={() =>handleFilter("women's clothing")}>Women's Clothing</Button>
      <Button className="btn-outline-dark items" onClick={() =>handleFilter("jewelery")}>Jewelery</Button>
      <Button className="btn-outline-dark items" onClick={() =>handleFilter("electronics")}>Electronics</Button>
      </div>

      <div className="row justify-content-center">
      {filter.map((Product) =>{
        return(
          <div className="col-md-4" key={Product.id}>
            <div className="text-center p-4 mb-4">
              <Card className="cart-size">
                <Card.Img variant="top" src={Product.image} height={250}/>
                <Card.Body>
                  <Card.Title className="cart-text">{Product.title.substring(0,12)}</Card.Title>
                  <Card.Text className="cart-text2">
                    $:{Product.price}
                  </Card.Text>
                  <NavLink to={`/products/${Product.id}`}><button className="btn btn-primary cart-text3">Buy Now</button></NavLink>
                </Card.Body>
              </Card>
            </div>
          </div>
          
        )
        })}
      </div>
      </>
    )
  }

  return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 style={{textAlign:"center",marginTop:"40px",}}>Latest Product</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <Showproduct />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product; 