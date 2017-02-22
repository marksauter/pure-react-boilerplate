import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';

import rootReducer from './reducers';
import DevTools from './containers/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

const configureStore =
  initialState => {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
      module.hot.accept('./reducers', () =>
        store.replaceReducer(require('./reducers').default)
      );
    }

    return store;
  };


export default configureStore;