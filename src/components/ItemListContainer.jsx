import React from "react";
import { products } from "../products";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">{greeting}</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
