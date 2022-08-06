import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import './product.css'
const Product = (props) => {

  const States = useSelector(state => state);
  const dispatch = useDispatch();

    let devices=[{
        model:'Iphone XS max 2022',
        rate:4.1,
        brand:'Apple',
        price:990,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'XS_max_2022'
      },
      {
        model:'Iphone 13 pro max 2022',
        rate:4.9,
        brand:'Apple',
        price:880,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'13_pro_max'
      },
      {
        model:'Iphone X 2021',
        rate:3.9,
        brand:'Apple',
        price:770,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'X_2021'
      },
      {
        model:'Poco M4 pro',
        rate:3.7,
        brand:'Xiaomi',
        price:220,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Poco_M4'
      },
      {
        model:'Redmi note 11 5G',
        rate:4.2,
        brand:'Xiaomi',
        price:160,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Redmi_note_11'
      },
      {
        model:'Redmi 9T',
        rate:4,
        brand:'Xiaomi',
        price:110,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Redmi_9_t'
      },
      {
        model:'Galaxy A22',
        rate:4.4,
        brand:'Samsung',
        price:650,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'A22'
      },
      {
        model:'Galaxy A21s',
        rate:3.8,
        brand:'Samsung',
        price:470,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'A21s'
      },
      {
        model:'Galaxy A20',
        rate:4,
        brand:'Samsung',
        price:330,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'A20'
      },
      {
        model:'Nokia 1100',
        rate:5,
        brand:'Nokia',
        price:20,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Nokia_1100'
      },
      {
        model:'Nokia 6600',
        rate:3.6,
        brand:'Nokia',
        price:30,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Nokia_6600'
      },
      {
        model:'Nokia N70',
        rate:4.7,
        brand:'Nokia',
        price:40,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'Nokia_n70'
      },
      {
        model:'Huawei G610',
        rate:1.3,
        brand:'Huawei',
        price:100,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'G610'
      },
      {
        model:'Huawei P10',
        rate:3.3,
        brand:'Huawei',
        price:110,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'P10'
      },
      {
        model:'Huawei P50',
        rate:2.9,
        brand:'Huawei',
        price:220,
        imageAddress:['iphoneX.png','phone2.png','phone3.png'],
        Capacities:['128GB','256GB','512GB'],
        id:'P50'
      },]

      const [getDevice,SetDevice]=useState({})
      const [getCapacities,SetCapacities]=useState([])
      const [selectedCap,SetselectedCap]=useState(0)
      const [selectedImage,SetselectedImage]=useState(0)
      const [getImage,SetImage]=useState([])

       useEffect(()=>{
        for(let i=0;i<devices.length;i++){
            if(devices[i].id===props.match.params.id){
                SetDevice(devices[i])
                SetCapacities(devices[i].Capacities)
                SetImage(devices[i].imageAddress)
            }
        }
       },[])

       const SClick=(val,num)=>{
        SetselectedCap(num)
       }

       
       const iClick=(val,num)=>{
        SetselectedImage(num)
       }

  return (
    <div id='productDiv'>
        <div id='innerPDiv'>
            <div id='selectImageBox'>
              <div id='SIB'>

                {
                  getImage.map((item,index)=>{
                    if(index===selectedImage){
                      return(
                        <div className='PImage PImage1' onClick={()=>{iClick(item,index)}}>
                            <img src={'../'+item}></img>
                        </div>
                      )
                    }else{
                        return(
                          <div className='PImage' onClick={()=>{iClick(item,index)}}>
                              <img src={'../'+item}></img>
                          </div>
                        )
                    }
                  })
                }
              </div>

            </div>
            <img id='bigPImage' src={'../'+getImage[selectedImage]}></img>
            <div id='PDescription'>
                <h1>{getDevice.model}</h1>
                <p id='PrDesc'>this is testing description. this is testing description. this is testing description. this is testing description. this is testing description. this is testing description. this is testing description.</p>
                <div className='JM seprator'></div>
                <div id='storage'>
                    <h2>Storage</h2>
                    <div id='selectStorageBox'>
                    {getCapacities.map((item,index)=>{
                        if(index===selectedCap){
                            return(
                                <div className='PStorages PStorages1' onClick={()=>{SClick(item,index)}}>{item}</div>
                            )
                        }else{
                            return(
                                <div className='PStorages' onClick={()=>{SClick(item,index)}}>{item}</div>
                            )
                        }
                    })}
                    </div>
                </div>
                <div className='JM seprator'></div>
                
                <p id='PPrice'>${getDevice.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product