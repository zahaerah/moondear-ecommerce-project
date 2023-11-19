import React, { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  //liked item
  const [ likes, setLikes] = useState([])
  //add to cart
  const [ cart, setCart ] = useState([])
  //product detail
  const [ close, setClose ] = useState(false)
  const [ detail, setdetail ] = useState([])

  //product filter
  const [ product, setProduct ] =useState(Productdetail)

  const searchbtn = (product) => {
    const lowercasedSearch = product.toLowerCase();
  
    // Filter the products based on the case-insensitive search string
    const filteredProducts = Productdetail.filter((product) => {
      // Concatenate relevant fields into a single string for search
      const productDetailsString = `${product.Title} ${product.Price} ${product.Type}`.toLowerCase();
      
      return productDetailsString.includes(lowercasedSearch);
    });
  
    // Update the state with the filtered products
    setProduct(filteredProducts);
  };
  //product detail
  const view = (product) =>
  {
    setdetail([{...product}])
    setClose(true)
  }
  //add to cart
  const addtocart = (product) =>
  {
    const exsit = cart.find((x) =>
    {
      return x.id === product.id
    })

    if(exsit)
    {
      alert("This Product already added to cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("The product is added to cart")
    }
  }
  // console.log(cart)
  //add to likes
  const addtolikes = (product) =>
  {
    const exsit = likes.find((x) =>
    {
      return x.id === product.id
    })

    if(exsit)
    {
      alert("This Product already liked")
    }
    else
    {
      setLikes([...likes, {...product, qty:1}])
      alert("The product is liked")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} likes={likes} setLikes={setLikes} addtolikes={addtolikes}/>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App