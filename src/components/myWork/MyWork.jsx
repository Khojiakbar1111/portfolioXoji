import "./mywork.css";
import teamPattern from "../../assets/theme_pattern.svg";
import myworkData from "../../assets/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";
import { Link } from "react-router-dom";

function MyWork() {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={teamPattern} alt="" />
      </div>
      <div className="mywork-container">
        {myworkData.map((item, index) => {
          return (
            <Link to={"/mywork"} key={index}>
              <img key={index} src={item.w_img} alt={item.w_name} />;
            </Link>
          );
        })}
      </div>
      <div className="mywork-shoMore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
