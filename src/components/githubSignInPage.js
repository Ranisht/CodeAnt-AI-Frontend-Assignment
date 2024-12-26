import React, { useState } from "react";
import "../styles/githubSignInPage.css";
import logo from "../images/logo.png";
import downArrow from "../images/downArrow.png";
import repo from "../images/repo.png";
import cloud from "../images/cloud.png";
import use from "../images/use.png";
import settings from "../images/settings.png";
import support from "../images/support.png";
import logout from "../images/logout.png";
import review from "../images/review.png";
import storage from "../images/storage.png";
import dot from "../images/dot.png";
import search from "../images/search.png";
import refresh from "../images/refresh.png";
import plus from "../images/plus.png";

const GithubSignInPage = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [repositories] = useState([
    {
      name: "design-system",
      visibility: "Public",
      tech: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      tech: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      tech: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      tech: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      tech: "Java",
      size: "6210 KB",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      tech: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      tech: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
    },
  ]);

  return (
    <div className="page-container1">
      <div className="nav">
        {/* Navbar below 768px */}
        <div className="nav1">
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "X" : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
        </div>
        <div className="nav2">
          <h2>
            <img src={logo} alt="" className="logo" /> CodeAnt AI
          </h2>
        </div>
      </div>
      {/* Left half */}
      <div className={`left-half1 ${isMenuOpen ? "show" : ""}`}>
        <div className="left-half-inner1">
          <h2>
            <img src={logo} alt="" className="logo" /> CodeAnt AI
          </h2>
          {/* Navbar buttons */}
          <button className="email">
            UtkarashDhairyPa... <img src={downArrow} alt="" className="downArrow" />
          </button>
          <div className="main-btn">
            <button
              className={selectedButton === "repositories" ? "selected" : ""}
              onClick={() => handleButtonClick("repositories")}
            >
              <img src={repo} alt="" /> <span>Repositories</span>
            </button>
            <button
              className={selectedButton === "aiCodeReview" ? "selected" : ""}
              onClick={() => handleButtonClick("aiCodeReview")}
            >
              <img src={review} alt="" /> AI Code Review
            </button>
            <button
              className={selectedButton === "cloudSecurity" ? "selected" : ""}
              onClick={() => handleButtonClick("cloudSecurity")}
            >
              <img src={cloud} alt="" /> Cloud Security
            </button>
            <button
              className={selectedButton === "howToUse" ? "selected" : ""}
              onClick={() => handleButtonClick("howToUse")}
            >
              <img src={use} alt="" /> How to Use
            </button>
            <button
              className={selectedButton === "settings" ? "selected" : ""}
              onClick={() => handleButtonClick("settings")}
            >
              <img src={settings} alt="" /> Settings
            </button>
          </div>
          {/* End buttons */}
          <div className="end-btn">
            <button className="support">
              <img src={support} alt="" /> Support
            </button>
            <button className="logout">
              <img src={logout} alt="" /> Logout
            </button>
          </div>
        </div>
      </div>
      {/* Right half */}
      <div className={`right-half1 ${isMenuOpen ? "dimmed" : ""}`}>
        <div className="right-half-inner1">
          <div className="content">
            <div className="repo-heads">
              <div className="repo-heads-inner">
                <h2>Repositories</h2>
                <p>33 total Repositories</p>
              </div>
              <div className="repo-btn">
                <button className="repo-btn1">
                  <img src={refresh} alt="" /> Refresh All
                </button>
                <button className="repo-btn2">
                  <img src={plus} alt="" /> Add Repository
                </button>
              </div>
            </div>
            <div className="search-container">
              <img src={search} alt="Search Icon" className="searchIcon" />
              <input
                type="text"
                placeholder="Search repository"
                className="search-bar"
              />
            </div>
            <hr />
            {/* Repositries */}
            {repositories.map((repo, index) => (
              <div key={index}>
                <div className="repo-one">
                  <div className="repo-header">
                    <p className="repoName">{repo.name}</p>
                    <button>{repo.visibility}</button>
                  </div>
                  <div className="repo-details">
                    <p className="repoDetails">
                      {repo.tech}
                      <img src={dot} alt="" className="dot" />
                    </p>
                    <p>
                      <img
                        src={storage}
                        alt="Repo Size Icon"
                        className="storage"
                      />{" "}
                      {repo.size}
                    </p>
                    <p>Updated {repo.updated}</p>
                  </div>
                </div>
                {index < repositories.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSignInPage;
