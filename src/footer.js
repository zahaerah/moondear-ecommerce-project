import React from 'react';
import './footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/moondear_logo.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Whatever touches the skin must be pure. Let us deliver you the best skincare.</p>
                    <div className='icon'>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>    
                        <li><FaTwitter /></li>    
                        <li><FaYoutube /></li>       
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer