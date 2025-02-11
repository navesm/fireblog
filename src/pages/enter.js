import { auth, googleAuthProvider } from '../lib/firebase.js';
import { signInWithPopup, signOut } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({ }) {

  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton/>
  // 2. user signed in, but missing username <UsernameForm/>
  // 3. user signed in, has username <SignOutButton/>
  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error("Google Sign-in error:", error);
    }
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

//Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}> Sign Out </button>
}

function UsernameForm() {
  return null;
}