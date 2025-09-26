import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const Computers = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("computers"); // Fetch only computer category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (service) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please signin to add items to the schedule!");
      navigate("/signin");
      return;
    }

    addToCart(service);
    navigate("/schedule"); // Redirect to schedule page after adding service
  };

  return (
    <div className="service-container">
      <h2>Computers</h2>
      <div className="service-grid">
        {products.length > 0 ? (
          products.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={`${BASE_URL}/api/products/images/${service.imagePath}`}
                alt={service.name}
              />
              <h4>{service.name}</h4>
              <p>${service.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(service)}>
                Add to Schedule
              </button>
            </div>
          ))
        ) : (
          <p>No computers available.</p>
        )}
      </div>
    </div>
  );
};

export default Computers;
