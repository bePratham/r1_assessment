import { FBLogout } from '../utils/FacebookSDK';
import {auth } from './firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword=async (email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInWithEmailAndPassword = async (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
};
export const doSignOut=()=>{
    if(localStorage.getItem(process.env.REACT_APP_FB_TOKEN)){
        FBLogout();
    }
    return auth.signOut();
}