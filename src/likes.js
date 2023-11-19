import React from 'react';
import './likes.css';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Likes = ({likes, setLikes}) => {
    //remove likes product
    const removeproduct = (product) =>
    {
        const exsit = likes.find((x) =>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setLikes(likes.filter((x) =>
            {
                return x.id !== product.id
            }))
        }
    }
  return (
    <>
    <div className='likescontainer'>
        {
            likes.length === 0 &&
            <div className='emptylikes'>
                <h2 className='empty'>No Likes Item</h2>
                <Link to='/product' className='emptylikesbtn'>Shop Now</Link>
            </div>
        }
        <div className='contant'>
            {
                likes.map((curElm) =>
                {
                    return(
                        <div className='likes_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{curElm.Type}</h4>
                                    <h3>{curElm.Title}</h3>
                                    <p>RM {curElm.Price}</p>
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
    </div>
    </>
  )
}

export default Likes