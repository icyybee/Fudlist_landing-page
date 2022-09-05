import React from "react";
import "../css/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Download from "../components/Download";
import Restaurant from "../components/Restaurant";
import Vendors from "../components/Vendors";

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Vendors />
      <Restaurant />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
