import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <div className="footer__items">
                <div className="social__icons">

                </div>
                <div className="copyright">
                    <p>Copyright &copy; GO TRAVELS {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;