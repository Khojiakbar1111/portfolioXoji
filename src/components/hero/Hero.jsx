import "./hero.css";
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-img">
        <img src={profileImg} alt="" />
      </div>
      <h1>
        {" "}
        <span>I'm Abdumutalov Xojiakbar,</span> Frontend Developer based in
        Uzbekistan.
      </h1>
      <p>
        I am a Frontend developer from Namangan, Uzbekistan with a year
        experience in Algorithm company
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
