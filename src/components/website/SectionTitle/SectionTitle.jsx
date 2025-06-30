import React from 'react'
import './SectionTitle.css'
const SectionTitle = (props) => {
  return (
    <div className='section-title'>
        <h2>{props.title}</h2>
        <h1>{props.desc}</h1>
        {props.para && <p>{props.para}</p>}
    </div>
  )
}

export default SectionTitle