import React,{useEffect,useState} from 'react'
import './main.css'
const Main = () => {

  const [minPrice,SetMinPrice]=useState(100)
  const [maxPrice,SetMaxPrice]=useState(100)

  const devices=[{
    model:'Iphone XS max 2020',
    rate:4.1
  },
  {
    model:'Iphone 13 pro max 2022',
    rate:4.9
  },
  {
    model:'Iphone X 2021',
    rate:3.9
  },
  {
    model:'Iphone 11 2020',
    rate:3.7
  },
  {
    model:'Iphone 12 pro 2021',
    rate:4.2
  },
  {
    model:'Iphone 12',
    rate:4
  },
  {
    model:'Iphone SE 2022',
    rate:4.4
  },
  {
    model:'Iphone 13 CH',
    rate:4.1
  },
  {
    model:'Iphone 13 pro 2022',
    rate:4.7
  },
]

  const setPrice=(newPrice,index)=>{
    if(index===1){
      if(newPrice<maxPrice){
        SetMinPrice(newPrice)
      }
    }else if(index===2){
      if(newPrice>minPrice){
        SetMaxPrice(newPrice)
      }
    }
    if(maxPrice<minPrice){
      let a=maxPrice
      SetMaxPrice(minPrice)
      SetMinPrice(a)
    }
  }

  const change1=()=>{
    document.getElementsByClassName('Star55').style.color="yellow"
  }

  return (
    <div id='mainDiv'>

      <div id='topMainBox'>
          <i class="fa fa-chevron-left Arrow leftArrow" aria-hidden="true"></i>

          <div id='topMainImage'></div>
          <div id='topMainDescription'>
            <h1>
              New Experience Iphone 2022
            </h1>
            <p>
              Because if you understand taste, you can delight people with relevant content and a meaningful experience.
            </p>
            <a>Show more</a>
            <div id='pager'>
              <div id='page1' className='pages selectedPage'></div>
              <div id='page2' className='pages'></div>
              <div id='page3' className='pages'></div>
              <div id='page4' className='pages'></div>
            </div>
          </div>
          <i class="fa fa-chevron-right Arrow rightArrow" aria-hidden="true"></i>

      </div>

      <div id='bottomLeftMainDiv'>
        <h1>Price</h1>
        <div class="range-input">
          <div></div>
          <input type="range" id='range-min' className="range-max" min="0" onChange={()=>{setPrice(document.getElementById('range-min').value,1);if(document.getElementById('range-min').value>=document.getElementById('range-max').value){document.getElementById('range-min').value=document.getElementById('range-max').value}}} max="1000"/>
          <input type="range" id='range-max' className="range-max" min="0" onChange={()=>{setPrice(document.getElementById('range-max').value,2);if(document.getElementById('range-max').value<=document.getElementById('range-min').value){document.getElementById('range-max').value=document.getElementById('range-min').value}}} max="1000"/>
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
        <button>Apply</button>
      </div>

      <div id='leftCheckboxDiv'>
        <h1>Brand</h1>
        <div>
          <input type="checkbox" id="Samsung" name="Samsung" value="Bike"></input>
          <label for="Samsung">Samsung<p>+20</p></label><br/>
          
        </div>

        <div>
          <input type="checkbox" id="Apple" name="Apple" value="Bike"/>
          <label for="Apple">Apple<p>+30</p></label><br/>
          
        </div>

        <div>
          <input type="checkbox" id="huawei" name="huawei" value="Bike"/>
          <label for="huawei">huawei<p>+20</p></label><br/>
          
        </div>

        <div>
          <input type="checkbox" id="xiaomi" name="xiaomi" value="Bike"/>
          <label for="xiaomi">xiaomi<p>+10</p></label><br/>
          
        </div>

        <div>
          <input type="checkbox" id="Nokia" name="Nokia" value="Bike"/>
          <label for="Nokia">Nokia<p>+10</p></label><br/>
          
        </div>

      </div>

      <div id='leftRatingDiv'>
        <h1>Rating</h1>
        <div id='Star5' className='rateStars'>
          <input onChange={()=>{change1()}} type="checkbox" id="Star55" name="Star55" value="Star55"/>
          <label for="Star55">
            <span class="fa fa-star checked Star55"></span>
            <span class="fa fa-star checked Star55"></span>
            <span class="fa fa-star checked Star55"></span>
            <span class="fa fa-star checked Star55"></span>
            <span class="fa fa-star checked Star55"></span>
          </label>
        </div>
        <div id='Star4' className='rateStars'>
          <input type="checkbox" id="Star44" name="Star44" value="Star44"/>
          <label for="Star44">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
          </label>
        </div>
        <div id='Star3' className='rateStars'>
          <input type="checkbox" id="Star33" name="Star33" value="Star33"/>
          <label for="Star33">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
          </label>
        </div>
        <div id='Star2' className='rateStars'>
          <input type="checkbox" id="Star22" name="Star22" value="Star22"/>
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
            devices.map((item,index)=>{
              return(
                <div className='mobileBox'>
                  <div className='mobileImage'></div>
                  <p className='mobileTitle'>{item.model}</p>
                  <span class="fa fa-star checked"><p>{item.rate}</p></span>
                </div>
              )
            })
        }
      </div>

    </div>
  )
}



export default Main