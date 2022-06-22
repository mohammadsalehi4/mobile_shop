import React from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import './App.css'
import { BrowserRouter as Router ,Route} from 'react-router-dom'
const App = () => {
  return (
      <div>
        <Header/>
        <Router>
          <Route path="/" render={() => <Main/>} exact/>
          <Route path="/product/:id" component={Product} exact/>
          <Route path="/cart" component={Cart} />
        </Router>
        <Footer/>
      </div>
  )
}

export default App
