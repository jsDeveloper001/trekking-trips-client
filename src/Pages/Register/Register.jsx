import { Link, useNavigate } from "react-router-dom";
import { FirebaseAuth } from "../../Services/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Services/Firebase.config";

const Register = () => {
    const { Register, User, reUpdate } = useContext(FirebaseAuth)
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const HandleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Must have an Uppercase letter")
            return
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Must have a Lowercase letter")
            return
        }
        if (password.length < 6) {
            setError("Length must be at least 6 character")
            return
        }

        if (User) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "question",
                title: "User Logged in Already. Please Log out First"
            });
        }
        else {
            Register(email, password)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: image
                    })
                        .then(() => {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                            Toast.fire({
                                icon: "success",
                                title: "Register and Signed in successfully"
                            });
                            navigate('/')
                            reUpdate()
                            e.target.reset()
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch(error => {
                    console.log(error)
                    setError("try with anther email")
                })
        }
    }
    return (
        <div className='flex justify-center mt-10 h-auto px-5'>
            <div className='border-2 border-blue-600 w-full sm:max-w-xl p-7 rounded-md'>
                <h2 className='text-4xl text-center font-bold'>Sign Up</h2>
                <div>
                    <form className='mt-5' onSubmit={HandleRegister}>
                        <div className='flex flex-col gap-3'>
                            <input type="text" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter your Name' name='name' required />
                            <input type="email" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter your Email' name='email' required />
                            <input type="url" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter your Profile Pic URL' name='image' />
                            <div className='relative'>
                                <input type={showPass ? "text" : "password"} className='bg-transparent w-full border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your password' name='password' required />
                                <span className='absolute right-2 top-4 hover:cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <button className='btn bg-amber-600 text-white hover:bg-amber-700 duration-500 font-semibold mt-2'>Register</button>
                        </div>
                    </form>
                </div>
                <p className='mt-5 text-center'>Already an have Account? please <Link to={'/login'} className='underline text-blue-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;