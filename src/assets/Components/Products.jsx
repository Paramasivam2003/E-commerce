import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Products(){
  const {id} =useParams();
  const [product,setProduct] =useState([]);
  const [loading,setLoading] =useState(false);

  useEffect(() =>{
    const getProduct =async () =>{
      setLoading(true);
      const response =await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json());
      setLoading(false)
    }
    getProduct();
  },[])

  const Loading =() =>{
    return(
      <>
      loading...
      </>
    )
  }

  const Showproduct =() =>{
    return(
      <>
      <div className="col-md-6">
        <img src={product.image} alt ={product.title} height={400} width={400} className="item-image"/>
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase  cart2-text2">
          {product.category}
        </h4>
        <h2 className="display-5 cart2-text3">{product.title}</h2>
        <p className="lead cart2-text4">
          Ratings - {product.rating && product.rating.rate}
          <FaRegStar className="star-icon"/>
        </p>
        <h3 className="display-6 fw-bold my-4 cart2-text5">
          ${product.price}
        </h3>
        <p className="cart2-text6">{product.description}</p>
        <button className="btn-outlinr-dark px-3 cart2-text7">Add to cart</button>
        <NavLink to={"/cart"} className="btn-dark px-3"><button className="cart2-text8">Go to cart</button></NavLink>
      </div>
      </>
    )
  }
  return(
    <>
    <div className="container">
      <div className="row">
        {loading ? <Loading /> : <Showproduct />}
      </div>
    </div>
    </>
  )
}
export default Products;