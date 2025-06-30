import React from 'react'
import "./hero.css"
import heroImg from "../../assets/images/hero-image.png"
import CountUp from 'react-countup'
import ImgContainer from '../../components/website/ImgContainer/ImgContainer'
const Hero = () => {
  return (
    <div className='hero page-style'>
        <div className="container">

            <div className="left-section">

                <div className="title">
                    <div className="orange-circle"></div>
                    <h1>Discover <br /> Most Suitable <br /> Property</h1>
                </div>

                <div className="desc">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="search-bar ">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder='Search...'/>
                    <button className='btn'>Search</button>
                </div>

                <div className="stats">

                    <div className="stat">
                        <span className='num'><CountUp start={8800} end={9000} duration={4}/><span className='plus'>+</span></span>
                        <span className='name'>Premium Product</span>
                    </div>

                    <div className="stat">
                        <span className='num'><CountUp start={1950} end={2000} duration={4}/><span className='plus'>+</span></span>
                        <span className='name'>Happy Customer</span>
                    </div>

                    <div className="stat">
                        <span className='num'><CountUp end={28} /><span className='plus'>+</span></span>
                        <span className='name'>Awards Winning</span>
                    </div>

                </div>

            </div>

            <div className="right-section">
                <ImgContainer img={heroImg}/>
            </div>

        </div>

    </div>
  )
}

export default Hero