import React from 'react';
import logo from './../../Shared/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-100 text-base-content rounded">
                <div>
                    <img src={logo} alt="" width={70} />
                    <p className="font-bold">
                        PrettyClick <br />Providing outstanding photography experience
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;