import React from 'react'
import './Footer.css'
import logo from '../../Assets/startuplogobr.png'
import FaLinkedin from 'react-icons/fa'
function Footer() {
  return (
    <div>
   <div className='footer-container flex'>
   <ul className='footerlist'>
        <img src={logo} alt="logo" className='fotlogo' />
        <li><h4>Startup</h4></li>
       <li><p>101,Relecon Enclave</p></li>
       <li><p>Kolkata, West Bengal</p></li>
       <li><p>India-3942</p></li>
   </ul>
   <ul className='footerlist-'>
       <li><h2>Company</h2></li>
       <li><p>Contact us</p></li>
       <li><p>About us</p></li>
       <li><p>Pricing</p></li>
   </ul>
   <ul className='footer-list'>
       <li><h2>Quick Links</h2></li>
       <li><p>Community Guidelines</p></li>
       <li><p>Privacy Policy</p></li>
       <li><p>Cancellation & Refund</p></li>
       <li><p>Shiping & Exchange</p></li>
   </ul>
   <ul className='footerlist'>
   <li><h2>FAQS</h2></li>
   <li><p>Startup FAQS</p></li>
   </ul>
   </div>
   
  
    
    
</div>

  )
}

export default Footer