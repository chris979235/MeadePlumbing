import React from 'react'
import dog from '../imgs/wrench.jpeg'
import gep from '../imgs/gep2.jpeg'
export default function Header() {
  return (
    <div className='header'>
      <img src={dog} alt="Logo" className="photo"/> 
      <h1 className="title">MEADE PLUMBING</h1>
      <img src={gep} alt="icon" className='icon'/> 
    </div>
  )
}
