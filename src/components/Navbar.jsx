import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import './Navbar.css';

// importing the auth service of firebase here
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

// imp
// here i hv not applied tailwind css directly inside one file rather i hv used another sept. file for same Navbar.css

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className="nav"> {/* Use the class name directly */}
            <h1 className="heading">Chat App</h1>
            {/* there's no point to show log out button if the user is not signed in similary if already signed in then don't show sign in button */}
            {user ? <LogOut /> : <SignIn />}
        </div>
    );
};

export default Navbar;
