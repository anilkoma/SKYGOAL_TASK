import React from 'react';
import banner from '../../assets/banner-removebg-preview.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className="container mt-5 mb-5">

            <div class="row d-flex justify-content-between align-items-center gy-3">


                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h1 className='fw-semibold lh-base fs-1'>Making the most of the <br /> ever-growing <br />
                        <span className='red'>Informational Technology</span></h1>
                    <p>Managed by a team professional experts with extensive experiance and impressive track records</p>

                    <button className='red_button btn rounded-0 text-white p-2 px-3'>Read More</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={banner} class="d-block w-100" alt="..." />
                </div>
            </div>

        </div>
    );
};

export default Banner;