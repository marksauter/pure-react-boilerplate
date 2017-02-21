import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import subject from './subject';

const rootReducer =
  combineReducers(
    { subject
    , routing
    }
  );

export default rootReducer;
