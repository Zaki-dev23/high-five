import React from "react";

function About() {
  const styles = {
    contentBox: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    textSection: {
      flex: 1,
      padding: "60px",
      textAlign: "left",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
      fontFamily: "Arial, sans-serif",
    },
    titleb: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
      fontFamily: "Arial, sans-serif",
    },
    description: {
      fontSize: "1.5rem",
      color: "#555",
      fontFamily: "Arial, sans-serif",
    },
    imageSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.contentBox}>
      <div style={styles.textSection}>
      <h2 style={styles.title}> About Us :</h2>
        <h2 style={styles.titleb}> Discover Amazing Places</h2>
        <p style={styles.description}>
          We help you explore the best locations with detailed insights and personalized recommendations.
          Our platform is designed to make your travel planning easier and more exciting.
        </p>
      </div>
      <div style={styles.imageSection}>
        <img
          src="https://imgs.search.brave.com/Z9K0CogLiPBlCAv7AeBcQODuVaFfujEo9yQjMri24Vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY3/MTAzNTQxL3Bob3Rv/L2Nhci1yZW50YWwt/c2lnbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cGpkLTlq/OVEyU3R0Wkh5QVJi/N1ZFbldNUnZBM1hI/Z3l3R2c3Z3dJcTN2/UT0" 
          alt="Location"
          style={styles.image}
        />
      </div>
    </div>
  );
}

export default About;
