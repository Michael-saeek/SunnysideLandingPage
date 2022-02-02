import React from 'react';
import  {IconFacebook, IconInstagram, IconPinterest, IconTwitter, Logo}  from '../images'
const Footer = () => {
  return (
        <footer className='footer'>
            <div>
                <Logo color='#458c7e'/>

                <ul>
                    <li>
                        <a href='#'>About</a>
                    </li>

                    <li>
                        <a href='#'>Services</a>
                    </li>

                    <li>
                        <a href='#'>Projects</a>
                    </li>
                </ul>

         

                <ul>
                    <li>
                        <a href='#'>
                            <IconFacebook/>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <IconInstagram/>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <IconTwitter/>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <IconPinterest/>
                        </a>
                    </li>
                </ul>

                
                <div className='byMichael'>
                    <p>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Michael Andrade</a>.
                    </p>
                </div>
            
            </div>
        </footer>
    )
};

export default Footer;
