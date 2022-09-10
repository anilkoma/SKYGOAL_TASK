import React from 'react';
import line from '../../assets/Line 1.png';
import person1 from '../../assets/cover.png';
import person2 from '../../assets/cover (1).png';
import person3 from '../../assets/cover (2).png';
import person4 from '../../assets/cover (3).png';
import facebook from '../../assets/facebook.PNG';
import twitter from '../../assets/twitter.PNG';
import insta from '../../assets/insta.PNG';
const Specialist = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-3 '>Our Specialist</h2>
            <div className='d-flex justify-content-center'>
                <img src={line} width={"100px"} alt="" />
            </div>

            <div className='my-5'>
                <div class="row d-flex justify-content-between align-items-center gy-3">


                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className='shadow-lg p-3 rounded-2'>
                            <div className='d-flex justify-content-center'>
                                <img src={person1} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>System Analyst</h6>
                            <h5 className=' text-center fw-semibold my-3'>Rodney Stratton</h5>

                            <div className="d-flex justify-content-center">
                                <div className='flex justify-content-around'>
                                    <img src={facebook} alt="" />
                                    <img className='mx-3' src={twitter} alt="" />
                                    <img src={insta} alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className=' shadow-lg p-3 rounded-2'>
                            <div className='d-flex justify-content-center'>
                                <img src={person2} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>System Analyst</h6>
                            <h5 className=' text-center fw-semibold my-3'>Rodney Stratton</h5>

                            <div className="d-flex justify-content-center">
                                <div className='flex justify-content-around'>
                                    <img src={facebook} alt="" />
                                    <img className='mx-3' src={twitter} alt="" />
                                    <img src={insta} alt="" />
                                </div>
                            </div>
                        </div>



                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className='shadow-lg p-3 rounded-2'>
                            <div className='d-flex justify-content-center '>
                                <img src={person3} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Programmer</h6>
                            <h5 className=' text-center fw-semibold my-3'>Rodney Stratton</h5>

                            <div className="d-flex justify-content-center">
                                <div className='flex justify-content-around'>
                                    <img src={facebook} alt="" />
                                    <img className='mx-3' src={twitter} alt="" />
                                    <img src={insta} alt="" />
                                </div>
                            </div>


                        </div>


                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className=' shadow-lg p-3 rounded-2'>
                            <div className='d-flex justify-content-center'>
                                <img src={person4} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Programmer</h6>
                            <h5 className=' text-center fw-semibold my-3'>Rodney Stratton</h5>

                            <div className="d-flex justify-content-center">
                                <div className='flex justify-content-around'>
                                    <img src={facebook} alt="" />
                                    <img className='mx-3' src={twitter} alt="" />
                                    <img src={insta} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Specialist;