import React from 'react'
import './Header.css'
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const openmenu=()=>{
    dispatch({type:"CHANGEOPENMENU",value:true})
  }
  return (
    <div id='Header'>
        <div id='leftHeader'>
            <h2><a href='/'>Mobile Shop</a></h2>
            <h3 id='HLHF' className='thisPage'><a href='/'>Home</a> <div className='kuft'></div></h3>
            <h3>Collections</h3>
            <h3>Blog</h3>
            <h3>Categorys</h3>
            <div id='mobileRightHeader'>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-bars" aria-hidden="true" onClick={openmenu}></i>
            </div>
        </div>
        <div id='rightHeader'>
            <a id='login' className='headerLink'>Log In</a>
            <a id='signup' className='headerLink'>Sign Up</a>
            <a href='/cart'><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
            <i class="fa fa-search" aria-hidden="true"></i>

        </div>
    </div>
  )
}

export default Header