import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import useFetch from "../../api/useFetch";
import Button from "../../components/Btn/Button";
import "./ProductDetail.css";

function ProductDetail() {
  let { id } = useParams();
  const { products } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <>
      <div className="desHeader">
        <div>
          <h1 className="heading">Product details</h1>
        </div>
        <div>
          <BsSearch
            className="iconSearch"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div>
          <AiOutlineShoppingCart
            className="iconCart"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <div className="des-data" key={products?.id}>
        <div className="imgDiv">
          <img
            className="desImg"
            src={products?.image}
            style={{ width: "460px", height: "460px" }}
            alt="React Image"
          />
        </div>
        <div className="desDetail">
          <h1>
            <b>{products?.title}</b>
          </h1>
          <h3>Price: ${products?.price}</h3>
          <h3>Category: {products?.category}</h3>
          <div className="size">
            <Button className="btn">M</Button>
            <Button className="btn">L</Button>
            <Button className="btn">XL</Button>
          </div>
          <h4 className="detail">{products?.description}</h4>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
