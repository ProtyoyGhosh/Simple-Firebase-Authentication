import './App.css';
import img1 from '../src/images/Mobile.jpg';
import Login from './Login & Registration/Login';
import firebaseInitialize from './FireBase/Firebase-initialize';


firebaseInitialize();
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="login-area col-md-6">

          <Login></Login>

          <p className='text-success'>Are you new? Please Register.</p>
          <p className='text-success'>Already have an account?</p>
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
