import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profileImg from "../../assets/about_profile.svg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me </h1>
        <div className="about-img">
          <img src={theme_pattern} alt="" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-left">
          <div className="about-left_img">
            <img src={profileImg} alt="" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "44%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p> <hr style={{ width: "34%" }} />
            </div>
            <div className="about-skill">
              <p>SCSS</p> <hr style={{ width: "34%" }} />
            </div>
            <div className="about-skill">
              <p>JavaSript</p> <hr style={{ width: "59%" }} />
            </div>
            <div className="about-skill">
              <p> React JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> Soon +</h1>
          <p>Years of Experience </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> Soon +</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> Soon +</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
