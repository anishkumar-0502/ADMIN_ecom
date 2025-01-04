import React from 'react';
import 'remixicon/fonts/remixicon.css';


import {Link } from 'react-router-dom';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';

const Addcategory = ({handleLogout}) => {
    return (
        <div>
         {/*page-wrapper Start*/}
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
      {/*Page Header Start*/}
      <Header  handleLogout={handleLogout}/>
      {/*Page Header Ends*/}

      {/*Page Body Start*/}
        <div class="page-body-wrapper">
          {/*Page Sidebar Start*/}
          <Sidebar/>
          {/*Page Sidebar Ends*/}

          {/*Container-fluid starts*/}
          <div class="page-body">

               
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-sm-8 m-auto">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-header-2">
                                                <h5>Category Information</h5>
                                            </div>

                                            <div class="theme-form theme-form-2 mega-form">
                                                <div class="mb-4 row align-items-center">
                                                    <label class="form-label-title col-sm-3 mb-0">Category Name</label>
                                                    <div class="col-sm-9">
                                                        <input class="form-control" type="text"
                                                            placeholder="Category Name"/>
                                                    </div>
                                                </div>

                                                <div class="mb-4 row align-items-center">
                                                    <label class="col-sm-3 col-form-label form-label-title">Category
                                                        Image</label>
                                                    <div class="form-group col-sm-9">
                                                        <form class="dropzone custom-dropzone" id="multiFileUpload"
                                                            action="/upload.php">
                                                            <div class="dropzone-wrapper">
                                                                <div class="dz-message needsclick">
                                                                    <div>
                                                                        <i class="icon-cloud-up"></i>
                                                                        <h6>Drop files here or click to upload.</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div class="row align-items-center">
                                                    <div class="col-sm-3 form-label-title">Select Category Icon</div>
                                                    <div class="col-sm-9">
                                                        <div class="dropdown icon-dropdown">
                                                            <button class="btn dropdown-toggle" type="button"
                                                                id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                                                Select Icon
                                                            </button>
                                                            <ul class="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton1">
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/vegetable.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/cup.svg"
                                                                            class="blur-up lazyload"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/meats.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/breakfast.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/frozen.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/biscuit.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/grocery.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/drink.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/milk.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <img src="../assets/svg/1/pet.svg"
                                                                            class="img-fluid"  alt=""/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-submit-button">
                                            <button class="btn btn-animation ms-auto" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             

              <Footer/>
              
            </div>
        </div>
    </div>
  {/*page-wrapper End*/}

             
        
          
      </div>
    );
};

export default Addcategory;

