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
                  <h2 ><a href='/'  className='title'>Mobile Shop</a></h2>
                
              {
                States.thisPage==='main'?
                <div>                
                  <h3 id='HLHF' className='thisPage'><a href='/'>Home</a></h3>
                  <h3><a href='/cart'>Cart</a></h3>
                  <h3><a href='/dashboard'>Dashboard</a></h3></div>
                :
                  States.thisPage==='cart'?
                  <div>                
                  <h3 id='HLHF'><a href='/'>Home</a></h3>
                  <h3 className='thisPage'><a href='/cart'>Cart</a></h3>
                  <h3><a href='/dashboard'>Dashboard</a></h3></div>
                :
                  States.thisPage==='dashboard'?
                  <div>                
                  <h3 id='HLHF'><a href='/'>Home</a></h3>
                  <h3><a href='/cart'>Cart</a></h3>
                  <h3 className='thisPage'><a href='/dashboard'>Dashboard</a></h3></div>
                :
                  <div>                
                  <h3 id='HLHF'><a href='/'>Home</a></h3>
                  <h3><a href='/cart'>Cart</a></h3>
                  <h3><a href='/dashboard'>Dashboard</a></h3></div>
              }

            <div id='mobileRightHeader'>
              {
                States.productPage? 
                <div>                  
                  <a href='/cart'><i class="fa fa-shopping-cart" aria-hidden="true"><p>{States.cartPNumber}</p></i></a>
                  <a id='signup' className='headerLink' href='/dashboard'><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                  <i class="fa fa-bars" aria-hidden="true" onClick={openmenu}></i>
                  
                </div>
                :
                  <div className='PI'>                  
                    <a id='signup' className='headerLink ' href='/cart'><i class="fa fa-shopping-cart " aria-hidden="true"><p>{States.cartPNumber}</p></i></a>
                    <a id='signup' className='headerLink ' href='/dashboard'><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
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