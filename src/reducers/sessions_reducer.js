import { FETCH_SESSIONS } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SESSIONS:
            return action.payload.data;
    }
    return state;
}
