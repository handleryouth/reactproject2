import React from "react";

function FirstSlide() {
  return (
    <div className="firstslide-container">
      <div className="firstslide-description">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button className="pinkButton">Get Started For Free</button>
      </div>

      <div>
        <img className="firstslide-image" src="/images/screen-mockups.svg" alt="Screen mockups" />
      </div>

    </div>
  );
}

export default FirstSlide
