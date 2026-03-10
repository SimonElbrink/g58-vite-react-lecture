import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import Card from "./Card";
import { Alert } from "bootstrap";

const Pricing = () => {
  const handlePurchase = (plan) => {
    alert(`You have Selected ${plan} plan!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Pricing Plans</h1>

      <div className="text-end mb-3">
        <FaShoppingCart
          className="fs-4"
          role="button"
          onClick={() => alert("View Cart")}
        />
      </div>

      <div className="row">
        <div className="col-md-4">
          <Card
            title="Basic Plan"
            description={[
              "Perfect for individuals starting out.",
              "Includes essential features.",
            ]}
            image="https://placehold.co/150"
            buttonText="Choose Basic"
            buttonAction={() => handlePurchase("Basic")}
            cardStyle="bg-secondary text-white"
          />
        </div>
        {/* Pro Plan */}
        <div className="col-md-4">
          <Card
            title="Pro Plan"
            description={[
              "Ideal for small teams or startups.",
              "Access to advanced tools.",
            ]}
            image="https://placehold.co/150"
            buttonText="Choose Pro"
            buttonAction={() => handlePurchase("Pro")}
            cardStyle="border-success bg-success"
          />
        </div>
        {/* Enterprise Plan */}
        <div className="col-md-4">
          <Card
            title="Enterprise Plan"
            description={[
              "Designed for large organizations.",
              "Premium support included.",
            ]}
            image="https://placehold.co/150"
            cardStyle="border-warning"
          >
            <small className="text-muted">Contact us for volume pricing.</small>

          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
