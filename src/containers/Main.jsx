import React from 'react';
import reactStamp from 'react-stamp';
import { IndexLink, Link } from 'react-router';

const Main = reactStamp(React).compose(
  { render() {
      return (
        <div>
          <nav>
            <ul>
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      );
    }
  }
);

export default Main;
