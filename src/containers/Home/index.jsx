import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from 'components/Header';
import Hello from 'components/Hello';
import ActionCreators from './actions';

const Home =
  props => (
    <div>
      <Header
        text="Pure Components Rock! yay!  🎸🎶"
        color="purple"
        fontSize={17}
      />
      <Hello {...props} />
    </div>
  );


const mapState =
  state => (
    { subject: state.subject
    }
  );

const mapDispatch =
  dispatch => (
    { actions: bindActionCreators(ActionCreators, dispatch)
    }
  );

export default connect(mapState, mapDispatch)(Home);
