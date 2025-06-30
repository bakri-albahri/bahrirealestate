import React from 'react'
import './Footer.css'
import logo from '../../../assets/images/logo2.png'
import comp1 from '../../../assets/images/comp1.png'
import comp2 from '../../../assets/images/comp2.png'
import comp3 from '../../../assets/images/comp3.png'
import comp4 from '../../../assets/images/comp4.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="left-section">
                <img src={logo} alt="logo-img" />
                <p>Our vision is to make all people <br />the best place to live for them.</p>
            </div>

            <div className="companies-section">
                <div className="row">
                    <img src={comp1} alt="compImg" />
                    <img src={comp2} alt="compImg" />
                </div>
                <div className="row">
                    <img src={comp3} alt="compImg" />
                    <img src={comp4} alt="compImg" />
                </div>
            </div>
            
            <div className="right-section">
                <h1>INFORMATION</h1>
                <p>example@example.com</p>
                <p className='num'>012-345-678-90</p>
                <p>145 New York, FL 5467, USA</p>
            </div>
        </div>
    </div>
  )
}

export default Footer