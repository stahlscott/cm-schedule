import { FETCH_SELECTED, ADD_SESSION, REMOVE_SESSION } from '../actions/index';


export default function(state = [7740], action) {
    switch (action.type) {
        case FETCH_SELECTED:
            return [...state];
        default:
            return state;
    }
}
