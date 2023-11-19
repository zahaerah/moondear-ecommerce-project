import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { BiSolidTruck } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Nav = ({searchbtn}) => {
    const [ searchString, setSearchString] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
        <div className='icon'>
            <BiSolidTruck />
        </div>
        <p>Free Shipping when shopping up to RM100</p>
    </div>
    <div className='logo'>
        <Link to="/" className='link'><img src='./img/moondear_logo.svg' alt='logo'></img></Link>
    </div>
    <div className='name'>
        <p>moondear</p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='search_box'>
                <input type='text' value={searchString} placeholder='Enter The Product Name' autoComplete='off' onChange={(e) => setSearchString(e.target.value)}/>
                <button onClick={() => searchbtn(searchString)}>Search</button>

                {/* <button onClick={() => searchbtn (searchString)}>Search</button> */}
            </div>
            <div className='icons'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                            <div className='user_icon'>
                                <AiOutlineUser />
                            </div>
                            <p>Hello, {user.name}</p>
                        </div>
                    )
                }
                <div className='sec_icon'>
                    <Link to="/likes" className='link'><AiOutlineHeart /></Link>
                    <Link to="/cart" className='link'><BsBag /></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                </ul>
            </div>
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoIosLogOut /></button>
                    :
                    <button onClick={() => loginWithRedirect()}><IoIosLogIn /></button>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav