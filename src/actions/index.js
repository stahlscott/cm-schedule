import axios from 'axios';

const SESSIONS_DATA = `https://speakers.codemash.org/api/sessionsdata`;

export const FETCH_SESSIONS = 'FETCH_SESSIONS';

export function fetchSessions() {
    const request = axios.get(SESSIONS_DATA);

    return {
        type: FETCH_SESSIONS,
        payload: request
    };
}
