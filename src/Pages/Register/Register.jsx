import { Link } from "react-router-dom";

const Register = () => {
    const HandleRegister = (e) => {

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