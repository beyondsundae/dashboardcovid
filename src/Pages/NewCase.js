import React, { Fragment } from 'react'

export default function NewCase() {
    return (

       <Fragment>
            {/* Page Wrapper */}
            
{/* **************** Sidebar ******************** */}
                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* **************** Big Home ******************** */}
                    {/* Sidebar - Brand */}
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-fw fa-tachometer-alt" />
                        </div>
                        <div class="sidebar-brand-text mx-3">Home</div>
                    </a>

{/* **************** Small Home ******************** */}
                    {/* Nav Item - Dashboard */}
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Home</span></a>
                    </li> */}
                    {/* Divider */}
                    {/* <hr className="sidebar-divider" /> */}

{/* **************** Menu Begin ******************** */}
                    <div className="sidebar-heading">
                        Menu
                    </div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Route:</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Pages:</h6>
                                <a className="collapse-item" href="/">Home</a>
                                <a className="collapse-item" href="/NewCase">Register</a>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                </ul>

{/* **************** Content ******************** */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">

    {/* **************** TopBar Box ******************** */}
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* **************** BigBoxGirl ******************** */}
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Messages */}
                                <div className="topbar-divider d-none d-sm-block" />
        
        {/* **************** BoxGirl ******************** */}
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                                        <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                    </a>

        {/* **************** DropdownGirl ******************** */}
                                    {/* Dropdown - User Information */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}

    {/* **************** ContentBox ******************** */}
        {/* **************** ContentBoxTop ******************** */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h1 mb-0 text-gray-800">New Case</h1>
                            </div>

        {/* **************** Cards ******************** */}
                            {/* Content Row */}
                            <div className="row">

            {/* **************** Cards1 ******************** */}            
                                {/* Earnings (Monthly) Card Example */}
            
                                {/* Earnings (Monthly) Card Example */}

                                {/* Earnings (Monthly) Card Example */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                </div>
                                {/* Pending Requests Card Example */}
  
                            </div>
                            {/* Content Row */}
                            <div className="row">
                                {/* Area Chart */}

                                {/* Pie Chart */}
                                <div className="col-xl-4 col-lg-5">

                                </div>
                            </div>
                            {/* Content Row */}
                        </div>
                        {/* /.container-fluid */}
                    </div>

{/* **************** Footer ******************** */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Shit Website 2077</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </Fragment>

       
    )
}
