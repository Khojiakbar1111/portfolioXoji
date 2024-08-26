import "./services.css";
import themePattern from "../../assets/theme_pattern.svg";
import serviceData from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { NavLink } from "react-router-dom";

function Services() {
  console.log(serviceData);
  return (
    <div className="services" id="service">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="services-container">
        {serviceData.map((service, index) => {
          return (
            <div className="services-format" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="service-read">
                <p>Raed More</p>
                <NavLink to="/readmore">
                  <img src={arrow_icon} alt="" />
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
