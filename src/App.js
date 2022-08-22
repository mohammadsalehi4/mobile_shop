import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Dashboard from './components/Dashboard/Dashboard'
import Loading from './components/Loading/Loading'
import './App.css'
import { BrowserRouter as Router ,Route} from 'react-router-dom'

const App = () => {
  const States = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:"CHANGELOADING",value:true})
  },[])
  window.onload = function () { 
    dispatch({type:"CHANGELOADING",value:false})
  }
  return (
      <div>
        {States.loading?
          null  
        :
          <Header/>
        }
        <Router>
          {States.loading?
              <Loading/>
            :
            <div>
              <Route path="/" render={() => <Main/>} exact/>
              <Route path="/product/:id" component={Product} exact/>
              <Route path="/cart" component={Cart} />
              <Route path="/dashboard" component={Dashboard} />
            </div>
          }
        </Router>
      </div>
  )
}

export default App
