import React, { Fragment,useState, useEffect } from 'react'
import { Link ,Redirect} from 'react-router-dom';
import Header from './Parts/Header';
import SideBar from './Parts/SideBar';
import Footer from './Parts/Footer';

const NotFoundPage =()=>{
    return(
        <Fragment>

{/* **************** Sidebar ******************** */}
        {/* Sidebar */}
        <SideBar/>

{/* **************** Content ******************** */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

{/* **************** TopBar ******************** */}
        {/* Topbar */}
        <Header/>

{/* **************** Main ******************** */}
            {/* Main Content */}
            <div id="content">
    
                {/* 404 Error Text */}
                <div className="text-center">
                    <div className="error mx-auto" data-text={404}>404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                        <Link to ="/">← Back to Dashboard</Link>
                </div>

            </div>

{/* **************** Footer ******************** */}
                {/* Footer */}      
        <Footer/>
        </div>

        </Fragment>
    )
}

export default NotFoundPage