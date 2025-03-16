import React from 'react';
import logo from "../image/logo.png";

function Foot() {
  return (
    <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <img src={logo}></img>
                    </div>
                    <div className="col">
                        <div>
                            <ul>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Support</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                    <div>
                            <ul>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Support</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                    <div>
                            <ul>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Support</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Foot;