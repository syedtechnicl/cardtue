"use client";
import React, { useEffect, useState } from "react";
import "./Styles/card.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "./Redux/slice";
interface CartItem {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<CartItem[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (error: unknown) {
        console.error(error);
      }
    };
    fetchingData();
  }, []);

  const Adding = (elem: CartItem) => {
    dispatch(AddToCart(elem));
  };

  return (
    <div className="container">
      {data.length > 0 ? (
        data.map((elem: CartItem) => (
          <div className="card" key={elem.id}>
            <h2>{elem.title}</h2>
            <img src={elem.image} alt={elem.title} className="card-image" />
            <button onClick={() => Adding(elem)} className="add-to-cart">
              Add To Cart
            </button>
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: "center", paddingTop: "300px", color: "red" }}>
          {"No Data"}
        </h1>
      )}
    </div>
  );
};

export default Page;
