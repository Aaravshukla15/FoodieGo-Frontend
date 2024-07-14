import { assets } from "../../assets/assets";
import "./OurApp.css";

const OurApp = () => {
  return (
    <div className="our-app" id="our-app">
      <p>
        For Better Experience Download Our App
        <br /> Foodie Go.
      </p>
      <div className="download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default OurApp;
