import React from "react";

function SlideComponent(props) {
  return (
    <div className={props.container}>
      <div>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>

      <div>
        <img className={props.ImageSize} src={props.image} alt="Illustration" />
      </div>
    </div>
  );
}

export default SlideComponent;
