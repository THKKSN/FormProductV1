// components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.module.css"; // Ensure the path is correct

const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <ul>
          <li>
            <Link to="/assessor">
              ประเมินค่า ฯ
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="/assessor">
              ประเมินการลา
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="/assessor">
              ผลการประเมิน
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
