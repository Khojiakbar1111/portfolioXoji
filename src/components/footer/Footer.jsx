import userIcon from "../../assets/user_icon.svg";
import patternImg from "../../assets/theme_pattern.svg";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top_left">
          <h1>AhmeD</h1>
          <img src={patternImg} alt="" />
          <p>
            I'm a fronted developer from, Uzbekistan with 12 years of experience
            in companies like Microsoft, Tesla and Apple
          </p>
        </div>
        <div className="footer-top_right">
          <div className="footer-email_input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom_left">
          2023 Abdumutalov Xojiakbar. All rights reserved.
        </p>
        <div className="footer-bottom_right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
