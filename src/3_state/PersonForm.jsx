import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AlertMessage from "../2_props/AlertMessage";

const PersonForm = () => {
  const [email, setEmail] = useState("demo@Test.se");
  
  const [showAlert, setshowAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState({ message: "", type: "" });

  const handleEmailChange = (event) => {
    //console.log("<<<< Target Element:", event.target);
    //console.log("<<<< Target Value:  >>", event.target.value);
    //console.log("<<<< Type:  ", event.type);

    setEmail(event.target.value);
  };

  const handleResetForm = () => {
    setEmail("");
    setshowAlert(false);
  };

  const handleSubmit = () => {
    // Validate the the input? = Email Pattern

    if (email.length < 5) {
      setAlertMessage({
        message: "Email must be atleast 5 characters long",
        type: "alert-danger",
      });
    } else {
      setAlertMessage({
        message: `Email is valid: ${email}`,
        type: "alert-success",
      });
    }

    setshowAlert(true);

    // Where should it go - API?
  };

  return (
    <>
      <div className="container mt-3">
        {showAlert && (
          <AlertMessage
            message={alertMessage.message}
            alertType={alertMessage.type}
          />
        )}

        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonForm;
