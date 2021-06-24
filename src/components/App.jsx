import React from "react";
import Navbar from "./Navbar";
import FirstSlide from "./FirstSlide";
import NumberAds from "./Number";
import Slides from "./Slides"
import Question from "./Question"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Navbar />
      <FirstSlide />
      <NumberAds />
      <Slides />
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
