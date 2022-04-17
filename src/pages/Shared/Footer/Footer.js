import React from 'react';
import './footer.css'
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <div className="footer__items">
                <div className="social__icons d-flex justify-content-around align-items-center mb-3">
                    <div><RiFacebookCircleLine className='footer__icons' /></div>
                    <div><AiOutlineInstagram className='footer__icons' /></div>
                    <div><FiTwitter className='footer__icons' /></div>
                    <div><AiOutlineWhatsApp className='footer__icons' /></div>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; <b><i>GO T</i>RAVELS</b> {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;