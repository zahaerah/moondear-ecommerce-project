import React from 'react';
import './cart.css';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Cart = ({cart, setCart}) => {
    //increase qty
    const incqty = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} :curElm
        }))
    }
    //decrease qty
    const decqty = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} :curElm
        }))
    }
    //remove cart product
    const removeproduct = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) =>
            {
                return x.id !== product.id
            }))
        }
    }
    //total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0).toFixed(2);
  return (
    <>
    <div className='cartcontainer'>
        {
            cart.length === 0 &&
            <div className='emptycart'>
                <h2 className='empty'>Cart is Empty</h2>
                <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
        }
        <div className='contant'>
            {
                cart.map((curElm) =>
                {
                    const Subtotal = (curElm.Price * curElm.qty).toFixed(2);
                    return(
                        <div className='cart_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{curElm.Type}</h4>
                                    <h3>{curElm.Title}</h3>
                                    <p>RM {curElm.Price}</p>
                                    <div className='qty'>
                                        <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                        <input type='text' value={curElm.qty}></input>
                                        <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                                    </div>
                                    <h4 className='subtotal'>Subtotal : RM {Subtotal}</h4>
                                </div>
                                <div className='close'>
                                    <button onClick={() => removeproduct(curElm)}><IoClose /></button>
                                </div> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>Total : RM {Totalprice}</h2>
            <button className='checkoutbtn'>Checkout</button>
            </>
        }       
    </div>
    </>
  )
}

export default Cart