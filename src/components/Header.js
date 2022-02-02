import React from 'react';
import { Logo } from '../images';
import { IconHamburger } from '../images'


function Header () {
    return (
        <header> 
             <nav className="nav-mobile">
                <div className="logo-title">
              
                   <Logo color="white"/>
                    
                </div>
            
                <div className="burger-menu">
                    <ul>
                        <li>
                            <a href='#'> About </a>
                        </li>

                        <li>
                            <a href='#'> Services </a>
                        </li>

                        <li>
                            <a href='#'> Projects </a>
                        </li>

                        <li>
                            <a href='#'> Contact </a>
                        </li>
                    </ul>
                </div>

                <div className='icon-burgerMenu'>
                  
                    <IconHamburger color="white"/>

                </div>

            </nav>

            <div className="header-title"> 
                <h1> WE ARE CREATIVES </h1>
            </div>
        </header>
    )
}

export default Header;