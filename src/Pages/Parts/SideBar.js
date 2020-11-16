import React from 'react'
import { Link ,Redirect} from 'react-router-dom';

function SideBar() {
    return (
        <>
{/* **************** Sidebar ******************** */}
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion " id="accordionSidebar" >

{/* **************** Big Home ******************** */}
            {/* Sidebar - Brand */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-fw fa-tachometer-alt" />
                </div>
                <div class="sidebar-brand-text mx-3">Home</div>
            </a>

{/* **************** Menu Begin ******************** */}
            <div className="sidebar-heading" >
                <h4 id='useFont'>Menu</h4>
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
                        <Link to ="/" className="collapse-item" href="/" >Home</Link>
                        <Link to ="/NewCase" className="collapse-item" href="/NewCase">Add new case</Link>
                        <Link to ="*" className="collapse-item" href="/NewCase">404</Link>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />
            </ul>
        </>
    )
}

export default SideBar
