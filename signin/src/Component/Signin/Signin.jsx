import React from "react";
import "./Signin.css";
import img from "../../assets/Right_Side.png";
import google_icon from "../../assets/google_icon.png";

function Signin() {
  return (
    <>
      <section className="signin-page">
        <div className="signin-container-box">
          <div className="left-side">
            <div className="form-container">
              <div className="form-title">
                <h1 className="form-welcome-title">Welcome Back!</h1>
                <span className="welcome-text">
                  Welcome Back! please enter your details.
                </span>
              </div>
              <form>
                <p className="form-label">Email</p>
                <input
                  type="email"
                  id="input-field"
                  placeholder="Enter Your Email"
                  required
                />
                <p className="form-label">Password</p>
                <input
                  type="password"
                  id="input-field"
                  placeholder="your password"
                  required
                />
                <div className="form-help">
                  <div className="remember">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember</label>
                  </div>
                  Forgot Password?
                </div>
                <button className="signin">Sign in</button>
                <button className="google-login">
                  <img src={google_icon} />
                  Sign in with Google
                </button>
                <p className="noaccount">
                  Don’t have an account?{" "}
                  <span className="signup">Sign up fo free!</span>
                </p>
              </form>
            </div>
          </div>
          <div className="right-side">
            <img src={img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
