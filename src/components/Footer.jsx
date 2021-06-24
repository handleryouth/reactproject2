import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
    <img className="footerContainer-background" src="/images/bg-footer-top-desktop.svg" alt="" />
      <div className="marginfooter">
        <img src="/images/logowhite.svg" alt="Logo" />
        <p className="footerParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <p>Phone: +1-543-123-4567</p>
        <p>example@huddle.com</p>

        <div className = "socialMediaContainer">
          <i class="fab fa-facebook-square fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-twitter-square fa-2x"></i>
        </div>
      </div>

      <div className="marginfooter">
        <h3>Newsletter</h3>
        <p className="footerParagraph">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <div className="footerForm">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}


export default Footer
