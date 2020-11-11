import {registerWebPlugin, WebPlugin} from '@capacitor/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {Shanoinsano10CapacitorFirebaseAuthPlugin, SignInResult} from './definitions';
import {facebookSignInWeb} from './providers/facebook.provider';
import {googleSignInWeb} from './providers/google.provider';
import {phoneSignInWeb} from './providers/phone.provider';
import {twitterSignInWeb} from './providers/twitter.provider';

export class Shanoinsano10CapacitorFirebaseAuthWeb extends WebPlugin implements Shanoinsano10CapacitorFirebaseAuthPlugin {
  constructor() {
    super({
      name: 'Shanoinsano10CapacitorFirebaseAuth',
      platforms: ['web']
    });
  }

  async signIn(options: {providerId: string;}): Promise<SignInResult> {
      const googleProvider = new firebase.auth.GoogleAuthProvider().providerId;
      const facebookProvider = new firebase.auth.FacebookAuthProvider().providerId;
      const twitterProvider = new firebase.auth.TwitterAuthProvider().providerId;
      const phoneProvider = new firebase.auth.PhoneAuthProvider().providerId;
      switch (options.providerId) {
          case googleProvider:
              return googleSignInWeb(options);
          case twitterProvider:
              return twitterSignInWeb(options);
          case facebookProvider:
              return facebookSignInWeb(options);
          case phoneProvider:
              return phoneSignInWeb(options);
      }

	  return Promise.reject(`The '${options.providerId}' provider was not supported`);
  }

  async signOut(options: {}): Promise<void> {
      console.log(options);
      return firebase.auth().signOut()
  }
}

const Shanoinsano10CapacitorFirebaseAuth = new Shanoinsano10CapacitorFirebaseAuthWeb();
export { Shanoinsano10CapacitorFirebaseAuth };

// Register as a web plugin
registerWebPlugin(Shanoinsano10CapacitorFirebaseAuth);
