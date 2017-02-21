import * as types from '../constants/ActionTypes';

export const setSubject =
  text => {
    return (
      { type: types.SET_SUBJECT
      , text
      }
    );
  };
