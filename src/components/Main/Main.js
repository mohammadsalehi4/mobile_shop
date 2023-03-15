import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import './main.css'
const Main = () => {

  const States = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:"CHANGEPRODUCTPAGE",value:true})

  },[])
  let devices=[{
    model:'Iphone XS max 2022',
    rate:4.1,
    brand:'Apple',
    price:990,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'XS_max_2022'
  },
  {
    model:'Iphone 13 pro max 2022',
    rate:4.9,
    brand:'Apple',
    price:880,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'13_pro_max'
  },
  {
    model:'Iphone X 2021',
    rate:3.9,
    brand:'Apple',
    price:770,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'X_2021'
  },
  {
    model:'Poco M4 pro',
    rate:3.7,
    brand:'Xiaomi',
    price:220,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Poco_M4'
  },
  {
    model:'Redmi note 11 5G',
    rate:4.2,
    brand:'Xiaomi',
    price:160,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Redmi_note_11'
  },
  {
    model:'Redmi 9T',
    rate:4,
    brand:'Xiaomi',
    price:110,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Redmi_9_t'
  },
  {
    model:'Galaxy A22',
    rate:4.4,
    brand:'Samsung',
    price:650,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'A22'
  },
  {
    model:'Galaxy A21s',
    rate:3.8,
    brand:'Samsung',
    price:470,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'A21s'
  },
  {
    model:'Galaxy A20',
    rate:4,
    brand:'Samsung',
    price:330,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'A20'
  },
  {
    model:'Nokia 1100',
    rate:5,
    brand:'Nokia',
    price:20,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Nokia_1100'
  },
  {
    model:'Nokia 6600',
    rate:3.6,
    brand:'Nokia',
    price:30,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Nokia_6600'
  },
  {
    model:'Nokia N70',
    rate:4.7,
    brand:'Nokia',
    price:40,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'Nokia_n70'
  },
  {
    model:'Huawei G610',
    rate:1.3,
    brand:'Huawei',
    price:100,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'G610'
  },
  {
    model:'Huawei P10',
    rate:3.3,
    brand:'Huawei',
    price:110,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'P10'
  },
  {
    model:'Huawei P50',
    rate:2.9,
    brand:'Huawei',
    price:220,
    imageAddress:'iphoneX.png',
    Capacities:['128GB','256GB','512GB'],
    id:'P50'
  },]

  const HeaderDetails=[
    {
      title:'New Experience Iphone 2022',
      content:'Because if you understand taste, you can delight people with relevant content and a meaningful experience.',
      imageAddress:'phones.png'
    },
    {
      title:'New Experience Samsung 2022',
      content:'Because if you understand taste, you can be stupid and buy it',
      imageAddress:'phones.png'
    },
    {
      title:'New Experience Huawei 2022',
      content:'Because if you understand taste, you can fire it',
      imageAddress:'phones.png'
    },
    {
      title:'New Experience xiaomi 2022',
      content:'Because if you understand taste, you can eat it',
      imageAddress:'phones.png'
    },
  ]

  const [minPrice,SetMinPrice]=useState(0)
  const [maxPrice,SetMaxPrice]=useState(999)
  const[ShowDevice,SetShowDevice]=useState(devices)
  const[MainShowDevice,SetMainShowDevice]=useState(ShowDevice)
  const[brandFilter,SetbrandFilter]=useState([])
  const[rateFilter,SetrateFilter]=useState([])
  const [topBoxPage,SettopBoxPage]=useState(0)
  const [sortBy,SetSortBy]=useState(1)
  const [sortMenu,SetSortMenu]=useState(false)

  const nextTopPage=(side)=>{
    const all=HeaderDetails.length
    if(side===true){
      const getPageNum=topBoxPage
      if(getPageNum<=all-2){
        SettopBoxPage(getPageNum+1)
      }else{
        SettopBoxPage(0)
      }
    }else{
      const getPageNum=topBoxPage
      if(getPageNum>=1){
        SettopBoxPage(getPageNum-1)
      }else{
        SettopBoxPage(all-1)
      }
    }
  }

  const setminPrice=(newPrice,index)=>{
    if(newPrice<maxPrice){
      SetMinPrice(newPrice)
    }
  }

  const setmaxPrice=(newPrice,index)=>{
      if(newPrice>minPrice){
        SetMaxPrice(newPrice)
      }
  }

  useEffect(()=>{
    if(maxPrice<minPrice){
      SetMaxPrice(minPrice)
    }
    if(minPrice>maxPrice){
      setminPrice(maxPrice)
    }
  },[maxPrice,minPrice])

  const changeStart=(val,Cid)=>{
    if(document.getElementById(Cid).checked){
      SetrateFilter(rateFilter => [...rateFilter,val] );
    }else{
      const filteredArray = rateFilter.filter(function(e) { return e !== val })
      SetrateFilter(filteredArray)
    }
  }

  const changeBrand=(val,Cid)=>{
    if(document.getElementById(Cid).checked){
      SetbrandFilter(brandFilter => [...brandFilter,val] );
    }else{
      const filteredArray = brandFilter.filter(function(e) { return e !== val })
      SetbrandFilter(filteredArray)
    }
  }

  const Apply=()=>{
    dispatch({type:"CHANGEMAX",value:maxPrice})
    dispatch({type:"CHANGEMIN",value:minPrice})
  }

  useEffect(()=>{
    let ShowDevice1=[]
    if(brandFilter.length===0){
      for(let i=0;i<devices.length;i++){
        ShowDevice1.push(devices[i])
      }
    }else{
      for(let i=0;i<brandFilter.length;i++){
        for(let j=0;j<devices.length;j++){
          if(devices[j].brand===brandFilter[i]){
            ShowDevice1.push(devices[j])
          }
        }
      }
    }

    let ShowDevice2=[]
    if(rateFilter.length===0){
      ShowDevice2=ShowDevice1
    }else{
      for(let i=0;i<rateFilter.length;i++){
        for(let j=0;j<ShowDevice1.length;j++){
          const newRate=Math.floor(ShowDevice1[j].rate)
          if(newRate===rateFilter[i]-1){
            ShowDevice2.push(ShowDevice1[j])
          }else if(newRate===5&&rateFilter[i]===5){
            ShowDevice2.push(ShowDevice1[j])
          }
        }
      }
    }
    

    let ShowDevice3=[]
    for(let i=0;i<ShowDevice2.length;i++){
      if(ShowDevice2[i].price>=States.SelectedMin&&ShowDevice2[i].price<=States.SelectedMax){
        ShowDevice3.push(ShowDevice2[i])
      }
    }
    SetShowDevice(ShowDevice3)
  },[brandFilter,rateFilter,States.SelectedMin,States.SelectedMax])

  const closeMenu=()=>{
    dispatch({type:"CHANGEOPENMENU",value:false})
  }

  useEffect(()=>{
    if(States.openMenu===false){
      document.getElementById('hidder').style.display='none'
      document.getElementById("mobileMMenu").style.transform = "translate(40%,0px)";
    }
    if(States.openMenu===true){
      document.getElementById('hidder').style.display='block'
      document.getElementById("mobileMMenu").style.transform = "translate(-100%,0px)";

    }
  },[States.openMenu])

  let touchstartX = 0
  let touchendX = 0
  function checkDirection() {
    if (touchendX < touchstartX) {
      nextTopPage(true)
    }
    if (touchendX > touchstartX) {
      nextTopPage(false)
    }
  }

  const touchstart=(e)=>{
    touchstartX = e.changedTouches[0].screenX
  }
  const touchend=(e)=>{
    touchendX = e.changedTouches[0].screenX
    checkDirection()
  }

  useEffect(()=>{
    dispatch({type:"CHANGEPAGE",value:'main'})
    sortFunction(1)
  },[])

  const sortFunction=(sortBy)=>{
    let sorted=ShowDevice
    if(sortBy===1){
      for(let i=0;i<sorted.length;i++){
        let a=sorted[i]
        let b=i
        for(let j=i+1;j<sorted.length;j++){
          if(sorted[j].price>a.price){
            b=j
            a=sorted[j]
          }
        }
        sorted[b]=sorted[i]
        sorted[i]=a
      }
      SetSortBy(1)
      SetShowDevice(sorted)
    }
    else if(sortBy===2){
      for(let i=0;i<sorted.length;i++){
        let a=sorted[i]
        let b=i
        for(let j=i+1;j<sorted.length;j++){
          if(sorted[j].price<a.price){
            b=j
            a=sorted[j]
          }
        }
        sorted[b]=sorted[i]
        sorted[i]=a
      }
      SetSortBy(2)
      SetShowDevice(sorted)
    }
    else{
      for(let i=0;i<sorted.length;i++){
        let a=sorted[i]
        let b=i
        for(let j=i+1;j<sorted.length;j++){
          if(sorted[j].rate>a.rate){
            b=j
            a=sorted[j]
          }
        }
        sorted[b]=sorted[i]
        sorted[i]=a
      }
      SetSortBy(3)
      SetShowDevice(sorted)
    }
  }

  useEffect(()=>{
    SetMainShowDevice(ShowDevice)
  },[ShowDevice])

  useEffect(()=>{
    if(sortMenu===true){
      document.getElementById("sortMenu").style.transform = "translate(0px,-250px)";
    }else{
      document.getElementById("sortMenu").style.transform = "translate(0px,0px)";
    }
  },[sortMenu])

  const openmenu=()=>{
    dispatch({type:"CHANGEOPENMENU",value:true})
  }
  
    return (
      <div id='mainDiv' >
        <div id='topMainBox' onTouchStart={(event)=>{touchstart(event)}} onTouchEnd={(event)=>{touchend(event)}}>
          <i class="fa fa-chevron-left Arrow leftArrow" aria-hidden="true" onClick={()=>{nextTopPage(false)}}></i>
            <div id='maintopmainbox'>
                <img id='topMainImage' src={HeaderDetails[topBoxPage].imageAddress} ></img>
                <div id='topMainDescription' >
                  <h1>
                    {HeaderDetails[topBoxPage].title}
                  </h1>
                  <p>
                    {HeaderDetails[topBoxPage].content}
                  </p>
                  <a>Show more</a>
                  <div id='pager'>
                  {
                    HeaderDetails.map((item,index)=>{
                      if(index===topBoxPage){return(
                        <div id='page1' className='pages selectedPage'></div>
                      )}
                      else{
                        return(
                          <div id='page1' className='pages'></div>
                        )
                      }
                    })
                  }
                  </div>
              </div>

            </div>
          <i class="fa fa-chevron-right Arrow rightArrow" aria-hidden="true" onClick={()=>{nextTopPage(true)}}></i>
        </div>
  
        <div id='bottomLeftMainDiv'>
          <h1>Price</h1>
          <div class="range-input">
            <div></div>
            <input type="range" id='range-min' className="range-max" min="0" onChange={()=>{
                setminPrice(document.getElementById('range-min').value,1); 
              }} 
              value={minPrice}
              max="1000" />
            <input type="range" id='range-max' className="range-max" min="0" onChange={()=>{setmaxPrice(document.getElementById('range-max').value,2);}} max="1000" value={maxPrice}/>
          </div>
          <div id='MinDiv' className='setPriceDiv'>
            <p>min</p>
            <div>${minPrice}</div>
          </div>
          <div id='seprator'></div>
          <div id='MaxDiv' className='setPriceDiv'>
            <p>Max</p>
            <div>${maxPrice}</div>
          </div>
          <button onClick={Apply}>Apply</button>
        </div>
  
        <div id='leftCheckboxDiv'>
          <h1>Brand</h1>
          <div>
            <input onClick={()=>{changeBrand('Samsung','Samsung')}} type="checkbox" id="Samsung" name="Samsung" value="Bike"></input>
            <label for="Samsung">Samsung<p>+20</p></label><br/>
            
          </div>
  
          <div>
            <input onClick={()=>{changeBrand('Apple','Apple')}} type="checkbox" id="Apple" name="Apple" value="Bike"/>
            <label for="Apple">Apple<p>+30</p></label><br/>
            
          </div>
  
          <div>
            <input onClick={()=>{changeBrand('Huawei','Huawei')}} type="checkbox" id="Huawei" name="Huawei" value="Bike"/>
            <label for="Huawei">Huawei<p>+20</p></label><br/>
            
          </div>
  
          <div>
            <input onClick={()=>{changeBrand('Xiaomi','Xiaomi')}} type="checkbox" id="Xiaomi" name="xiaomi" value="Bike"/>
            <label for="Xiaomi">Xiaomi<p>+10</p></label><br/>
            
          </div>
  
          <div>
            <input onClick={()=>{changeBrand('Nokia','Nokia')}} type="checkbox" id="Nokia" name="Nokia" value="Bike"/>
            <label for="Nokia">Nokia<p>+10</p></label><br/>
            
          </div>
          
          
  
        </div>
  
        <div id='leftRatingDiv'>
          <h1>Rating</h1>
          <div id='Star5' className='rateStars'>
            <input onClick={()=>{changeStart(5,'Star55')}} type="checkbox" id="Star55" name="Star55" value="Star55"/>
            <label for="Star55">
              <span class="fa fa-star checked Star55"></span>
              <span class="fa fa-star checked Star55"></span>
              <span class="fa fa-star checked Star55"></span>
              <span class="fa fa-star checked Star55"></span>
              <span class="fa fa-star checked Star55"></span>
            </label>
          </div>
          <div id='Star4' className='rateStars'>
            <input onClick={()=>{changeStart(4,'Star44')}} type="checkbox" id="Star44" name="Star44" value="Star44"/>
            <label for="Star44">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </label>
          </div>
          <div id='Star3' className='rateStars'>
            <input onClick={()=>{changeStart(3,'Star33')}} type="checkbox" id="Star33" name="Star33" value="Star33"/>
            <label for="Star33">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
            </label>
          </div>
          <div id='Star2' className='rateStars'>
            <input onClick={()=>{changeStart(2,'Star22')}} type="checkbox" id="Star22" name="Star22" value="Star22"/>
            <label for="Star22">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
            </label>
          </div>
        </div>

        <div id='Mobile'>
          <div id='sortBox'>
            <i class="fa fa-list" aria-hidden="true" onClick={()=>{SetSortMenu(true)}}></i>

              {
                sortBy===1 ? 
                  <p className='JM' id='showSortTop' onClick={()=>{SetSortMenu(true)}}>high price</p>
                :
                  sortBy===2 ?
                    <p className='JM' id='showSortTop' onClick={()=>{SetSortMenu(true)}}>low price</p>
                :
                  <p className='JM' id='showSortTop' onClick={()=>{SetSortMenu(true)}}>rate</p>
              }


            <p className='JD'>sort By:</p>
            {
              sortBy===1 ?
              <div className='JD'>
                <p className='option selected' onClick={()=>{sortFunction(1)}}>High Price</p>
                <p className='option' onClick={()=>{sortFunction(2)}}>Low Price</p>
                <p className='option' onClick={()=>{sortFunction(3)}}>rate</p>
              </div>
              :
                sortBy===2 ?
                <div className='JD'>
                  <p className='option' onClick={()=>{sortFunction(1)}}>High Price</p>
                  <p className='option selected' onClick={()=>{sortFunction(2)}}>Low Price</p>
                  <p className='option' onClick={()=>{sortFunction(3)}}>rate</p>
                </div>
                :
                  <div className='JD'>
                    <p className='option' onClick={()=>{sortFunction(1)}}>High Price</p>
                    <p className='option' onClick={()=>{sortFunction(2)}}>Low Price</p>
                    <p className='option selected' onClick={()=>{sortFunction(3)}}>rate</p>
                  </div>
              
            }

            <p id='priceNumber'  className='JD'>{MainShowDevice.length} product</p>

          </div>
          { 
            MainShowDevice.map((item,index)=>{
              return(
                <a href={'/product/'+item.id}>
                  <div className='mobileBox' key={index}>
                    <img className='mobileImage' src={item.imageAddress}></img>
                    <div id='mobileRightBox'>
                    <p className='mobileTitle'>{item.model}</p>
                    <p className='mobilePrice'>$ {item.price}</p>
                    <span class="fa fa-star checked"><p>{item.rate}</p></span>
                    <div class="archive"><i class="fa fa-archive" aria-hidden="true"></i><p>available in store</p></div>
                    </div>

                  </div>
                </a>
              )
            })
          }
        </div>
  

        {
          sortMenu === true ?
            <div>
              <div id='poshanande' onClick={()=>{SetSortMenu(false)}}>

              </div>

            </div>
          :
          null
        }
        <div className='JND' id='sortMenu'>
          <i class="fa fa-arrows-v" aria-hidden="true"></i>
          <p>Sort By:</p>

          <p className='optionM' onClick={()=>{sortFunction(1)}}>
            High Price
            {
              sortBy===1 ? 
                <i class="fa fa-check" aria-hidden="true"></i>
              :
                null
            }

          </p>
          <p className='optionM' onClick={()=>{sortFunction(2)}}>
            Low Price
            {
              sortBy===2 ? 
                <i class="fa fa-check" aria-hidden="true"></i>
              :
                null
            }
          </p>
          <p className='optionM' onClick={()=>{sortFunction(3)}}>
            rate
            {
              sortBy===3 ? 
                <i class="fa fa-check" aria-hidden="true"></i>
              :
                null
            }
          </p>
        </div>

        
        <div id='hidder' className='JP' onClick={closeMenu}></div>

        <div id='mainMobileMenu' className='JP justMobileMenu'>
          <div id='mobileMMenu' className='JP'>
  
            <div id='bottomLeftMainDiv' className='JP'>
              <h1>Price
                <i class="fa fa-chevron-down" aria-hidden="true"></i>

              </h1>
              <div class="range-input">
                <div></div>
                <input type="range" id='range-min1' className="range-max" min="0" onChange={()=>{
                    setminPrice(document.getElementById('range-min1').value,1); 
                  }} 
                  value={minPrice}
                  max="1000" />
                <input type="range" id='range-max1' className="range-max" min="0" onChange={()=>{setmaxPrice(document.getElementById('range-max1').value,2);}} max="1000" value={maxPrice}/>
              </div>
              <div id='MinDiv' className='setPriceDiv'>
                <p>min</p>
                <div>${minPrice}</div>
              </div>
              <div id='seprator'></div>
              <div id='MaxDiv' className='setPriceDiv'>
                <p>Max</p>
                <div>${maxPrice}</div>
              </div>
              <button onClick={Apply}>Apply</button>
            </div>
  
            <div id='leftCheckboxDiv' className='JP'>
              <h1>Brand
              <i class="fa fa-chevron-down" aria-hidden="true"></i>

              </h1>
  
              <div>
                <input onClick={()=>{changeBrand('Samsung','Samsung1')}} type="checkbox" id="Samsung1" name="Samsung" value="Bike"></input>
                <label for="Samsung1">Samsung<p>+20</p></label><br/>
              </div>
  
              <div>
                <input onClick={()=>{changeBrand('Apple','Apple1')}} type="checkbox" id="Apple1" name="Apple" value="Bike"/>
                <label for="Apple1">Apple<p>+30</p></label><br/>
              </div>
  
              <div>
                <input onClick={()=>{changeBrand('Huawei','Huawei1')}} type="checkbox" id="Huawei1" name="Huawei" value="Bike"/>
                <label for="Huawei1">Huawei<p>+20</p></label><br/>
              </div>
  
              <div>
                <input onClick={()=>{changeBrand('Xiaomi','Xiaomi1')}} type="checkbox" id="Xiaomi1" name="xiaomi" value="Bike"/>
                <label for="Xiaomi1">Xiaomi<p>+10</p></label><br/>
              </div>
  
              <div>
                <input onClick={()=>{changeBrand('Nokia','Nokia1')}} type="checkbox" id="Nokia1" name="Nokia" value="Bike"/>
                <label for="Nokia1">Nokia<p>+10</p></label><br/>
              </div>
  
            </div>
  
            <div id='leftRatingDiv'  className='JP'>
                <h1>Rating
                <i class="fa fa-chevron-down" aria-hidden="true"></i>

                </h1>
                <div id='Star5' className='rateStars'>
                  <input onClick={()=>{changeStart(5,'Star555')}} type="checkbox" id="Star555" name="Star555" value="Star55"/>
                  <label for="Star555">
                    <span class="fa fa-star checked Star55"></span>
                    <span class="fa fa-star checked Star55"></span>
                    <span class="fa fa-star checked Star55"></span>
                    <span class="fa fa-star checked Star55"></span>
                    <span class="fa fa-star checked Star55"></span>
                  </label>
                </div>
              <div id='Star4' className='rateStars'>
                <input onClick={()=>{changeStart(4,'Star444')}} type="checkbox" id="Star444" name="Star444" value="Star44"/>
                <label for="Star444">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star "></span>
                </label>
              </div>
              <div id='Star3' className='rateStars'>
                <input onClick={()=>{changeStart(3,'Star333')}} type="checkbox" id="Star333" name="Star333" value="Star33"/>
                <label for="Star333">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star "></span>
                  <span class="fa fa-star "></span>
                </label>
              </div>
              <div id='Star2' className='rateStars'>
                <input onClick={()=>{changeStart(2,'Star222')}} type="checkbox" id="Star222" name="Star222" value="Star22"/>
                <label for="Star222">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star "></span>
                  <span class="fa fa-star "></span>
                  <span class="fa fa-star "></span>
                </label>
              </div>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
export default Main