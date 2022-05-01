import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../bin/firebase.config";

export const initializeLoginFramework = () => {
    const app = initializeApp(firebaseConfig);
}
export const handleCreateUserWithEmailAndPassword = (name, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            const newUserInfo = user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            updateUserInfo(name);
            return newUserInfo;

        }).catch((error) => {
            // debugger;
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            console.log(newUserInfo);
            return newUserInfo;
            // console.log(error.message)
        });
}
export const handleSignInWithEmailAndPassword = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            const newUserInfo = user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            return newUserInfo;

            // console.log(user);
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}
const updateUserInfo = name => {
    const auth = getAuth();
    const user = auth.currentUser;
    updateProfile(user, {
        displayName: name
    }).then(() => {
        console.log('User Name updated successfully');
    })
        .catch((error) => {
            console.log(error);
        })
}