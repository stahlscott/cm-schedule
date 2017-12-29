import { FETCH_SELECTED, ADD_SESSION, REMOVE_SESSION } from '../actions/index';
import { db, appTokenKey } from '../config/fire';

const uid = localStorage.getItem(appTokenKey);
// db.ref(uid).set({id: id});

const initialState = []


export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_SELECTED:
            if (action.payload !== 'undefined') {
                state = action.payload.ids;
            }
            return [...state]
        case ADD_SESSION:
            if (state.indexOf(action.payload.id) === -1) {
                const newSelected = [...state, action.payload.id];
                console.log(uid);
                console.log(newSelected);
                db.ref(uid).set({ids: newSelected});
                return newSelected;
            } else {
                return state;
            }
        case REMOVE_SESSION:
            const index = state.indexOf(action.payload.id);
            if (index > -1) {
                state.splice(index, 1)
                const newSelected = [...state];
                db.ref(uid).set({ids: newSelected});
                return newSelected;
            } else {
                return state;
            }
        default:
            return state;
    }
}
