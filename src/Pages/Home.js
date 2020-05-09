import React, { Fragment,useState, useEffect } from 'react'
import axios from 'axios';
import AnimatedNumber from "animated-number-react";
import anime from 'animejs/lib/anime.es.js'
import moment from 'moment'
import { LineChart, Line, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


export default function Home() {
    
    window.onload = function() {
        Get7Days();
       GetDataCovid();
       GetProvince();
       TimeRanger ()
       
    }
    
    const [TableCovid, setTableCovid] = useState();
    const [Confirmed, setConfirmed] = useState();
    const [NewConfirmed, setNewConfirmed] = useState();
    const [Recovered, setRecovered] = useState();
    const [Hospitalized, setHospitalized] = useState();
    const [NewHospitalized, setNewHospitalized] = useState();
    const [Deaths, setDeaths] = useState();
    const [NewRecovered, setNewRecovered] = useState();
    const [NewDeaths, setNewDeaths] = useState();
    const [UpdateDate, setUpdateDate] = useState();
    const [SevenDays, setSevenDays] = useState();
    const [Province, setProvince] = useState();
    const [kuyy, setkuyy] = useState([]);
    const [xxxx2, setxxxx2] = useState();

    const formatValue = value => value.toFixed(0);
    

    const Animated = anime({
        targets: '.xxxx',
        translateX: [0,50],
        // easing: 'easeInOutExpo'

      }); 

    // const Animated2 = anime({
    //     targets: '.wow',
    //     innerHTML: [0, 1000],
        
    //     easing: 'easeInOutExpo',
    //     direction: 'alternate',
    //     loop: 3,
    //     // rotate: 360,
        
    //     round: 1 // Will round the animated value to 1 decimal
    // })

    function GetDataCovid (){
        return axios.get('https://covid19.th-stat.com/api/open/today') 
        .then(function (response) {
            const data = response.data;
            // console.table(data)
            setTableCovid(data);
            setConfirmed(data.Confirmed)
            setNewConfirmed(data.NewConfirmed)
            setRecovered(data.Recovered)
            setHospitalized(data.Hospitalized)
            setNewHospitalized(data.NewHospitalized)
            setDeaths(data.Deaths)
            setNewRecovered(data.NewRecovered)
            setNewDeaths(data.NewDeaths)
            setUpdateDate(data.UpdateDate)
            })}

    function Get7Days (item){
        axios.get('https://covid19.th-stat.com/api/open/timeline') 
        .then(function (response) {
            const Original = response.data;
            const QueryDate = Original.Data 
            // const SevenDaysSelected = 
            // setxxxx2(QueryDate)
            //  setxxxx(QueryDate)
            // console.log(QueryDate)
            // const PassedTime = moment().subtract(7, 'days').calendar();
            setkuyy(QueryDate)
        //    const result7Days = QueryDate.map((item) => {
        //         return(
        //             item.Date > moment().subtract(7, 'days').calendar()
        //             ?
        //                 <p key={item.Date}>
        //                     {console.log(item.Date, item.NewConfirmed)}
        //                     {item.Date}{" "}{item.NewConfirmed}
                            
        //                 </p>
                    
        //             :null
        //             )    
        //         })
            // console.log(result7Days)
            
            // setSevenDays(result7Days)
        })}


    function TestFncText (){
        const data = [  
            {name: 'Page A', uv: 400},
            {name: 'Page B', uv: 200} ];
        return(
            <BarChart width={600} height={350} data={kuyy}>
                <XAxis dataKey="Date" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="NewConfirmed" fill="#8884d8" barSize={30} />
            </BarChart>
        )
    }

    function GetProvince (){
        return axios.get('https://covid19.th-stat.com/api/open/cases/sum') 
        .then(function (response) {
            const data = response.data;
            
            // dataxx.map(item => 
            //  {
            //      console.table(item)
            //     })
            setProvince(data.Province)
        },[])}

    function TimeRanger (){
        const CurrentTime = moment().format('L'); 
        const PassedTime = moment().subtract(7, 'days').calendar();
        // console.table(CurrentTime)
        // console.table(PassedTime)
    }

    useEffect(() => {
        // console.log("UseEffect")
        // console.log(xxxx)
        // console.log(TableCovid)
        // console.table(Province)
        // console.table("State Date",Date)
        // console.log(SevenDays)
        // console.log(kuyy)
        })

    
    return (

        <Fragment>
            {/* Page Wrapper */}
        
{/* **************** Sidebar ******************** */}
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">

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
                    <a className="nav-link " href="/">
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
                        <ul className="navbar-nav ml-auto ">
                            {/* Nav Item - Messages */}
                            <div className="topbar-divider d-none d-sm-block " />

        {/* **************** BoxGirl ******************** */}
                            {/* Nav Item - User Information */}
                            <li className="nav-item dropdown no-arrow ">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Name Shit</span>
                                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                </a>

        {/* **************** DropdownGirl ******************** */}
                                {/* Dropdown - User Information */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in " aria-labelledby="userDropdown">
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
                        <div className="d-sm-flex align-items-center justify-content-between mb-1 ">
                            <h1 className="h1 mb-0 text-gray-800">Thailand Situation</h1>
                            {/* <h1 className='wow'></h1> */}
                            
                        </div>
                            <p class='mb-4' id='runnn'>updated: {UpdateDate}</p><br/>

        {/* **************** Cards ******************** */}
                        {/* Content Row */}
                        <div className="row">

            {/* **************** Cards1 ******************** */}
                            <div className="col-xl-3 col-md-6 mb-4 ">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">Infected</div>
                                                <div className="h3 mb-0 font-weight-bold text-gray-800">
                                                    <div class='xxxx'>
                                                        <AnimatedNumber
                                                        value={Confirmed}
                                                        duration={1300}
                                                        formatValue={formatValue}
                                                        />
                                                    </div>
                                                </div><br/>
                                                <div>New Infected{" "}{NewConfirmed}</div>
                                            </div>
                                            
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

            {/* **************** Cards2 ******************** */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-sm font-weight-bold text-success text-uppercase mb-1">Recovered</div>
                                                    <div className="h3 mb-0 font-weight-bold text-gray-800">
                                                        <div class='xxxx'>
                                                            <AnimatedNumber
                                                            value={Recovered}
                                                            duration={1300}
                                                            formatValue={formatValue}
                                                            />
                                                        </div>
                                                    </div><br/>
                                                    <div>New Recovered{" "}{NewRecovered}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

            {/* **************** Cards3 ******************** */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-sm font-weight-bold text-warning text-uppercase mb-1">Hospitalized</div>
                                                    <div className="h3 mb-0 font-weight-bold text-gray-800">
                                                        <div class='xxxx'>
                                                            <AnimatedNumber
                                                            value={Hospitalized}
                                                            duration={1300}
                                                            formatValue={formatValue}
                                                            />
                                                        </div>
                                                    </div><br/>
                                                    <div>New Hospitalized{" "}{NewHospitalized}</div>
                                                    
                                            </div>
                                        
                                            <div className="col-auto">
                                                <i className="fas fa-comments fa-2x text-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
            {/* **************** Cards4 ******************** */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-danger shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-sm font-weight-bold text-danger text-uppercase mb-1">Deaths</div>
                                                    <div className="h3 mb-0 font-weight-bold text-gray-800">
                                                        <div class='xxxx'>
                                                            <AnimatedNumber
                                                            value={Deaths}
                                                            duration={1300}
                                                            formatValue={formatValue}
                                                            />
                                                        </div>
                                                    </div><br/>
                                                    <div>New Deaths{" "}{NewDeaths}</div>
                                                    
                                            </div>
                                           
                                            <div className="col-auto">
                                                <i className="fas fa-comments fa-2x text-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        {/* **************** UnderCards ******************** */}                
                        {/* Content Row */}
                        <div className="row">
                            {/* Area Chart */}
                            <div className="col-xl-8 col-lg-7">
                                <div className="card shadow mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                        <div className="chart-area">
                                            {/* <ul>
                                                <li ></li>
                                            </ul> */}
                                            {/* {SevenDays} */}
                                            
                                           {TestFncText()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pie Chart */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="card shadow mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                        <div className="chart-pie pt-4 pb-2">
                                        
                                        </div>

                                        {/* <div className="mt-4 text-center small">
                                            <span className="mr-2">
                                                <i className="fas fa-circle text-primary" /> Direct
                                            </span>
                                            <span className="mr-2">
                                                <i className="fas fa-circle text-success" /> Social
                                            </span>
                                            <span className="mr-2">
                                                <i className="fas fa-circle text-info" /> Referral
                                            </span>
                                        </div> */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Row */}
                        {TestFncText()}
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
