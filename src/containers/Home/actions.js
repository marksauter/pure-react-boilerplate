import SET_SUBJECT from './constants';

const setSubject =
  text => (
    { type: SET_SUBJECT
    , text
    }
  );

export default
  { setSubject
  };
