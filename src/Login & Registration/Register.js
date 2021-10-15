import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, /* signInWithEmailAndPassword  */ } from "firebase/auth";
import firebaseInitialize from '../FireBase/Firebase-initialize';

firebaseInitialize();
const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        if (event.target.value.length < 6) {
            console.error('baler password diso')
        } else {
            setPassord(event.target.value)
        }
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user)
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    Name: displayName,
                    Email: email,
                    Photo: photoURL
                }
                setUser(userInfo);
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-success fw-bolder mt-5'>Please Register</h1>
                {user.Email && <h5><small className='text-danger'>Thank You {user?.Email} for Registering</small></h5>}
                <form onSubmit={handleRegisterSubmit} className='m-5'>
                    <div class="mb-3">
                        <input onChange={handleEmailInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='please enter your email' required />
                    </div>
                    <div class="mb-3">
                        <input onChange={handlePasswordInput} type="password" class="form-control" id="exampleInputPassword1" placeholder='please enter your password' required />
                    </div>
                    <button type="submit" class="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;