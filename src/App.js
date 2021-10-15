import './App.css';
import img1 from '../src/images/Mobile.jpg';
import Login from './Login & Registration/Login';
import firebaseInitialize from './FireBase/Firebase-initialize';
import Register from './Login & Registration/Register';
import { useState } from 'react';


firebaseInitialize();
function App() {
  const [toogle, setToggle] = useState(false);
  console.log(toogle)
  return (
    <div className="App">
      <div className="row">
        <div className="login-area col-md-6">
          {
            toogle ? <Login></Login> : <Register></Register>
          }

          {
            toogle ? <p onClick={() => { setToggle(false) }} className='text-success pointer'>Are you new? Please Register.</p> :
              <p onClick={() => { setToggle(true) }} className='text-success pointer'>Already have an account?</p>
          }
        </div>
        <div className="col-md-6">
          <div className="img">
            <img className='image-fluid w-100' src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
