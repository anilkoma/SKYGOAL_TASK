import React from 'react';
import footer1 from '../../assets/footer-1.png';
import footer2 from '../../assets/footer-2.png';
import footer3 from '../../assets/footer-3.png';
// import footer4 from '../../assets/footer-4.png';
import footer5 from '../../assets/footer-5.png';
import footer6 from '../../assets/footer-6.png';
import footer7 from '../../assets/footer-7.png';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className='my-5'>
                    <div class="row d-flex justify-content-between align-items-center gy-3">


                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className=''>

                                <h6 className=' fw-semibold my-3'>PT Dwidasa Samsara Indonesia</h6>
                                <p className='lh-sm'>Ruko Jalur Sutera 29A No. 53 <br />
                                    Alam Sutera Serpong, Tangerang 15323
                                </p>
                                {/* <h5 className=' text-center fw-semibold my-3'>Rodney Stratton</h5> */}


                            </div>


                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className=''>

                                <h6 className=' fw-semibold my-3'>Contact</h6>
                                <p>Phone : +62.21.5314.1135 <br />
                                    Fax : +62.21.5314.1135 <br />
                                    Email : community@dwidasa.com</p>


                            </div>



                        </div>


                        <div class="col-lg-5 col-md-6 col-sm-12 col-12 ">
                            <div className=' row d-flex justify-around'>
                                <img className='col-lg-3 col-md-3 col-sm-3 col-3 ' height={"40px"} src={footer1} alt="" />
                                <img className='col-lg-3 col-md-3 col-sm-3 col-3 mx-3' height={"40px"} src={footer2} alt="" />
                                <img className='col-lg-3 col-md-3 col-sm-3 col-3 ' height={"40px"} src={footer3} alt="" />
                            </div>
                            <div className='row d-flex justify-around align-items-center mt-2'>
                                <img className='col-lg-3 col-md-3 col-sm-3 col-3 ' height={"40px"} src={footer5} alt="" />
                                <img className='mx-3 col-lg-3 col-md-3 col-sm-3 col-3' height={"20px"} src={footer6} alt="" />
                                <img className='col-lg-3 col-md-3 col-sm-3 col-3' height={"20px"} src={footer7} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <p className='bg_red p-3 text-center mb-0 text-white fw-semibold'>Copyright © 2015</p>
        </div>
    );
};

export default Footer;