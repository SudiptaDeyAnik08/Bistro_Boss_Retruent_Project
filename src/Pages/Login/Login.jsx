import React, { useEffect, useRef, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

function Login() {
  const capthcaRef = useRef(null);
  const [allowLogin, setAllowLogin] = useState(true)
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
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleLogin} className="card-body">
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

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" ref={capthcaRef} placeholder="Type the Text Above" name="Captcha" className="input input-bordered" required />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>


            <div className="form-control mt-6">
              <input disabled={allowLogin} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
