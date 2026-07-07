import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";

import {
    auth,
    googleProvider,
} from "../firebase/auth";

class AuthService {

    async register(name, email, password) {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        await updateProfile(userCredential.user, {
            displayName: name,
        });

        return userCredential.user;
    }

    async login(email, password) {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        return userCredential.user;
    }

    async googleLogin() {

        const result =
            await signInWithPopup(
                auth,
                googleProvider
            );

        return result.user;
    }

    async logout() {

        await signOut(auth);

    }

    async resetPassword(email) {

        await sendPasswordResetEmail(
            auth,
            email
        );

    }

}

export default new AuthService();