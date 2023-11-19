import React from 'react';
import Productdetail from './productdetail';
import './product.css';
import { useAuth0 } from "@auth0/auth0-react";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const Product = ({product, setProduct, detail, view, close, setClose, addtocart, addtolikes}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const filterproduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
            return x.Type === product;
        })
        setProduct(update);
    }
    const AllProducts = () =>
    {
        setProduct (Productdetail)
    }
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
                                    {
                                        isAuthenticated ? 
                                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                        :
                                        <button onClick={() => loginWithRedirect()}>Add To Cart</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
    } 
    <div className='products'>
        <h3>Products</h3>
        <p>Home . Products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Category</h3>
                    <ul>
                    <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filterproduct ("Cleanser")}>Cleanser</li>
                        <li onClick={() => filterproduct ("Toner")}>Toner</li>
                        <li onClick={() => filterproduct ("Serum")}>Serum</li>
                        <li onClick={() => filterproduct ("Moisturizer")}>Moisturizer</li>
                        <li onClick={() => filterproduct ("Sunscreen")}>Sunscreen</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm) =>
                        {
                            return(
                                <>
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtocart(curElm)}><IoCartOutline /></li>
                                                :
                                                <li onClick={() => loginWithRedirect()}><IoCartOutline /></li>
                                            }
                                            <li onClick={() => view(curElm)}><IoEyeOutline /></li>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtolikes(curElm)}><GoHeart /></li> 
                                                :
                                                <li onClick={() => loginWithRedirect()}><GoHeart /></li>
                                            }
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Type}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>RM {curElm.Price}</h4>
                                        {/* <p>{curElm.Ingredients}</p>
                                        <p>{curElm.Instructions}</p> */}
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product