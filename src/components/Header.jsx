import React from 'react'

import airbnb from '../../public/images/airbnb_logo.png';
import photogrid from '../../public/images/photo_grid.png';

function Header() {
  return (
    <>
      <nav className='title'>
        <img src={airbnb} alt="Airbnb Logo" className='nav--logo'/>
      </nav>

      <section className='section_grid'>
        <img src={photogrid} alt="Photo grid" className='section_grid-photo'/>
        <h1 className='section_grid-title'>Online Experiences</h1>
        <p className='section_grid-text'>
          Join unique interactive activities led by 
          one-of-a kind hosts-all without leaving home
        </p>
      </section>
    </>
  )
}

export default Header