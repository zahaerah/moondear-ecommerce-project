import React from 'react';
import './home.css';
import Homeproduct from './homeproduct';
import { BrowserRouter, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { BsTruck } from 'react-icons/bs';
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const Home = ({detail, view, close, setClose, addtocart, addtolikes}) => {
  return (
    <>
        {
        close ? 
        <div className='product_detail'>
            <div className='container'>
                <button onClick={() => setClose(false)} className='closebtn'><IoClose /></button>
                {
                    detail.map((curElm) =>
                    {
                        return(
                            <div className='product_box'>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Type}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>{curElm.Ingredients}</p>
                                    <p>{curElm.Instructions}</p>
                                    <p>{curElm.Size}</p>
                                    <h3>RM {curElm.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
    } 
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>Best Seller of the Month</h2>
                <Link to='product' className='link'>Shop Now <HiArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/skin1004-amp.png' alt='skin1004-ampimg'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                 <div className='img_box'>
                    <img src='./img/prod_type/cleanser.png' alt='cosrx-gelcleanser'></img>
                 </div>
                 <div className='detail'>
                    <p>Cleanser</p>
                 </div>
            </div>
            <div className='box'>
                 <div className='img_box'>
                    <img src='./img/prod_type/toner.png' alt='cosrx-gelcleanser'></img>
                 </div>
                 <div className='detail'>
                    <p>Toner</p>
                 </div>
            </div>
            <div className='box'>
                 <div className='img_box'>
                    <img src='./img/prod_type/serum.png' alt='cosrx-gelcleanser'></img>
                 </div>
                 <div className='detail'>
                    <p>Serum</p>
                 </div>
            </div>
            <div className='box'>
                 <div className='img_box'>
                    <img src='./img/prod_type/moisturizer.png' alt='cosrx-gelcleanser'></img>
                 </div>
                 <div className='detail'>
                    <p>Moisturizer</p>
                 </div>
            </div>
            <div className='box'>
                 <div className='img_box'>
                    <img src='./img/prod_type/sunscreen.png' alt='cosrx-gelcleanser'></img>
                 </div>
                 <div className='detail'>
                    <p>Sunscreen</p>
                 </div>
            </div>
            
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <BsTruck />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above RM100</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar />
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On Every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <TfiHeadphoneAlt />
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) =>
                {
                    return (
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart(curElm)}><IoCartOutline /></li>
                                    <li onClick={() => view(curElm)}><IoEyeOutline /></li>
                                    <li onClick={() => addtolikes(curElm)}><GoHeart /></li>  
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Type}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>RM {curElm.Price}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
            <div className='detail'>
                <h4>LATEST BEAUTY OBSESSION</h4>
                <h3>ma:nyo Pure Cleansing Oil</h3>
                <p>RM 138.40</p>
                <Link to='/product' className='link'>Shop Now <HiArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/manyo-oil-1.png' alt='manyo-oil'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home