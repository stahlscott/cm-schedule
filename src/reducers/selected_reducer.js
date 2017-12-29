import { FETCH_SELECTED, ADD_SESSION, REMOVE_SESSION } from '../actions/index';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_SELECTED:
            return [...state];
        case ADD_SESSION:
            if (state.indexOf(action.payload.id) === -1) {
                return [...state, action.payload.id];
            } else {
                return state;
            }
        case REMOVE_SESSION:
            const index = state.indexOf(action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return [...state];
            } else {
                return state;
            }
        default:
            return state;
    }
}
