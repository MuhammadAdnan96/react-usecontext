import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";
import "./Products.css";

function Products() {
  //{ setToken }    // prop based token and setToken is sending
  const { products } = useFetch("https://fakestoreapi.com/products");

  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/product-description/" + event.currentTarget.id);
  };

  return (
    <>
      <Header
      //setToken={setToken}
      />
      <div className="grid">
        {products.map((product) => (
          <div className="view" key={product?.id}>
            <div>
              <img
                id={product?.id}
                onClick={handleClick}
                src={product?.image}
                style={{ width: "200px", height: "200px" }}
                alt="React Image"
              />
            </div>
            <div>{product?.title}</div>
            <div>{`$${product?.price}`}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
