import * as firebase from 'firebase'
import { firebaseConfig } from './../setting'

export const actions = {
  githubAuth({ commit }) {
    // initialize firebase
    firebase.initializeApp(firebaseConfig)

    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    provider.setCustomParameters({
      'allow_signup': 'false'
    });

    return firebase.auth().signInWithPopup(provider).then(function(result) {
      const accessToken = result.credential.accessToken
      commit('setGithubAccessToken', accessToken)
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential

      // show log
      console.log(`code: ${errorCode}, Msg: ${errorMessage}, mail: ${email}, credential: ${credential}`)
    });
  }
}