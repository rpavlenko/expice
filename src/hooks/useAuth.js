import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
  const [authentification, setAuthentification] = useState(null);

  if (!authFirebase) return;

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () =>
    auth
      .signInWithPopup(provider)
      .then()
      .catch(err => console.log(err));

  const logOut = () =>
    auth
      .signOut()
      .then()
      .catch(err => console.log(err));

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthentification(user);
      } else {
        setAuthentification(null);
      }
    });
  }, [authentification]);

  return { authentification, logIn, logOut };
}
