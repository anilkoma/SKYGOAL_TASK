import React from 'react';
import section2 from "../../assets/sec-2-removebg-preview.png";
const Section2 = () => {
    return (
        <div className='bg-light'>
            <div className="container mt-5 mb-5">
                <div class="row d-flex justify-content-between align-items-center gy-4">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img data-aos="fade-right" data-aos-duration="2000" src={section2} className="d-block w-75" alt="..." />
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h3 className='fw-semibold lh-base'>Welcome to <span className='red'>Dwidasa Samsara <br /> Indonesia (DSI)</span></h3>
                        <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className='red fw-bold'>DSI’s</span> distinct front-end based application concept.
                        </p>

                        <p className='mt-4'>
                            Managed by a team of professional experts with extensive experience and impressive track records, <span className='red fw-bold'>DSI’s</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section2;