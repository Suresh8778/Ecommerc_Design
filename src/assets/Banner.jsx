import React from 'react';
import banner from "../image/Ecom-Banner.png";
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {


    useEffect(() => {
        AOS.init({duration:2000}); 
      }, []);


  return (
    <>
    <div className='container' style={{backgroundColor:"#E7E6E6",borderRadius:"30px"}}>
        <div className='row mx-auto'>
            <div className="col-12 col-lg-6 col-md-6 p-2 px-lg-5 pt-lg-5"
            data-aos="fade-left">
                <div className='fw-bold banner-txt px-lg-5'>
                    <p><span className='ban-1'>LET'S</span></p>
                    <p>EXPLORE</p> 
                    <p><span className='ban-2'>UNIQUE</span></p>
                    <p> CLOTHES.</p>
                </div>
                <div className='px-lg-5'>
                <p>Live for influential and innovative fashion!</p>
                <button type="button" className="btn btn-dark">Shop Now</button>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 px-lg-5 pt-lg-5">
                <img className="img-fluid" src={banner} alt='banner'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner