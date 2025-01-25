/* Body Style with Full-Page Background */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: url('../assets/juniie.jpg') no-repeat center center fixed;
    background-size: cover; /* Ensures the image fully covers the entire page */
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Prevent scrolling */
    color: #4a4a7a; /* Dark pastel purple for the text */
  }
  
  /* Form Container */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Full screen height */
    padding: 20px;
    background: rgba(255, 255, 255, 0.7); /* Slightly increase white overlay opacity */
  }
  
  /* Form Card */
  .form-card {
    background-color: #ffffff; /* White background for the form */
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Slightly darker shadow for better visibility */
    max-width: 400px; /* Limit the form's width */
    width: 100%;
    padding: 30px;
    text-align: center;
    opacity: 0.98; /* Slight transparency */
  }
  
  /* Heading */
  .form-card h1 {
    font-size: 26px; /* Slightly larger heading */
    color: #6a4c93; /* Pastel purple */
    margin-bottom: 15px;
  }
  
  .form-card p {
    font-size: 15px; /* Slightly larger description */
    color: #4a4a7a; /* Dark pastel shade for description text */
    margin-bottom: 20px;
  }
  
  /* Form Field Styles */
  .form-field {
    margin-bottom: 20px; /* Increased space between fields for better layout */
    text-align: left; /* Align labels and inputs to the left */
  }
  
  .form-field label {
    display: block;
    font-size: 14px;
    color: #4a4a7a; /* Text color */
    margin-bottom: 8px; /* Slightly more space below labels */
  }
  
  .form-field input,
  .form-field select {
    width: 100%; /* Full width inputs */
    padding: 12px; /* Increased padding for larger clickable area */
    font-size: 15px; /* Slightly larger text */
    border: 1px solid #ddd; /* Light border */
    border-radius: 8px; /* More rounded corners */
    background: #f8f9fc; /* Light pastel background */
    color: #4a4a7a; /* Text color */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth focus transitions */
  }
  
  .form-field input:focus,
  .form-field select:focus {
    outline: none;
    border-color: #6a4c93; /* Highlighted border */
    box-shadow: 0 0 8px rgba(106, 76, 147, 0.6); /* Stronger soft purple glow */
  }
  
  /* Submit Button */
  .Submit-btn {
    width: 100%; /* Full width button */
    padding: 14px; /* Slightly larger button */
    background-color: #6a4c93; /* Pastel purple */
    color: white; /* Button text color */
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px; /* More rounded corners */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition effects */
  }
  
  .Submit-btn:hover {
    background-color: #5b3d7c; /* Darker purple on hover */
    transform: translateY(-3px); /* Slight lift effect */
  }
  
  .Submit-btn:active {
    transform: translateY(0); /* Reset the lift effect on click */
  }
  
  /* Image (Optional Banner or Decorative Image) */
  .form-image {
    width: 100%; /* Make the image fit the form's width */
    height: auto; /* Maintain the aspect ratio */
    border-radius: 12px 12px 0 0; /* Rounded top corners */
    margin-bottom: 20px; /* Space below the image */
    object-fit: cover; /* Ensure it looks good */
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .form-card {
        padding: 20px; /* Reduce padding on smaller screens */
    }
  
    .form-card h1 {
        font-size: 22px; /* Adjust heading size */
    }
  
    .form-card p {
        font-size: 14px; /* Adjust description size */
    }
  
    .form-field input,
    .form-field select {
        padding: 10px; /* Reduce input padding */
        font-size: 14px; /* Adjust text size */
    }
  
    .Submit-btn {
        padding: 12px; /* Adjust button size */
    }
  }
  