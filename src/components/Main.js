import React from 'react'
import joke from '../imgs/wrench.jpeg'
import Forms from './Forms'

export default function Main() {
  return (
    <div className="main-container">
      <div className="box1"> 
        <h1 className="text2">Honesty Quality Affordability</h1>
        <p>At Meade Plumbing you can expect customer service expressed through Honesty, Quality, and Affordability</p> 
        <img src={joke} alt="Logo" className="photo2"/> 
        <h4 className='p1'>Over 24 years of plumbing experience </h4>
        <h4>Current Master Plumber, Licenced and Insured</h4>
        <h4 className='p2'> Servicing SLC County and Utah County </h4>
      </div>
      <div className="box2">
      <img src={joke} alt="Logo" className="photo3"/> 
      </div>
      <div className='box3'>
        <h1 className='services'>SERVICES  OFFERED</h1>
      </div>
      <div className='box4'>
        <br></br>
        <h1 className='p4'>Services Include But Not Limited To</h1>
        <br></br>
      </div>
        <ul className="ul1">
          <li>Bathroom Finish-</li>
          <p>looking to update, or relocate fixtures</p>
        </ul>
        <ul className='listed'>
        <li> Basement Finish-</li>
          <p>Basement plumbing and General contracting for your basement project</p>
        </ul>
        <ul className="ul2">
          <li>New Construction</li>
          <br></br>
          <li> Remodels </li>
        
        </ul>
        <ul className="ul3">
        <li>Water Softeners</li>
        <li>Bathroom Additions </li>
          <li> Water Heaters</li>
          <p></p>
        </ul>
        <ul className="ul4">
        <li>Repipes-</li>
        <p>If your home is over 50 years old you probably have galvanized water lines that are ready for replacement.</p>
        </ul>
      <div className='box5'>
        <p className='p5'></p>
        <br></br>
        <p> </p>
          <br></br>
          <h1 className='trust'>Put Your Trust In Meade Plumbing</h1>
          <br></br>
        <p>With over 24 years of experience in the Plumbing industry, work experience includes
        service,remodels,additions, new construction in both residential and commercial jobs.
        I am also a licensed Genereal Contractor focusing on basement finishes. Because I am owner/employee I am 
        able to keep cost down due to little overhead. 
         If you choose Meade Plumbing, you can expext Quality service at a reasonable price, no sales tactics, 
         work done in a efficient and timely manner.
         </p>
         <p>

         </p>
       
      </div>
      <Forms />
    </div>
  )
}
