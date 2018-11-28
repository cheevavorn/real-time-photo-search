import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is front page</h1>
      <Link to="/search">Search</Link>
    </div>
  );
};

export default Home;
