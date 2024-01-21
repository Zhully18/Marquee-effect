import React from 'react'
import './Contact.css'
import Marquee from 'react-fast-marquee'
import Walmart from '../Asset/walmart.png'
import Adobe from '../Asset/adobe.png'
import Microsoft from '../Asset/microsoft.png'
import facebook from '../Asset/facebook.png'

const Contact = () => {
  return (
    <div className="app">
    <Marquee direction='right' speed={100} delay={5}>
    <div className="clientsImgs">
            <img src={Walmart} alt="" className="clientImg" />
            <img src={Adobe} alt="" className="clientImg" />
            <img src={Microsoft} alt="" className="clientImg" />
            <img src={facebook} alt="" className="clientImg" />
            <img src={Walmart} alt="" className="clientImg" />
            <img src={Adobe} alt="" className="clientImg" />
    </div>
    </Marquee>
    </div>
  )
}

export default Contact