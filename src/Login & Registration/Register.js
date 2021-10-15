import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseInitialize from '../FireBase/Firebase-initialize';

firebaseInitialize();
const Register = () => {
    const auth = getAuth();

    const handleEmailInput = (event) => {
        console.log(event.target.value)
    }

    const handlePasswordInput = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-success fw-bolder'>Please Register</h1>
                <h5><small></small></h5>
                <form className='m-5'>
                    <div class="mb-3">
                        <input onChange={handleEmailInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='please enter your email' />
                    </div>
                    <div class="mb-3">
                        <input onChange={handlePasswordInput} type="password" class="form-control" id="exampleInputPassword1" placeholder='please enter your password' />
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