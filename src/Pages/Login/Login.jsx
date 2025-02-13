import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FirebaseAuth } from "../../Services/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const Login = () => {
    const { GoogleSignIn, GithubSignIn, Login, User, reUpdate } = useContext(FirebaseAuth)
    const location = useLocation()
    const navigate = useNavigate()

    const HandleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

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
                title: "User Already Signed In"
            });
        }
        else {
            Login(email, password)
                .then((user) => {
                    reUpdate()
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
                        title: "Signed in successfully"
                    });
                    navigate(location?.state ? location.state : '/')
                    e.target.reset()
                })
                .catch((error) => {
                    console.log(error)
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
                        title: "Invalid Email/Password"
                    });
                    e.target.reset()
                })
        }
    }

    // Google Sign in
    const SignInWithGoogle = () => {
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
                title: "User Already Signed In"
            });
        }
        else {
            GoogleSignIn()
                .then(() => {
                    reUpdate()
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
                        title: "Signed in successfully"
                    });
                    navigate(location?.state ? location.state : '/')
                })
                .catch(error => console.log(error))
        }
    }

    // Github Sign In
    const SignInWithGithub = () => {
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
                title: "User Already Signed In"
            });
        }
        else {
            GithubSignIn()
                .then(() => {
                    reUpdate()
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
                        title: "Signed in successfully"
                    });
                    navigate(location?.state ? location.state : '/')
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='flex justify-center mt-10 h-auto px-5'>
            <div className='p-7 rounded-md border-2 border-blue-600 w-full sm:max-w-xl'>
                <h2 className='text-4xl text-center font-bold'>Sign In</h2>
                <div>
                    <form className='mt-5' onSubmit={HandleLogin}>
                        <div className='flex flex-col gap-3'>
                            <input type="email" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your email' name='email' required />
                            <input type="password" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your password' name='password' required />
                            <button className='btn bg-blue-600 hover:bg-blue-700 duration-500 text-white font-semibold mt-2'>Login</button>
                        </div>
                    </form>
                    {/* social login */}
                    <div className='my-5 flex gap-2 items-center justify-center'>
                        <div className='bg-gray-100 btn w-1/2' onClick={SignInWithGoogle}>
                            <FaGoogle className='text-3xl text-green-600' />
                        </div>
                        <div className='bg-gray-100 btn w-1/2' onClick={SignInWithGithub}>
                            <FaGithub className='text-3xl text-violet-600' />
                        </div>
                    </div>
                </div>
                <p className="text-center">Haven't any account? please <Link to={'/register'} className='underline text-blue-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;