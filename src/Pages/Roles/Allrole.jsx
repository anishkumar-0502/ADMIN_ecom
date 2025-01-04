import React from 'react';
import 'remixicon/fonts/remixicon.css';


import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';

const Allrole = ({handleLogout}) => {
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
                        <div class="col-sm-12">
                            <div class="card card-table">
                           
                                <div class="card-body">
                                    <div class="title-header option-title">
                                        <h5>Role List</h5>
                                        <form class="d-inline-flex">
                                            <a href="create-role.html" class="align-items-center btn btn-theme d-flex">
                                                <i data-feather="plus"></i>Add Role
                                            </a>
                                        </form>
                                    </div>
                                    <div>
                                        <div class="table-responsive">
                                            <table id="table_id" class="table role-table all-package theme-table">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Name</th>
                                                        <th>Create At</th>
                                                        <th>Options</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dummy</td>
                                                        <td>3 weeks ago</td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)">
                                                                        <i class="ri-pencil-line"></i>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalToggle">
                                                                        <i class="ri-delete-bin-line"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>2</td>
                                                        <td>Self</td>
                                                        <td>3 weeks ago</td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)">
                                                                        <i class="ri-pencil-line"></i>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalToggle">
                                                                        <i class="ri-delete-bin-line"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>3</td>
                                                        <td>Dummy</td>
                                                        <td>3 weeks ago</td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)">
                                                                        <i class="ri-pencil-line"></i>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalToggle">
                                                                        <i class="ri-delete-bin-line"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>4</td>
                                                        <td>Author</td>
                                                        <td>3 weeks ago</td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)">
                                                                        <i class="ri-pencil-line"></i>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalToggle">
                                                                        <i class="ri-delete-bin-line"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Allrole;

