import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './main.css'
const Main = () => {

  const States = useSelector(state => state);
  const dispatch = useDispatch();

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

  const [minPrice,SetMinPrice]=useState(100)
  const [maxPrice,SetMaxPrice]=useState(100)
  const[ShowDevice,SetShowDevice]=useState(devices)
  const[brandFilter,SetbrandFilter]=useState([])
  const[rateFilter,SetrateFilter]=useState([])
  const [topBoxPage,SettopBoxPage]=useState(0)

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
    if(maxPrice<minPrice){
      let a=maxPrice
      SetMaxPrice(minPrice)
      SetMinPrice(a)
    }
  }

  const setmaxPrice=(newPrice,index)=>{
      if(newPrice>minPrice){
        SetMaxPrice(newPrice)
      }
    if(maxPrice<minPrice){
      let a=maxPrice
      SetMaxPrice(minPrice)
      SetMinPrice(a)
    }
  }

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

  return (
    <div id='mainDiv'>
      <div id='topMainBox'>
        <i class="fa fa-chevron-left Arrow leftArrow" aria-hidden="true" onClick={()=>{nextTopPage(false)}}></i>
          <img id='topMainImage' src={HeaderDetails[topBoxPage].imageAddress}></img>
          <div id='topMainDescription'>
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
        <i class="fa fa-chevron-right Arrow rightArrow" aria-hidden="true" onClick={()=>{nextTopPage(true)}}></i>
      </div>

      <div id='bottomLeftMainDiv'>
        <h1>Price</h1>
        <div class="range-input">
          <div></div>
          <input type="range" id='range-min' className="range-max" min="0" onChange={()=>{setminPrice(document.getElementById('range-min').value,1);if(document.getElementById('range-min').value>=document.getElementById('range-max').value){document.getElementById('range-min').value=document.getElementById('range-max').value}}} max="1000"/>
          <input type="range" id='range-max' className="range-max" min="0" onChange={()=>{setmaxPrice(document.getElementById('range-max').value,2);if(document.getElementById('range-max').value<=document.getElementById('range-min').value){document.getElementById('range-max').value=document.getElementById('range-min').value}}} max="1000"/>
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
        { 
          ShowDevice.map((item,index)=>{
            return(
              <a href={'/product/'+item.id}>
                <div className='mobileBox' key={index}>
                  <img className='mobileImage' src={item.imageAddress}></img>
                  <p className='mobileTitle'>{item.model}</p>
                  <p className='mobilePrice'>$ {item.price}</p>
                  <span class="fa fa-star checked"><p>{item.rate}</p></span>
                  <div class="archive"><i class="fa fa-archive" aria-hidden="true"></i><p>available in store</p></div>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Main