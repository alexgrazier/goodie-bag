import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCandies from './AllCandies';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <div>
          <AllCandies />
        </div>
      </div>
    </Router>
  );
};

export default Root;
