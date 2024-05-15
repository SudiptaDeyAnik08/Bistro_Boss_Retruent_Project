import React, { useContext } from 'react'
import bg from '../../assets/login/bg.png';
import authentication from '../../assets/others/authentication.gif';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'



function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const form2 = location.state?.from?.pathname || '/login'
    // const {
    //     register,
    //     handleSubmit,

    //     formState: { errors },
    //   } = useForm()

    //   const onSubmit = (data) => console.log(data)



    const { createUser, updateUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;

        console.log(email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;

                console.log("USDfssafd", user)
                updateUser(name, photoURL)
                    .then(() => {
                        // This sweet is for Successfully creating a user
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Has Created",
                            showConfirmButton: true,
                            timer: 5000
                        });
                        
                    })

                    navigate(form2,{replace:true})
                })
                .catch(e => {

                    console.log(e)
                    // this sweet2 alert is for not updating the user
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })

        event.target.reset();
    }
    return (

        <div className="hero min-h-screen bg-base-200" style={{ background: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-center">
                    <h1 className="text-5xl font-bold  pb-5 ">SignUp now!</h1>
                    <img src={authentication} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body pb-0">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="http://example.com" name="photoURL" className="input input-bordered" required />
                        </div>
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

                        <div className="form-control mt-3">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>

                    <p className='text-yellow-500	 font-medium	text-base text-center pt-2 pb-5'><small>Already registered? <Link to='/login'>Go to log in</Link> </small></p>


                </div>
            </div>
        </div>
    )
}

export default SignUp
