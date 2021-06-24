import React from "react";
import SlideComponent from "./SlideComponent";

function ListSlides() {
  return (
    <div className="slidesContainer">
      <SlideComponent
        image="/images/illustration-grow-together.svg"
        header="Grow Together"
        paragraph="Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form."
        container="containerStyle"
        ImageSize="imageWidth"
        imgtop={
          <img
            className="slide1img-top"
            src="/images/bg-section-bottom-desktop-1.svg"
            alt="Background-img"
          />
        }
        imgbottom={
          <img
            className="slide1img-bottom"
            src="/images/bg-section-bottom-desktop-2.svg"
            alt="Background-img"
          />
        }
      />

      <SlideComponent
        image="/images/illustration-flowing-conversation.svg"
        header="Flowing Conversations"
        paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
  just-in-time loading for a more natural flow."
        container="revertcontainerStyle"
        ImageSize="imageWidth"
      />

      <SlideComponent
        image="/images/illustration-your-users.svg"
        header="Your Users"
        paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
  once signed in to your app, your users can start chatting immediately."
        container="containerStyle"
        ImageSize="imageWidth"
        imgtop={
          <img
            className="slide2img-top"
            src="/images/bg-section-bottom-desktop-1.svg"
            alt="Background-img"
          />
        }
        imgbottom={
          <img
            className="slide2img-bottom"
            src="/images/bg-section-bottom-desktop-2.svg"
            alt="Background-img"
          />
        }
      />
    </div>
  );
}

export default ListSlides;
