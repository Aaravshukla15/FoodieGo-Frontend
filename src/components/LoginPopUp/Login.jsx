import { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign-Up");
  const handleCloseClick = () => {
    setShowLogin(false);
  };
  return (
    <div className="login-popup">
      <form className="login-popup-cont">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={handleCloseClick} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inp">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="text" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign-Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I will agree to terms and condition</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create New accout{" "}
            <span onClick={() => setCurrState("Sign-Up")}>Click Here.</span>
          </p>
        ) : (
          <p>
            Already Have an account
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};
Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
