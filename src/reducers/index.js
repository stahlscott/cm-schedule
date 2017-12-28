import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';

const rootReducer = combineReducers({
  sessions: SessionsReducer
});

export default rootReducer;
