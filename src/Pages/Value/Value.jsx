import React, { useState } from 'react'
import './Value.css'
import ImgContainer from '../../components/website/ImgContainer/ImgContainer'
import value_img from '../../assets/images/value.png'
import SectionTitle from '../../components/website/SectionTitle/SectionTitle'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../utils/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
const Value = () => {
    
  return (
    <div className='value page-style'>
        <div className="container">
            <div className="left-section">
                <ImgContainer img={value_img}/>
            </div>
            <div className="right-section">
                <SectionTitle title="Our Value" desc="Value We Give to You" para="We always ready to help by providing the best services for you. We beleive a good place to live can make your life better"/>
                <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {
                        data.map((card , index)=> {
                            const [className , setClassName] = useState(null)
                            return(
                                <AccordionItem className={`card ${className}`} key={index} uuid={index}>

                                    <AccordionItemHeading>
                                        <AccordionItemButton className='acc-button'>

                                            <AccordionItemState>
                                                {({ expanded }) => 
                                                        expanded 
                                                        ? setClassName("expanded") 
                                                        : setClassName("collapsed")
                                                }
                                            </AccordionItemState>

                                            <div className="icon">{card.icon}</div>
                                            <h3>{card.heading}</h3>
                                            <div className="icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="info">{card.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Value