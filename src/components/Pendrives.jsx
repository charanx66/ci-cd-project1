import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const Pendrives = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("pendrives"); // Fetch only pendrive category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (service) => {
    addToCart(service);
    navigate("/schedule"); // Redirect to schedule page after adding service
  };

  return (
    <div className="service-container">
      <h2>Pendrives</h2>
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
              <button onClick={() => handleAddToCart(service)}>Add to Schedule</button>
            </div>
          ))
        ) : (
          <p>No pendrives available.</p>
        )}
      </div>
    </div>
  );
};

export default Pendrives;
