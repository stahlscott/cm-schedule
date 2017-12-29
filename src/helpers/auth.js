import { auth, provider } from '../config/fire';

export function loginWithGoogle() {
    return auth.signInWithRedirect(provider);
}

// function authenticate(promise) {
//     return promise
//         .then(function(result) {
//             // const token = result.credential.accessToken;
//             const user = result.user;
//             console.log('login happened with firebase, ', JSON.stringify(user));
//             localStorage.setItem('firebaseUser', JSON.stringify(result));
//             return Promise.resolve(result);
//         })
//         .catch(function(error) {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // const email = error.email;
//             // const credential = error.credential;
//             alert('failed firebase login' + error);
//             return Promise.reject('err');
//         });
// }

export function logout() {
    return auth.signOut();
}
