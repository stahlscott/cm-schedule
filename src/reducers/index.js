import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import SelectedReducer from './selected_reducer';
import OptionsReducer from './options_reducer';

const rootReducer = combineReducers({
    sessions: SessionsReducer,
    selected: SelectedReducer,
    options: OptionsReducer
});

export default rootReducer;
