import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCandies from './AllCandies';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="links">
            Home
          </Link>
          <hr />
          <Link to="/candies" className="links">
            Goodie Bag
          </Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path="/candies" component={AllCandies} />
          <Route path="/candies/:id" component={SingleCandy} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
