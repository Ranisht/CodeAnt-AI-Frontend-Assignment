import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../styles/SignIn.css";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import githubLogo from "../images/github.png";
import bitBucketLogo from "../images/bit-bucket.png";
import azureDevopsLogo from "../images/azure-devops.png";
import gitlabLogo from "../images/gitlab.png";
import selfHostedLogo1 from "../images/bit-bucket.png";
import selfHostedLogo2 from "../images/azure-devops.png"; 
import upArrow from "../images/up-arrow.png";
import borderImage from "../images/border.png"

const App = () => {
  // State for platform
  const [platform, setPlatform] = useState("SAAS");

  // Buttons data for SAAS
  const saasButtons = [
    {
      label: "Sign in with Github",
      img: githubLogo,
      route: "/github-signin", 


    },
    {
      label: "Sign in with Bitbucket",
      img: bitBucketLogo,
    },
    {
      label: "Sign in with Azure Devops",
      img: azureDevopsLogo,
    },
    {
      label: "Sign in with GitLab",
      img: gitlabLogo,
    },
  ];

  // Buttons data for Self Hosted
  const selfHostedButtons = [
    {
      label: "Self Hosted Login 1",
      img: selfHostedLogo1,
    },
    {
      label: "Self Hosted Login 2",
      img: selfHostedLogo2,
    },
  ];

  // Filtered buttons based on platform
  const filteredButtons = platform === "SAAS" ? saasButtons : selfHostedButtons;

  return (
    <div className="page-container">
      <div className="left-half">
      <img src={borderImage} alt="" srcset=""  className="borderImage"/>
        <div className="left-half-inner">
          {/* Left side starts */}
          <div className="main-containers" id="main1">
            <div className="heading">
              <img src={logo} alt="Logo" className="main-logo" />
              <h2>AI to Detect & Autofix Bad Code</h2>
            </div>
            <hr className="hr-line" />
            <div className="content">
              <div className="content-inner">
                <div className="content-one" id="contents">
                  <h2>30+</h2>
                  <p>Language Support</p>
                </div>
                <div className="content-two" id="contents">
                  <h2>10K+</h2>
                  <p>Developers</p>
                </div>
                <div className="content-three" id="contents">
                  <h2>100K+</h2>
                  <p>Hours Salary</p>
                </div>
              </div>
            </div>        
          </div>

          <div className="main-containers" id="main2">
            <div className="heading">
              <div className="heading-image">
                <img src={logo2} alt="Logo 2" />
                <p>Issues fixed</p>
                <h1>500K</h1>
              </div>
              <div className="head1">
                <p>
                  <img src={upArrow} alt="Up Arrow" /> 14%
                </p>
                <p className="text">This Week</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    {/* Left side ends */}

      <div className="right-half">
        <div className="right-half-inner">
          {/* Right side ends */}
          <h1>
            <img src={logo} alt="Logo" className="main-logo" />
            CodeAnt AI
          </h1>
          <h2>Welcome to CodeAnt AI</h2>
          <div className="main-buttons">
          {/* Main buttons */}
            <button
              className={`btn1 ${platform === "SAAS" ? "active" : ""}`}
              onClick={() => setPlatform("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`btn2 ${platform === "Self Hosted" ? "active" : ""}`}
              onClick={() => setPlatform("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="platform-buttons">
          {/* Platform */}
  {filteredButtons.map((button, index) => (
    button.route ? (
      <Link key={index} to={button.route} className={button.label === "Sign in with Github" ? "no-underline" : ""}>
      <button className="platform-btn">
        <img
          src={button.img}
          alt={`${button.label} Icon`}
          className="button-icon"
        />
        {button.label}
      </button>
    </Link>
    
    ) : (
      <button key={index} className="platform-btn">
        <img
          src={button.img}
          alt={`${button.label} Icon`}
          className="button-icon"
        />
        {button.label}
      </button>
    )
  ))}
</div>

        <p className="privacyPolicy">
          By signing up you agree to the <b>Privacy Policy.</b>
        </p>
      </div>
      {/* Right side ends */}
    </div>
  );
};

export default App;
