import React,{useState,useEffect} from 'react'
import './cart.css'
const Cart = () => {
    const devices =[
        {
            model:'Iphone XS max 2022',
            rate:4.1,
            brand:'Apple',
            price:990,
            imageAddress:'iphoneX.png',
            Capacities:'128GB',
            id:'XS_max_2022',
            number:1
          },
          {
            model:'Iphone 13 pro max 2022',
            rate:4.9,
            brand:'Apple',
            price:880,
            imageAddress:'iphoneX.png',
            Capacities:'256GB',
            id:'13_pro_max',
            number:1
          },
          {
            model:'Iphone X 2021',
            rate:3.9,
            brand:'Apple',
            price:770,
            imageAddress:'iphoneX.png',
            Capacities:'512GB',
            id:'X_2021',
            number:1
          }
    ]

    const [AllPrice,SetAllPrice]=useState(0)

    useEffect(()=>{
      let a=0
      for(let i=0;i<devices.length;i++){
        a=a+devices[i].price
      }
      SetAllPrice(a)
    },[])

  return (
    <div id='Cart'>
        <div id='leftCart'>
            <div className='LCODiv LCOSelected'><i class="fa fa-shopping-bag LCOSelected1" aria-hidden="true"></i></div>
            <div className='LCOSeprator LCOSelected'></div>
            <div className='LCODiv'><i class="fa fa-cc-visa" aria-hidden="true"></i></div>
            <div className='LCOSeprator'></div>
            <div className='LCODiv'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
        </div>
        <div id='rightCart'>
          {
            devices.map((item,index)=>{
              return(
                <div className='cartProductDiv'>
                    <img src={'../'+item.imageAddress}></img>
                    <div className='CPDescription'>
                      <h1>{item.model}</h1>
                      <p className='CPCS'>storage</p>
                      <p className='CPCC'>{item.Capacities}</p>
                    </div>
                    <div className='CPNumber'>
                      <div className='minus'><i class="fa fa-minus" aria-hidden="true"></i></div>
                      <p>{item.number}</p>
                      <div className='plus'><i class="fa fa-plus" aria-hidden="true"></i></div>
                    </div>
                    <div className='CPPrice'>${item.price}</div>
                    <div id='seprator' className='JM'></div>
                </div>
              )
            })
          }
          <div id='sendToBox' className='JM'>
          <i class="fa fa-location-arrow" aria-hidden="true"></i>

            <p>send to {'tehran'}</p>
          </div>
          <div id='checkout'>
            <p>Total Ammount</p>
            <p id='CPShowPrice'>${AllPrice}</p>
            <button>Checkout Now</button>
          </div>
        </div>
    </div>
  )
}

export default Cart