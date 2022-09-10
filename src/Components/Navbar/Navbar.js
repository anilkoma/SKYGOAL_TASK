import React from 'react';
import union from '../../assets/Union.png';
import mail from '../../assets/mail - Copy.png';
import suffle from '../../assets/shuffle - Copy.png';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-white navbar-expand-lg bg-light px-5 shadow-sm">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-sm">
                            <li class="nav-item ms-2">
                                <h6><a class="nav-link" aria-current="page" href="#">Services</a></h6>
                            </li>
                            <li class="nav-item ms-2" >
                                <h6> <a class="nav-link" href="#">Products</a></h6>
                            </li>
                            <li class="nav-item ms-2">
                                <h6><a class="nav-link" href="#">Technology</a></h6>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Client
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item ms-2">
                                <h6> <a class="nav-link" href="#">Partner</a></h6>
                            </li>

                        </ul>
                        <div class="d-flex justify-around w-25" role="search">
                            <div>
                                <img className='ms-3' width={'15px'} src={union} alt="" />
                                <img className='ms-3' width={'15px'} src={mail} alt="" />
                                <img className='ms-3' width={'15px'} src={suffle} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;