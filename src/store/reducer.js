const initialState={
    SelectedMax:1000,
    SelectedMin:0,
    cartProduuct:[],
    openMenu:false,
    productPage:true,
    cartPNumber:3,    
    ShowPlan:0,
    messages:2,
    loading:false,
    thisPage:'main',
    orderYear:2022,
    orderMonth:'Apr',
    orderDay:29,
    orderStartHour:3,
    orderEndHour:6,
    orderCity:'Tehran',
    orderPrice:2640,
    products:[{
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
}

const reducer=(state=initialState,action)=>{
    if(action.type==="CHANGEMAX"){
        return {
            ...state,
            SelectedMax:action.value
        }
    }
    if(action.type==="CHANGEMIN"){
        return {
            ...state,
            SelectedMin:action.value
        }
    }
    if(action.type==="ADDTOCART"){
        return {
            ...state,
            cartProduuct:[...state.cartProduuct,action.newItem]
        }
    }
    if(action.type==="CHANGEOPENMENU"){
        return {
            ...state,
            openMenu:action.value
        }
    }
    if(action.type==="CHANGEPRODUCTPAGE"){
        return {
            ...state,
            productPage:action.value
        }
    }
    if(action.type==="CHANGECARTPNUMBER"){
        return {
            ...state,
            cartPNumber:action.value
        }
    }
    if(action.type==="CHANGELOADING"){
        return {
            ...state,
            loading:action.value
        }
    }
    if(action.type==="CHANGEPAGE"){
        return {
            ...state,
            thisPage:action.value
        }
    }
    if(action.type==="ADDTOCARTPRODUCT"){
      return {
          ...state,
          cartPNumber:action.value
      }
  }
    return state
}

export default reducer