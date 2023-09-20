import React from 'react'
import GoogleButton from 'react-google-button' // importing the google button as compnt. from installed package

import {auth} from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
}

// adding functionality of google sign in
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

const SignIn = () => {
    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSignIn} />
        </div>
    )
}

export default SignIn


// Above whole code explanation
/*
Import Dependencies:
GoogleButton is a component from the react-google-button package. It's a pre-designed Google Sign-In button that you can use in your application.
auth is an object imported from ../firebase that represents the Firebase Authentication service.
GoogleAuthProvider is imported from firebase/auth and is used to create a new instance of the Google Sign-In provider.
signInWithRedirect is also imported from firebase/auth and is used to initiate the Google Sign-In process.

Styling:
The style object is defined to apply some styling to the Google Sign-In button. It uses the flex and justify-center classes to horizontally center the button.

Google Sign-In Functionality:
googleSignIn is a function that is called when the Google Sign-In button is clicked.

Inside googleSignIn:
It creates a new instance of GoogleAuthProvider. This provider is used to configure the Google Sign-In authentication method.
Then, it calls the signInWithRedirect function with two arguments: auth (the Firebase Authentication service) and the provider created in the previous step.
This function initiates the Google Sign-In process by redirecting the user to the Google Sign-In page, where they can sign in with their Google account credentials.
After the user signs in with Google, Firebase will handle the authentication process and provide you with the user's information, which you can use to manage the user's session and access protected resources in your application.
*/