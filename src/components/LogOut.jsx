import React from 'react'
import './LogOut.css';
import { auth } from '../firebase'


const LogOut = () => {
    // sign out function
    const signOut = () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()}>
            Logout
        </button>
    )
}

export default LogOut

// above code explanation
/*
Sign Out Function:

Inside the LogOut component, there is a signOut function defined.It attempts to call a function named signOut on the auth object. The onClick event handler is added to the button. When the button is clicked, it triggers the auth.signOut() method to sign the user out of their current session.

*/