import React from "react";
import Navbar from "./Component/Header";
import ModernSection from "./Component/ModernSection";
import WelcomeSlider from "./Component/WelcomeSlider";
import Chatbot from "./Component/Chatbot";
import Footer from "./Component/Footer";
import MiddleSection from "./Component/MiddleSection";
import MiddleSection1 from "./Component/MiddleSection1";
import TopicWithImage from "./Component/TopicWithImage";

function App() {
  return (
    <div>
      <Navbar />
      <br />

      <WelcomeSlider />

      <Chatbot />
      <MiddleSection />
      <TopicWithImage />
      <ModernSection />
      <Footer />
    </div>
  );
}

export default App;
