import { auth, provider } from '../config/fire';

export function loginWithGoogle() {
    return auth.signInWithRedirect(provider);
}

export function logout() {
    return auth.signOut();
}
