import React, { useState } from 'react';
import firebaseInitialize from '../FireBase/Firebase-initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";


firebaseInitialize();
const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    Name: displayName,
                    Email: email,
                    Photo: photoURL
                }
                setUser(userInfo);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    Name: displayName,
                    Email: email,
                    Photo: photoURL
                }
                setUser(userInfo);
                setError('')
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    Name: displayName,
                    Email: email,
                    Photo: photoURL
                }
                setUser(userInfo);
            })
    }

    return (
        <div className='m-2'>
            <h1 className='text-success fw-bolder mt-3'>Please Login</h1>
            {user.Email && <h5><small className='text-danger'>Welcome: {user?.Name}</small></h5>}
            <form onSubmit={handleLogin} className='m-5'>
                <p className='text-danger'>{error}</p>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='please enter your email' />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='please enter your password' />
                </div>
                <button type="submit" class="btn btn-success">Login</button>
            </form>
            <div className='p-3'>
                <button onClick={signInWithGoogle} type="submit" class="btn btn-success me-3">Sign In with Google</button>
                <button onClick={signInWithGithub} type="submit" class="btn btn-success me-3">Sign In with Github</button>
                <br />
                <button type="submit" class="btn btn-danger me-3 mt-3">Password Reset</button>

            </div>
        </div>
    );
};

export default Login;