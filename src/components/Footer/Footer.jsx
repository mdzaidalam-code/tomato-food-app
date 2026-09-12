import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />

          <p>
            Lorem Lorem ipsum dolor sit, amet c placeat sed enim impedit, sunt  molestias expedita explicabo doloribus nobis velit? ipsum dolor sit amet consectetur adipisicing elit. Sit, mollitia!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-91115-54652</li>
            <li>contact@tmat.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrght">
        Copyright 2025 © Tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer