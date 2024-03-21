import React from "react";

const Card = ({ data }) => {
  const { image, title, price, rating, keyword } = data;
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="border border-black/80 p-5 w-[300px]">
        <div className="h-72">
          <img src={image} className="h-full w-full" alt="" />
        </div>
        <div className="my-5 text-3xl space-y-2">
          <p>{title}</p>
          <p>Small Book Shelf</p>
          <p>{price}</p>
          <p>{rating}</p>
          {keyword.map((i, index) => (
            <div key={index}>
              <p>{i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
