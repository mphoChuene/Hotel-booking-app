import React, { useState } from "react";
import styles from "./Payment.module.css"; // Define your CSS styles
import PaymentWithStripe from "./PaymentWithStripe"; // Import the new component

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.paymentContainer}>
      <h2>Payment Information</h2>
      <PaymentWithStripe formData={formData} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Payment;
