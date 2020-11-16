import React, { Fragment,useState, useEffect,forwardRef } from 'react'
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
import { PieChart, Pie,ResponsiveContainer, 
    ComposedChart, Area, CartesianGrid, Bar, XAxis, 
    YAxis, Tooltip, Legend, Cell } from 'recharts';

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import MaterialTable from "material-table";

import TableIcons from './Parts/TableIcons'

import { Link ,Redirect} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Header from './Parts/Header';
import SideBar from './Parts/SideBar';
import Footer from './Parts/Footer';


export default function Home() {

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

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const dataProvince = {
        columns : [
            {label: 'name', field: 'Name', width: 10 },
            {label: 'amount', field: 'Amount', width: 15 }
        ],

        rows : [
            {name: 'Bangkok', amount: Province.Bangkok}, {name: 'Phuket', amount: Province.Phuket},{name: 'Nonthaburi', amount: Province.Nonthaburi},
            {name: 'Samut Prakan', amount: Province["Samut Prakan"]}, {name: 'Yala', amount: Province.Yala},{name: 'Songkhla', amount: Province.Songkhla},
            {name: 'Chonburi', amount: Province["Chonburi"]}, {name: 'Pattani', amount: Province.Pattani},{name: 'Narathiwat', amount: Province.Narathiwat},
            {name: 'Chiang Mai', amount: Province["Chiang Mai"]}, {name: 'Pathum Thani', amount: Province["Pathum Thani"]},{name: 'Nakhon Pathom', amount: Province["Nakhon Pathom"]},
            {name: 'Chumphon', amount: Province.Chumphon}, {name: 'Chachoengsao', amount: Province.Chachoengsao},{name: 'Krabi', amount: Province.Krabi},
            {name: 'Nakhon Ratchasima', amount: Province["Nakhon Ratchasima"]}, {name: 'Satun', amount: Province.Satun},{name: 'Surat Thani', amount: Province["Surat Thani"]},
            {name: 'Prachuap Khiri Khan', amount: Province["Prachuap Khiri Khan"]}, {name: 'Ubon Ratchathani', amount: Province["Ubon Ratchathani"]},{name: 'Phatthalung', amount: Province.Phatthalung},
            {name: 'Samut Sakhon', amount: Province["Samut Sakhon"]}, {name: 'Buriram', amount: Province.Buriram},{name: 'Nakhon Si Thammarat', amount: Province["Nakhon Si Thammarat"]},
            {name: 'Udon Thani', amount: Province["Udon Thani"]}, {name: 'Sa Kaeo', amount: Province["Sa Kaeo"]},{name: 'Surin', amount: Province.Surin},
            {name: 'Kanchanaburi', amount: Province.Kanchanaburi}, {name: 'Nakhon Sawan', amount: Province["Nakhon Sawan"]},{name: 'Prachinburi', amount: Province.Prachinburi},
            {name: 'Chiang Rai', amount: Province["Chiang Rai"]}, {name: 'Sisaket', amount: Province.Sisaket},{name: 'Trang', amount: Province.Trang},
            {name: 'Ratchaburi', amount: Province.Ratchaburi}, {name: 'Suphan Buri', amount: Province["Suphan Buri"]},{name: 'Rayong', amount: Province.Rayong},
            {name: 'Phitsanulok', amount: Province.Phitsanulok}, {name: 'Khon Kaen', amount: Province["Khon Kaen"]},{name: 'Mae Hong Son', amount: Province["Mae Hong Son"]},
            {name: 'Saraburi', amount: Province.Saraburi}, {name: 'Loei', amount: Province.Loei},{name: 'Phra Nakhon Si Ayutthaya', amount: Province["Phra Nakhon Si Ayutthaya"]},
            {name: 'Lampang', amount: Province.Lampang}, {name: 'Lamphun', amount: Province.Lamphun},{name: 'Mukdahan', amount: Province.Mukdahan},
            {name: 'Phetchabun', amount: Province.Phetchabun}, {name: 'Phayao', amount: Province.Phayao},{name: 'Sukhothai', amount: Province.Sukhothai},
            {name: 'Tak', amount: Province.Tak}, {name: 'Nong Bua Lamphu', amount: Province["Nong Bua Lamphu"]},{name: 'Chanthaburi', amount: Province.Chanthaburi},
            {name: 'Roi Et', amount: Province["Roi Et"]}, {name: 'Uttaradit', amount: Province.Uttaradit},{name: 'Kalasin', amount: Province.Kalasin},
            {name: 'Chaiyaphum', amount: Province.Chaiyaphum}, {name: 'Nong Khai', amount: Province["Nong Khai"]},{name: 'Phetchaburi', amount: Province.Phetchaburi},
            {name: 'Nakhon Phanom', amount: Province["Nakhon Phanom"]}, {name: 'Phang Nga', amount: Province["Phang Nga"]},{name: 'Lopburi', amount: Province.Lopburi},
            {name: 'Amnat Charoen', amount: Province["Amnat Charoen"]}, {name: 'Nakhon Nayok', amount: Province["Nakhon Nayok"]},{name: 'Phrae', amount: Province.Phrae},
            {name: 'Uthai Thani', amount: Province["Uthai Thani"]}, {name: 'Yasothon', amount: Province.Yasothon},{name: 'Sakon Nakhon', amount: Province["Sakon Nakhon"]},   
            {name: 'Samut Songkhram', amount: Province["Samut Songkhram"]}, {name: 'Maha Sarakham', amount: Province["Maha Sarakham"]}
        ]
    }


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
            
        })}

    function TimeRanger (){
        const CurrentTime = moment().format('L'); 
        const PassedTime = moment().subtract(7, 'days').calendar();
        // console.table(CurrentTime)
        // console.table(PassedTime)
    }

    function ChartNConfirmedandNRecoverd (){
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

    function PieGender (){
        const data = [{name: 'Male', value: Gender.Male}, {name: 'Female', value: Gender.Female}]
        const COLORS = ['#0088FE', '#FFB6C1'];

        return(
            <ResponsiveContainer minHeight={400}>
            <PieChart >
                <Pie
                    data={data} 
                    innerRadius="0%"
                    outerRadius="80%"
                    fill="#8884d8"
                    paddingAngle={0}
                    isAnimationActive={false}
                    label ={(entry) => entry.name + ": " + entry.value }
                >
                    {
                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
                <Legend/>
                <Tooltip/>
            </PieChart>
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
    
        useEffect(()=>{
            // console.log(Province)
        })
        
    return (

        <Fragment>
            {/* Page Wrapper */}
        
{/* **************** Sidebar ******************** */}
            {/* Sidebar */}
            <SideBar/>
            {/* <div className="col col-xl-1 col-lg-3 col-md-4" /> */}
{/* **************** Content ******************** */}
            {/* Content Wrapper */}
            <div className="d-flex flex-column " >
          
{/* **************** TopBar ******************** */}
                    {/* Topbar */}
                    <Header/>
    
{/* **************** Main ******************** */}
            {/* Main Content */}
            <div id="content">

    {/* **************** ContentBox ******************** */}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        {/* Page Heading */}
                        
                        <div className="d-sm-flex align-items-center justify-content-between mb-1 ">
                            <h1 className="h1 mb-0 text-gray-800">Covid-19 Thailand Situation Reports</h1>
                            {/* <h1 className='wow'></h1> */}
                            
                        </div>
                            <p class='mb-4' id='runnn'><p >updated: {UpdateDate}</p></p><br/>

        {/* **************** Cards ******************** */}
                        {/* Content Row */}
                        <div className="row">

            {/* **************** Cards1 ******************** */}
                            <div className="col-xl-3 col-md-6 mb-4 ">
                                <div className="card border-bottom-primary shadow h-100 py-2">
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
                                <div className="card border-bottom-success shadow h-100 py-2">
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
                                <div className="card border-bottom-warning shadow h-100 py-2">
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
                                <div className="card border-bottom-danger shadow h-100 py-2">
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
                                            {ChartNConfirmedandNRecoverd()}
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
                            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-6 ">
                                <div className="card shadow pb-5 mb-4 ">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Infecter's gender </h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                            <div className="row">
                                                
                                                <div class='col-xl-6 col-lg-6 col-md-6 d-none d-sm-block text-center' >
                                                    <img style={{ width: "50%"}} src={male}/>
                                                    <br/><br/>
                                                </div>
                                                <div class='col-xl-6 col-lg-6 col-md-6 d-none d-sm-block text-center'>
                                                    <img style={{ width: "50%"}} src={female}/>
                                                    <br/><br/>
                                                </div>
                                                <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center' >
                                                    {PieGender()}
                                                </div>
                                            </div>    
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-1 col-lg-12 col-md-12 col-sm-6 d-none"/>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6  d-none">
                                <div className="card shadow pb-5 mb-4 ">
                                        {/* Card Header - Dropdown */}
                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Infecter in each provinces </h6>
                                        </div>
                                        {/* Card Body */}
                                        <div className="card-body border border-danger">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6">
                                                        {/* <MDBDataTable
                                                        striped
                                                        bordered
                                                        small
                                                        data={dataProvince}
                                                        /> */}

                                                    <Paper>
                                                        <TableContainer style={{maxHeight: 240}}>
                                                            <Table stickyHeader >
                                                            <TableHead >
                                                                <TableRow >
                                                                {dataProvince.columns.map(column => (
                                                                    <TableCell
                                                                    
                                                                    key={column.label}
                                                                    style={{ minWidth: column.width,backgroundColor: "gray", color:"white", fontSize: 20 }}
                                                                    >
                                                                    {column.field}
                                                                    </TableCell>
                                                                ))}
                                                                </TableRow>
                                                            </TableHead>

                                                            <TableBody >
                                                                {dataProvince.rows
                                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                .map(row => {
                                                                    return (
                                                                    <TableRow hover key={row.name} >
                                                                        {dataProvince.columns.map(column => {
                                                                        const value = row[column.label];
                                                                        return <TableCell key={column.label}>{value}</TableCell>;
                                                                        })}
                                                                    </TableRow>
                                                                    );
                                                                })}
                                                            </TableBody>
                                                            </Table>
                                                        </TableContainer>

                                                        <TablePagination
                                                            rowsPerPageOptions={[10, 25, 100]}
                                                            component="div"
                                                            count={dataProvince.rows.length}
                                                            rowsPerPage={rowsPerPage}
                                                            page={page}
                                                            onChangePage={handleChangePage}
                                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                                        />
                                                    </Paper>
                                                    </div> 
                                                </div>    
                                        </div>
                                    </div>
                            </div>

                            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-6 ">
                                <div className="card shadow pb-5 mb-4 ">
                                        {/* Card Header - Dropdown */}
                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Infecter in each provinces </h6>
                                        </div>
                                        {/* Card Body */}
                                        <div className="card-body ">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6">
                                                    <div style={{ maxWidth: "100%" }}>
                                                        <MaterialTable
                                                        title="Amount of infecters"
                                                        icons={TableIcons}
                                                        columns={[
                                                            {title: 'Name', field: 'name'},
                                                            {title: 'Amount', field: 'amount'}
                                                        ]}
                                                        data={
                                                            dataProvince.rows
                                                        }
                                                        options={{
                                                            exportButton: true,

                                                            headerStyle: {
                                                                backgroundColor: 'gray',
                                                                fontSize: 20,
                                                                borderRadius: '2%',
                                                                color: '#FFF'
                                                              },
                                                            
                                                          }}
                                                        />
                                                    </div>
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
                <Footer/>
            </div>

        </Fragment>

    )
}
