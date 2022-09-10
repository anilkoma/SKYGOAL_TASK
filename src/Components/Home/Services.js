import React from 'react';
import list from '../../assets/3.PNG';
import check from '../../assets/2.PNG';
import pc from '../../assets/1.PNG';
const Services = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-3 '>Product and Services</h2>
            <div>
                <div class="row d-flex justify-content-between align-items-center gy-3">


                    <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up"
                        data-aos-duration="2000">
                        <img src={list} height={"100px"} alt="" />
                        <h3 className='red'> Our Product</h3>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>

                        <button className='red_button btn rounded-1 text-white p-2 px-3'>Read More</button>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up"
                        data-aos-duration="2000">
                        <img src={check} height={"100px"} alt="" />
                        <h3 className='red'> Our services</h3>
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                        </p>


                        <button className='red_button btn rounded-1 text-white p-2 px-3'>Read More</button>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up"
                        data-aos-duration="2000">
                        <img src={pc} height={"100px"} alt="" />
                        <h3 className='red'> Our Technology</h3>
                        <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>


                        <button className='red_button btn rounded-1 text-white p-2 px-3'>Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;