import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    talent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.talent) {
      alert("Please select a talent before submitting!");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Form is submitted successfully");
        console.log("API Response:", result);
        console.log("Form submission was successful");

        // Reset the form
        setFormData({
          name: "",
          age: "",
          email: "",
          talent: "",
        });
      } else {
        alert("Failed to submit form. Please try again");
        console.error("API Error", response.statusText);
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error("Error", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Talent Form for PUPBC</h1>
        <p>Fill out the details below if interested</p>
        <form onSubmit={handleSubmit}>
          {/* Name Input Field */}
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age Input Field */}
          <div className="form-field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input Field */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Talent Select Field */}
          <div className="form-field">
            <label htmlFor="talent">Talent</label>
            <select
              id="talent"
              name="talent"
              value={formData.talent}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your talent
              </option>
              <option value="Singing">Singing</option>
              <option value="Rap">Rap</option>
              <option value="Dancing">Dancing</option>
              <option value="Poetry">Poetry</option>
              <option value="Fangirling">Fangirling</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="Submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;