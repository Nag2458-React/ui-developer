import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const ApiIntegration = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  async function getCards() {
    let res = await fetch("https://fakestoreapi.com/products");
    let result = await res.json();
    setCards(result); // <-- result is ARRAY
  }

  if (cards.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="row">
      {cards.map((item) => (
        <div className="col-md-3 mb-3" key={item.id}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ApiIntegration;
