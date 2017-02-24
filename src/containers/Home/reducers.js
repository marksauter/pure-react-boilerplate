import SET_SUBJECT from './constants';

const initialState = 'World';

const subject =
  (state = initialState, action) => {
    switch (action.type) {
      case SET_SUBJECT:
        return action.text;
      default:
        return state;
    }
  };

export default subject;
