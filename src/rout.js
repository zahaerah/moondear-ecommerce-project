import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';
import Cart from './cart';
import Likes from './likes';

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, likes, setLikes, addtolikes}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtolikes={addtolikes}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtolikes={addtolikes}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/likes' element={<Likes likes={likes} setLikes={setLikes}/>} />
    </Routes>
    </>
  )
}

export default Rout