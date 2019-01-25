// @flow

import { createStore } from 'redux';
import enhancer from 'app/src/modules/rootEnhancer';
import reducers from 'app/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
