import { SET_KIDZ_MASH, SET_SHOW_SELECTED, SET_SHOW_PAST } from '../actions/index';
import { Map } from 'immutable';

const initialState = Map({
    showKidzMash: false,
    showOnlySelected: false,
    showPast: false
});

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_KIDZ_MASH:
            return state.merge(Map({ showKidzMash: action.payload.value }));
        case SET_SHOW_SELECTED:
            return state.merge(Map({ showOnlySelected: action.payload.value }));
        case SET_SHOW_PAST:
            return state.merge(Map({ showPast: action.payload.value }));
        default:
            return state;
    }
}
