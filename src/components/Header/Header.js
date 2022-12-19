import React,{useState,useEffect} from 'react'
import './Header.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const States = useSelector(state => state);
  const [devices,SetDevices]=useState([])
  const [searched,SetSearched]=useState([])

  useEffect(()=>{
    const products=States.products
    SetDevices(products)
  },[])

  useEffect(()=>{
    if(searched!=[]&&searched.length>0){
      document.getElementById('searchDiv').style.display='inline-block'
    }else{
      document.getElementById('searchDiv').style.display='none'
    }
  },[searched])

  const openmenu=()=>{
    dispatch({type:"CHANGEOPENMENU",value:true})
  }

  const derazkonande1=()=>{
    document.getElementById('khat').style.marginLeft='135px'
    document.getElementById('khat').style.width='45px'
  }

  const derazkonande2=()=>{
    document.getElementById('khat').style.marginLeft='215px'
    document.getElementById('khat').style.width='95px'
  }
  
  const kutahkonande=()=>{
    document.getElementById('khat').style.marginLeft='45px'
    document.getElementById('khat').style.width='55px'
  }

  const derazkonandedo1=()=>{
    document.getElementById('khat1').style.width='55px'
    document.getElementById('khat1').style.marginLeft='45px'
  }

  const derazkonandedo2=()=>{
    document.getElementById('khat1').style.marginLeft='215px'
    document.getElementById('khat1').style.width='95px'
  }

  const kutahkonandedo=()=>{
    document.getElementById('khat1').style.marginLeft='135px'
    document.getElementById('khat1').style.width='45px'
  }

  
  const derazkonandese1=()=>{
    document.getElementById('khat2').style.width='45px'
    document.getElementById('khat2').style.marginLeft='135px'
  }

  const derazkonandese2=()=>{
    document.getElementById('khat2').style.marginLeft='45px'
    document.getElementById('khat2').style.width='55px'
  }

  const kutahkonandese=()=>{
    document.getElementById('khat2').style.marginLeft='215px'
    document.getElementById('khat2').style.width='95px'
  }

  const changeSearchBox=()=>{
    const mtn=document.getElementById('searchBox').value
    const srch=[]
    if(mtn.length>0){
      for(let i=0;i<devices.length;i++){
        if(devices[i].model.toLowerCase().search(mtn.toLowerCase())>(-1)){
          srch.push(devices[i])
        }
      }
      if(srch.length>0){
        SetSearched(srch)
      }else{
        SetSearched([])
      }
    }
    else{
      SetSearched([])
    }
  }

  return (
    <div id='Header'>
        <div id='leftHeader'>
              <h2 ><a href='/'  className='title'>Mobile Shop</a></h2>
              {
                States.thisPage==='main'?
                  <div>                
                      <h3 id='HLHF' className='thisPage'><a href='/'>Home</a></h3>
                      <h3 onMouseEnter={()=>{derazkonande1()}} onMouseLeave={()=>{kutahkonande()}}><a href='/cart'>Cart</a></h3>
                      <h3 onMouseEnter={()=>{derazkonande2()}} onMouseLeave={()=>{kutahkonande()}}><a href='/dashboard'>Dashboard</a></h3>
                    <div id='khat'></div>
                  </div>
                :
                  States.thisPage==='cart'?
                  <div>                
                    <h3 id='HLHF' onMouseEnter={()=>{derazkonandedo1()}} onMouseLeave={()=>{kutahkonandedo()}}><a href='/'>Home</a></h3>
                    <h3 className='thisPage'><a href='/cart'>Cart</a></h3>
                    <h3><a href='/dashboard' onMouseEnter={()=>{derazkonandedo2()}} onMouseLeave={()=>{kutahkonandedo()}}>Dashboard</a></h3>
                  <div id='khat1'></div></div>
                :
                  States.thisPage==='dashboard'?
                  <div>                
                    <h3 id='HLHF' onMouseEnter={()=>{derazkonandese2()}} onMouseLeave={()=>{kutahkonandese()}} ><a href='/'>Home</a></h3>
                    <h3 onMouseEnter={()=>{derazkonandese1()}} onMouseLeave={()=>{kutahkonandese()}}><a href='/cart'>Cart</a></h3>
                    <h3 className='thisPage' ><a href='/dashboard'>Dashboard</a></h3>
                  <div id='khat2'></div></div>
                :
                  <div>                
                    <h3 id='HLHF'><a href='/'>Home</a></h3>
                    <h3><a href='/cart'>Cart</a></h3>
                    <h3><a href='/dashboard'>Dashboard</a></h3>
                  </div>
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
            <input type="text" id='searchBox' placeholder='search...' onChange={()=>{changeSearchBox()}}/>
            <div id='searchDiv'>
              {
                searched.map((item,index)=>{
                  return(
                    <a href={'/product/'+item.id}>
                      <img id='SDImage' src={item.imageAddress}></img>
                      <div id='rightboxSD'>
                        <p id='SDTitle'>{item.model}</p><br/>
                        <p id='SDPrice'>${item.price}</p>

                        <span class="fa fa-star checked"><p>{item.rate}</p></span>
                      </div>


                    </a>
                  )
                })
              }
            </div>

        </div>
    </div>
  )
}

export default Header