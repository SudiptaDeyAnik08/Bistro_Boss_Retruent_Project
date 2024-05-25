import React, { useEffect, useRef, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

import bg from '../../assets/login/bg.png';
import authentication from '../../assets/login/authentication2.png';

function Login() {
  const capthcaRef = useRef(null);
  const [allowLogin, setAllowLogin] = useState(true);
  const { signIn } = useContext(AuthContext);
  

  const navigate = useNavigate();
  const location = useLocation();
  const from1 = location.state?.from?.pathname || '/'
  

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, [])

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = capthcaRef.current.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      alert('Captcha Matched');
      setAllowLogin(false)
    }
    else {
      alert('Captcha Does Not Match');
    }
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Has Loged In",
          showConfirmButton: false,
          timer: 5000
        });

        event.target.reset();

        navigate(from1,{replace:true});

      })
      .catch(e=>{
        console.log(e)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
      })
      
  }

  return (
      <div className="hero min-h-screen bg-base-200" style={{background:`url(${bg})`}}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={authentication} alt="" />          
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleLogin} className="card-body pb-0">
          <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />

            </div>

            <div className="form-control ">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" ref={capthcaRef} placeholder="Type the Text Above" name="Captcha" className="input input-bordered" required />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>


            <div className="form-control mt-3">
              <button disabled={allowLogin} className="btn btn-primary" type="submit"  >Login </button>
            </div>
          </form>

          <p className='text-yellow-500	 font-medium	text-base text-center pt-2 pb-5'><small>New Here ....? <Link to='/signup'>Create an Account</Link> </small></p>


        </div>
      </div>
    </div>
  )
}

export default Login
