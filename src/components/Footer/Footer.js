import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div id='Footer'>
        <div className='par' id='par2'>
            <h1>Hot Links</h1>
            <a>Home</a>
            <a>Shop</a>
            <a>Blog</a>
            <a>Contact</a>
        </div>
        <div className='par' id='par3'>
            <h1>More info</h1>
            <a>How it works</a>
            <a>About us</a>
            <a>Decline rules</a>
            <a>Terms and conditions</a>
        </div>
        <div className='par' id='par4'>
            <h1>Customer care</h1>
            <a>FAQ</a>
            <a>Terms of use</a>
            <a>Privacy policy</a>
            <a>Discount system</a>
        </div>
        <div className='par' id='par5'>
            <h1>Get newsletter</h1>
            <p>Get update about styles</p>
            <div>
                <input type="text" placeholder="Type your Email..." ></input>
                <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </div>
        <div id='underFooter'>
            <p id='copyright'>
                <i class="fa fa-copyright" aria-hidden="true"></i>
                Producted by Mohammad salehi
                <a href="http://t.me/TheNewMohammad" className="telegram"><i className="fa fa-telegram"></i></a>
            </p>
        </div>
    </div>
  )
}


export default Footer