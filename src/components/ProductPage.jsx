import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(category || "");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleAddToCart = async (service) => {
    try {
      await addToCart(service.id);
      alert("Service added to schedule successfully!");
    } catch (error) {
      console.error("Error adding to schedule:", error);
    }
  };

  return (
    <div className="service-container">
      <h2>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "All Products"}
      </h2>
      <div className="service-grid">
        {products.length > 0 ? (
          products.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={`${BASE_URL}/api/products/images/${service.imagePath}`}
                alt={service.name}
              />
              <h3>{service.name}</h3>
              <p>Price: ${service.price}</p>
              <button onClick={() => handleAddToCart(service)}>
                Add to Schedule
              </button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
