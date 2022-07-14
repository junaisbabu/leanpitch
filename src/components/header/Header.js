import React from 'react'
import './header.css'
import Logo from '../../images/productwhite.png'

function Header() {
  return (
    <header className='header-container' >
        <nav className='nav-container navbar'>
           <div className='container-fluid col-12'>
                <section className='left-sec' >
                    <img src={Logo} />
                    <span>Leanpith</span>
                </section>
                <section className='right-sec d-none d-sm-block' >
                    <span>Subscribe</span>
                    <span>Contact Us</span>
                </section>
            </div> 
        </nav>
    </header>
  )
}

export default Header