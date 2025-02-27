// import React from "react";
// import ReactDOM from "react-dom";  // Ajoute cette ligne si elle manque
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
  
//     <App />
  
// );

import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import correct pour React 18+
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
