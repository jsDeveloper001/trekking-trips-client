import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const HandleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-[15px] font-bold md:text-xl" to={'/'}>Trekking Trips</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="hover:bg-transparent"><Link to={'/'}>Home</Link></li>
                        <li className="hover:bg-transparent"><Link to={'/'}>All Tourists Spot</Link></li>
                        <li className="hover:bg-transparent"><Link to={'/'}>Add Tourists Spot</Link></li>
                        <li className="hover:bg-transparent"><Link to={'/'}>My List</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="checkbox" className="toggle toggle-sm sm:toggle-md mr-1 sm:mr-3" onChange={HandleTheme} id="themeButton" />
                    <Link className="btn btn-sm sm:btn-md  mr-1 sm:mr-3 bg-blue-600 text-white hover:bg-blue-700 duration-500" to={'/login'}>Login</Link>
                    <Link className="btn btn-sm sm:btn-md bg-amber-600 text-white hover:bg-amber-700 duration-500" to={'/register'}>Register</Link>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;