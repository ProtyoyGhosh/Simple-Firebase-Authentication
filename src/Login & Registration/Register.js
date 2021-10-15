import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseInitialize from '../FireBase/Firebase-initialize';

firebaseInitialize();
const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [user, setUser] = useState({});

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        if (event.target.value.length < 6) {
            console.log('baler password diso')
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
                <h1 className='text-success fw-bolder'>Please Register</h1>
                <h5><small>welcome {user?.Email}</small></h5>
                <form onSubmit={handleRegisterSubmit} className='m-5'>
                    <div class="mb-3">
                        <input onChange={handleEmailInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='please enter your email' required />
                    </div>
                    <div class="mb-3">
                        <input onChange={handlePasswordInput} type="password" class="form-control" id="exampleInputPassword1" placeholder='please enter your password' required />
                    </div>
                    <button type="submit" class="btn btn-success">Register</button>
                </form>
                {/*  <div className='p-3'>
                    <button type="submit" class="btn btn-success me-3">Sign In with Google</button>
                    <button type="submit" class="btn btn-success me-3">Sign In with Github</button>
                    <br />
                    <button type="submit" class="btn btn-danger me-3 mt-3">Password Reset</button>

                </div> */}
            </div>
        </div>
    );
};

export default Register;