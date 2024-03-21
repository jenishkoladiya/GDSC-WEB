import React from "react";
import Cart from "../assets/image.png";
import Card from "./Card";

const data = [
  {
    id: 1,
    image: Cart,
    title: "product 1",
    price: 1000,
    rating: "4.8",
    keyword: ["1234", "asdf"],
  },
  {
    id: 2,
    image: Cart,
    title: "product 2",
    price: 1100,
    rating: "4.5",
    keyword: ["1234", "asdf"],
  },
  {
    id: 3,
    image: Cart,
    title: "product 3",
    price: 1000,
    rating: "5",
    keyword: ["1234", "asdf"],
  },
  {
    id: 4,
    image: Cart,
    title: "product 3",
    price: 1000,
    rating: "5",
    keyword: ["1234", "asdf"],
  },
];

const Home = () => {
  return (
    <div className="flex flex-row gap-x-5 flex-wrap">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Home;
