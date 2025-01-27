import React from 'react';
import 'remixicon/fonts/remixicon.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';

const adduser = ({handleLogout}) => {
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
                                            <div class="title-header option-title">
                                                <h5>Add New User</h5>
                                            </div>
                                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="pills-home-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-home"
                                                        type="button">Account</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="pills-profile-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-profile"
                                                        type="button">Pernission</button>
                                                </li>
                                            </ul>

                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
                                                    <form class="theme-form theme-form-2 mega-form">
                                                        <div class="card-header-1">
                                                            <h5>Product Information</h5>
                                                        </div>

                                                        <div class="row">
                                                            <div class="mb-4 row align-items-center">
                                                                <label
                                                                    class="form-label-title col-lg-2 col-md-3 mb-0">First
                                                                    Name</label>
                                                                <div class="col-md-9 col-lg-10">
                                                                    <input class="form-control" type="text"/>
                                                                </div>
                                                            </div>

                                                            <div class="mb-4 row align-items-center">
                                                                <label
                                                                    class="col-lg-2 col-md-3 col-form-label form-label-title">Email
                                                                    Address</label>
                                                                <div class="col-md-9 col-lg-10">
                                                                    <input class="form-control" type="email"/>
                                                                </div>
                                                            </div>

                                                            <div class="mb-4 row align-items-center">
                                                                <label
                                                                    class="col-lg-2 col-md-3 col-form-label form-label-title">Password</label>
                                                                <div class="col-md-9 col-lg-10">
                                                                    <input class="form-control" type="password"/>
                                                                </div>
                                                            </div>

                                                            <div class="row align-items-center">
                                                                <label
                                                                    class="col-lg-2 col-md-3 col-form-label form-label-title">Confirm
                                                                    Password</label>
                                                                <div class="col-md-9 col-lg-10">
                                                                    <input class="form-control" type="password"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div class="tab-pane fade" id="pills-profile" role="tabpanel">
                                                    <div class="card-header-1">
                                                        <h5>Product Related Permition</h5>
                                                    </div>
                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Add Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Update Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Delete Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Apply Discount</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="card-header-1">
                                                        <h5>Category Related Permition</h5>
                                                    </div>
                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Add Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Update Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Delete Product</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 row align-items-center">
                                                        <label class="col-md-2 mb-0">Apply Discount</label>
                                                        <div class="col-md-9">
                                                            <form class="radio-section">
                                                                <label>
                                                                    <input type="radio" name="opinion" checked/>
                                                                    <i></i>
                                                                    <span>Allow</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="opinion" />
                                                                    <i></i>
                                                                    <span>Deny</span>
                                                                </label>
                                                            </form>
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

export default adduser;

