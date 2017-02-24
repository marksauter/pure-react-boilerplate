import React from 'react';
import reactStamp from 'react-stamp';

import Header from 'components/Header';

const { object } = React.PropTypes;

const About = reactStamp(React).compose(
  { contextTypes:
    { renderer: object
    }
  , render() {
      return (
        <Header
          text="About"
          color="purple"
          fontSize={25}
        />
      );
    }
  }
);

export default About;
