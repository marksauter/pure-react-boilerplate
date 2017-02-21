import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Title from '../components/Title';
import Hello from '../components/Hello';
import * as Actions from '../actions';

const App =
  ({ subject, actions }) => {
    return (
      <div>
        <Title title='Pure Components Rock! yay!  🎸🎶' />
        <Hello subject={subject} setSubject={actions.setSubject} />
      </div>
    );
  };


const mapState =
  state => {
    return (
      { subject: state.subject
      }
    );
  };

const mapDispatch =
  dispatch => {
    return (
      { actions: bindActionCreators(Actions, dispatch)
      }
    );
  };

export default connect(mapState, mapDispatch)(App);
