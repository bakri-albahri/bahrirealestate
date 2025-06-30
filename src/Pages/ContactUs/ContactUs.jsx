import React from 'react'
import './ContactUs.css'
import ImgContainer from '../../components/website/ImgContainer/ImgContainer'
import conImg from '../../assets/images/contact.jpg'
import SectionTitle from '../../components/website/SectionTitle/SectionTitle'
import { IoMdCall } from 'react-icons/io'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { FaMessage } from 'react-icons/fa6'
const ContactUs = () => {
  return (
    <div className='contact-us page-style'>
        <div className="container">
            <div className="left-section">
                <SectionTitle title="Our Contact Us" desc="Easy to contact us" para="We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better"/>
               
                <div className="card-container">

                    <div className="row">
                        <ContactCard icon={<IoMdCall />} name="Call" btn="Call Now"/>
                        <ContactCard icon={<IoChatbubbleEllipsesSharp />} name="Chat" btn="Chat Now"/>
                    </div>
                    
                   <div className="row">
                        <ContactCard icon={<IoChatbubbleEllipsesSharp />} name="Video Call" btn="Call Now"/>
                        <ContactCard icon={<FaMessage />} name="Message" btn="Message"/>
                   </div>

                </div>
            </div>

            <div className="right-section">
                <ImgContainer img={conImg}/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs


const ContactCard = (props) => {
  return (
     <div className="card">
        <div className="details">
            <div className="icon">
                {props.icon}
            </div>
            <div className="info">
                <span>{props.name}</span>
                <span>012 345 678 90</span>
            </div>
        </div>
        <div className="button">{props.btn}</div>
    </div>
  )
}

