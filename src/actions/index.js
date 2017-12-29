import axios from 'axios';
import { db, appTokenKey } from '../config/fire';

const SESSIONS_DATA = `https://speakers.codemash.org/api/sessionsdata`;

export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const FETCH_SELECTED = 'FETCH_SELECTED';
export const ADD_SESSION = 'ADD_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const SET_KIDZ_MASH = 'SET_KIDZ_MASH';
export const SET_SHOW_SELECTED = 'SET_SHOW_SELECTED';
export const SET_SHOW_PAST = 'SET_SHOW_PAST';

export function fetchSessions() {
    const request = axios.get(SESSIONS_DATA);

    return {
        type: FETCH_SESSIONS,
        payload: request
    };
}

export function fetchSelected(ids) {
    return {
        type: FETCH_SELECTED,
        payload: ids
    };
}

export function getInitialSelected() {
    const uid = localStorage.getItem(appTokenKey);
    return dispatch =>
        db.ref(uid).once(
            `value`,
            function(snapshot) {
                dispatch(fetchSelected(snapshot.val()));
            },
            function(errorObject) {
                console.log('The read failed: ' + errorObject.code);
            }
        );
}

export function addSession(id) {
    return {
        type: ADD_SESSION,
        payload: { id: id }
    };
}

export function removeSession(id) {
    return {
        type: REMOVE_SESSION,
        payload: { id: id }
    };
}

export function setKidzMash(value) {
    return {
        type: SET_KIDZ_MASH,
        payload: { value }
    };
}

export function setShowSelected(value) {
    return {
        type: SET_SHOW_SELECTED,
        payload: { value }
    };
}

export function setShowPast(value) {
    return {
        type: SET_SHOW_PAST,
        payload: { value }
    };
}
