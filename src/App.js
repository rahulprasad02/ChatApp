import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

// importing the auth service of firebase here
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

// inorder to use tailwind as our css, we need to specify the css in className in the react component or the extract it from some created object

// creating an object to hold tailwind css
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    // this below div is for a container holding chat section
    <div className={style.appContainer}>
      {/* chat section element */}
      <section className={style.sectionContainer}>
        <Navbar/>
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
