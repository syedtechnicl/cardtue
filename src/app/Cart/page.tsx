"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { RemoveToCart } from "../Redux/slice";

interface CartItem {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Page = () => {
  const data = useSelector((dd: RootState) => dd.RealLife);
  const dispatch = useDispatch();

  const remove = (elem: CartItem) => {
    dispatch(RemoveToCart(elem.id));
  };
  return (
    <div>
      <div className="container">
        {data.length > 0 ? (
          data.map((elem: CartItem) => (
            <div className="card" key={elem.id}>
              <h2>{elem.title}</h2>
              <img src={elem.image} alt={elem.title} className="card-image" />
              <button onClick={() => remove(elem)} className="add-to-cart">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <h1
            style={{ textAlign: "center", paddingTop: "300px", color: "red" }}
          >
            {"EMPTY CARDS"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Page;
