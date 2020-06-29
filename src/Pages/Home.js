import React, { Fragment,useState, useEffect } from 'react'
import './Components/App.css';
import axios from 'axios';
import AnimatedNumber from "animated-number-react";
import anime from 'animejs/lib/anime.es.js'
import moment from 'moment'
import male from './Components/male.svg'
import female from './Components/female.svg'
import fever from './Components/fever.svg'
import exercise from './Components/exercise.svg'
import patient from './Components/patient.svg'
import funeral from './Components/funeral.svg'
import { Treemap, PieChart, Pie,ResponsiveContainer, 
    ComposedChart, LineChart, Line, AreaChart, 
    Area, CartesianGrid, BarChart, Bar, XAxis, 
    YAxis, Tooltip, Legend, Sector, Cell } from 'recharts';

import { Link ,Redirect} from 'react-router-dom';
import {Nav} from 'react-bootstrap';


export default function Home() {
    
    // window.onload = function() {
    //         Get7Days();
    //         GetDataCovid();
    //         GetProvinceAndGender();
    //         TimeRanger ()
    // }
    
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
    const [Province, setProvince] = useState([]);
    const [Gender, setGender] = useState([]);
    const [DailyData, setDailyData] = useState([]);
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
            const QueryData = Original.Data 
            setDailyData(QueryData)
        })}

    function GetProvinceAndGender (){
        return axios.get('https://covid19.th-stat.com/api/open/cases/sum') 
        .then(function (response) {
            const data = response.data;
            setProvince(data.Province)
            setGender(data.Gender)
            
            
        },[])}

    function TimeRanger (){
        const CurrentTime = moment().format('L'); 
        const PassedTime = moment().subtract(7, 'days').calendar();
        // console.table(CurrentTime)
        // console.table(PassedTime)
    }


    function ChartNCandNR (){
        const Selected7Days = DailyData.slice(-7)
        return(
            // old 600 350
            <ResponsiveContainer >
                <ComposedChart width={750} height={320} data={Selected7Days}>
                    <XAxis dataKey="Date" stroke="#8884d8" />
                    <YAxis/>
                    <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                    <Legend/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Bar name="New Infected" dataKey="NewConfirmed" fill="#5B8BEB" barSize={30} />
                    <Bar name="New Recovered" dataKey="NewRecovered" fill="#AEED76" barSize={30} />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }

    function ChartConfirmedandRecovered (){
        return(
            <ResponsiveContainer>
                <ComposedChart width={750} height={320} data={DailyData}>
                    <XAxis dataKey="Date" stroke="#8884d8"  />
                    <YAxis/>
                    <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                    <Legend verticalAlign="bottom" height={36}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Area dataKey="Confirmed" fill="#5B8BEB" barSize={30} stroke="#5B8BEB"/>
                    <Area dataKey="Recovered" fill="#AEED76" barSize={30} stroke="#AEED76"/>
                </ComposedChart>
            </ResponsiveContainer>
        )
    }

    const Onloadxx =()=>{
        Get7Days();
            GetDataCovid();
            GetProvinceAndGender();
            TimeRanger ()
    }

    useEffect(() => {
        Onloadxx()
        // console.log("UseEffect")
        // console.log(xxxx)
        // console.log(TableCovid)
        // console.table(Province)
        // console.log(Gender)
        // console.table("State Date",Date)
        // console.log(SevenDays)
        // console.log(...DailyData)
        
        
        }, [])

    
    return (

        <Fragment>
            {/* Page Wrapper */}
        
{/* **************** Sidebar ******************** */}
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

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

{/* **************** Content ******************** */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column border border-danger">
                {/* Main Content */}
                <div id="content" className=' border border-info'>

    {/* **************** TopBar Box ******************** */}
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* <button onClick={() =>Onloadxx()}>wow</button> */}
        {/* **************** BigBoxGirl ******************** */}
                        {/* Topbar Navbar */}
                        {/* <ul className="navbar-nav ml-auto "> */}
                            {/* Nav Item - Messages */}
                            {/* <div className="topbar-divider d-none d-sm-block " /> */}

        {/* **************** BoxGirl ******************** */}
                            {/* Nav Item - User Information */}
                            {/* <li className="nav-item dropdown no-arrow ">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Name Shit</span>
                                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                </a> */}

        {/* **************** DropdownGirl ******************** */}
                                {/* Dropdown - User Information */}
                                {/* <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in " aria-labelledby="userDropdown">
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
                        </ul> */}
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
                            <p class='mb-4' id='runnn'><p >updated: {UpdateDate}</p></p><br/>

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
                                            <img style={{ width: "15%", opacity: "0.5"}} src={fever}/>
                                            
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
                                            <img style={{ width: "15%", opacity: "0.5"}} src={exercise}/>

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
                                            <img style={{ width: "15%", opacity: "0.5"}} src={patient}/>

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
                                            <img style={{ width: "15%", opacity: "0.5"}} src={funeral}/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        {/* **************** UnderCards ******************** */}                
                        {/* Content Row */}
                        <div className="row">
                            {/* Area Chart */}
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="card shadow mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Information of infected in 7 Days</h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                        <div className="chart-area pb-2">
                                            {/* {Monitor()} */}
                                            {ChartNCandNR()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pie Chart */}
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="card shadow mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Information since January</h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                        <div className="chart-pie pt-4 pb-5">
                                            {ChartConfirmedandRecovered()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pie Chart */}
                            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-6">
                                <div className="card shadow pb-5 mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Infecter's gender </h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                            <div className="row">
                                                
                                                <div class='col col-5 col-md-5 col-sm-12 col-xs-12'>
                                                <img style={{ width: "70%"}} src={male}/>
                                                <br/><br/>
                                                    <h3>Male: {Gender.Male}</h3>
                                                </div>

                                                <div class='col '/>

                                                
                                                <div class='col col-5 col-md-5 col-sm-12 col-xs-12'>
                                                <img style={{ width: "70%"}} src={female}/>
                                                    <br/><br/>
                                                    <h3>Female: {Gender.Female}</h3>
                                                </div>
                                            </div>    
                                    </div>
                                </div>
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
                            <h5>Made with ❤️  by @beyondsundae </h5>
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>

    )
}
