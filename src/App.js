import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import GithubSignInPage from "./components/githubSignInPage";
import "./styles/SignIn.css";
import "./styles/githubSignInPage.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Sign-In Page */}
        <Route path="/" element={<SignIn />} />

        {/* Route for Main Page */}
        <Route path="/github-signin" element={<GithubSignInPage />} />

      </Routes>
    </Router>
    
  );
};

export default App;
