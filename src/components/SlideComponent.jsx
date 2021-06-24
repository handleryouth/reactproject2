import React from "react";

function SlideComponent(props) {
  return (
    <div className={props.container}>
      {props.imgtop}
      <div>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>

      <div>
        <img className={props.ImageSize} src={props.image} alt="Illustration" />
      </div>
      {props.imgbottom}
    </div>
  );
}

export default SlideComponent;
