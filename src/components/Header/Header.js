import React from 'react'
import './Header.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const States = useSelector(state => state);

  const openmenu=()=>{
    dispatch({type:"CHANGEOPENMENU",value:true})
  }
  return (

    <div id='Header'>
        <div id='leftHeader'>
              {
                !States.productPage? 
                  <a href='/'><i class="fa fa-chevron-left JM" aria-hidden="true"></i></a>
                :
                  null
                }
              {
                States.productPage? 
                  <h2 ><a href='/'>Mobile Shop</a></h2>
                :
                  <h2 className='PRD'>Product</h2>
              }
            <h3 id='HLHF' className='thisPage'><a href='/'>Home</a> <div className='kuft'></div></h3>
            <h3>Collections</h3>
            <h3>Blog</h3>
            <h3>Categorys</h3>
            <div id='mobileRightHeader'>
              {
                States.productPage? 
                <div>                  
                  <a href='/cart'><i class="fa fa-shopping-cart" aria-hidden="true"><p>{States.cartPNumber}</p></i></a>
                  <i class="fa fa-bars" aria-hidden="true" onClick={openmenu}></i>
                  
                </div>

                :
                  <div>                  
                    <i class="fa fa-shopping-cart PI" aria-hidden="true"><p>{States.cartPNumber}</p></i>
                  </div>
              }
            </div>
        </div>
        <div id='rightHeader'>
            <a id='signup' className='headerLink' href='/dashboard'><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
            <a href='/cart'><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
            <i class="fa fa-search" aria-hidden="true"></i>

        </div>
    </div>
  )
}

export default Header