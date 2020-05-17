import React, { Fragment,useState, useEffect } from 'react'
import './Components/App.css';
import axios from 'axios';
import moment from 'moment'
import Box from "@material-ui/core/Box";
import "bootstrap/dist/css/bootstrap.css";
import Card from '@material-ui/core/Card';
import Zoom from '@material-ui/core/Zoom';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Badge from '@material-ui/core/Badge';
import Radio from '@material-ui/core/Radio';
// import socketIOClient from 'socket.io-client';
import Avatar from '@material-ui/core/Avatar';
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Drawer from "@material-ui/core/Drawer";
import Select from '@material-ui/core/Select';
// import FaceIcon from '@material-ui/icons/Face';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import {DatePicker} from '@material-ui/pickers';
import Divider from "@material-ui/core/Divider";
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from "@material-ui/core/Collapse";
import TextField from '@material-ui/core/TextField';
import "react-datepicker/dist/react-datepicker.css";
import AlertTitle from '@material-ui/lab/AlertTitle';
import { withStyles} from "@material-ui/core/styles";
import { FaBoxOpen, FaReceipt} from "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from "@material-ui/core/styles";
import DialogContentText from '@material-ui/core/DialogContentText';



    const useStyles = makeStyles({
        list: { width: 250}
      });
    
    // var dateFormat = require('dateformat');
    
    const NewCase =()=>{
        
        window.onload = function() {
            Menu();
            OhSend();
            // OhResponse();
            OhReceived ();
            TimeRanger();
            handleClickxxB2();
            handleClickxxB1();
        }
        
        const [open, setOpen] = useState(false);
        const [OpenconfirmAccept, setOpenconfirmAccept] = useState(false);
    
        // const [OHwow, setOHwow] = useState();
        const [ShowAddressxx, setShowAddressxx] = useState();
        const [DateTime, setDateTime] = useState();
        const [Monthx, setMonthx] = useState();
        const [Yearx, setYearx] = useState();
        const [TinyAdderess, setTinyAdderess] = useState();
        const [DataBoxL, setDataBoxL] = useState([]);
        const [DataBoxR, setDataBoxR] = useState([]);
        const [DataBoxRec, setDataBoxRec] = useState([]);
    
    
        const [openx, setOpenx] = useState(true);
        const handleClickxx=(item)=> {
            console.log("Handle Clicked...."+item.Id_parcel);
            console.log(openx)
            setOpenx({...openx,[item.Id_parcel]:!openx[item.Id_parcel]});
            }
        const [openB1, setOpenB1] = useState(true);
        const handleClickxxB1=(item)=> {
            // console.log("Handle Clicked...."+'B1');
            // console.log(openB2)
            setOpenB1({...openB1,['B1']:!openB1['B1']});
            }
        const [openB2, setOpenB2] = useState(true);
        const handleClickxxB2=(item)=> {
            // console.log("Handle Clicked...."+'B2');
            // console.log(openB2)
            setOpenB2({...openB2,['B2']:!openB2['B2']});
            }
    
            const [state, setState] = React.useState({
                right: false
              });
            const toggleDrawer = (side, open) => event => {
            setState({ ...state, [side]: open });
            };
            const sideList = side => (
                <div
                  className={classes.list}
                  role="presentation"
                //   id="borderTest"
                  >
                    <Card elevation={1} variant="outlined "  id='shitCardTop1'>
                        <h3 className='text-center p-4' id='useFont'>เลือกเดือน</h3>
                    </Card>
                    <Card elevation={5}>
                        <div class='text-center ml-3 m-3 p-1' id='shitCardxx'>
                            <DatePicker
                                id='shitCardxx'
                                variant="inline"
                                openTo="month"
                                orientation="portrait"
                                inputProps={{style: {fontFamily:'Mitr'}}} 
                    
                                // animateYearScrolling='true'
                                views={["year", "month"]}
                                value={SelectedDate}
                                onChange={(date)=>{SetMonth(date)}}/>
                        
                            <Button variant="contained" color="secondary" onClick={()=>{Reload()}} size="large" id='Spacing'>
                            ล้างค่า
                            </Button>
                        </div>
                    </Card>
                </div>
              );
    
        const [SName, setSName] = useState([]); 
        function SNameChange (e){ 
            setSName(e.target.value) }
        const [SPhone, setSPhone] = useState();
        function SPhonehange (e){ 
            setSPhone(e.target.value) }
        const [Addressza, setAddressza] = useState(" ");
          
        
        const [RName, setRName] = useState();
        function RNameChange (e){ 
            setRName(e.target.value) }  
        const [RPhone, setRPhone] = useState();
        function RPhoneChange (e){ 
            setRPhone(e.target.value) }
        const [Addressza2, setAddressza2] = useState();
            
        
        const [PName, setPName] = useState();
        function PNameChange (e){ 
            setPName(e.target.value) }
        const [Dparcel, setDparcel] = useState();
        function DparcelChange (e){ 
            setDparcel(e.target.value) }
        
        const [RRName, setRRName] = useState();
        function RRNameChange (e){ 
            setRRName(e.target.value) }
        /*
        ! Modal side
        */
    
        const [GetIDParcel, setGetIDParcel] = useState();
        const [SNameR, setSNameR] =useState();
        const [SPhoneR, setSPhoneR] =useState();
        const [SAddressR, setSAddressR] =useState();
    
        const [RNameR, setRNameR] =useState();
        const [RPhoneR, setRPhoneR] =useState();
        const [RAddressR, setRAddressR] =useState();
    
        const [PNameR, setPNameR] =useState();
        const [DparcelR, setDparcelR] =useState();
    
        const [RRNameR, setRRNameR] = useState();
        const [checked, setChecked] = React.useState('ครบ');
        const handleChange = event => {
            setChecked(event.target.value);
          };
        const [SelectedDate, setSelectedDate] = useState(new Date()); 
        const [Monthza, setMonthza] = useState('All'); 
        const [Yearza, setYearza] = useState('All'); 
         /*
        ! Right side
        */
    
          const BoxStsProps1 = {
            bgcolor: "background.paper",
            borderColor: "coral",
            color: "coral",
            m: 1,
            border: 1,
            fontFamily:'Mitr',
            style: { width: "5rem", height: "2rem",textAlign: "center" }
          };
          const BoxStsProps2 = {
            bgcolor: "background.paper",
            borderColor: "green",
            color: "green",
            m: 1,
            border: 1,
            fontFamily:'Mitr',
            style: { width: "5rem", height: "2rem",textAlign: "center" }
          };
           /*
            ! ส่ม-เขียว indicator
            */
          const classes = useStyles();
    
        function ShowData (item){
        
            var info ={
                    params: {
                        id:item.Id_parcel
                    }} 
            setGetIDParcel(item.Id_parcel)
            
            
            axios.get('http://localhost:4000/specificdata',info)
                .then(function (response){
                    const dataSpecific = response.data;
                    // console.log(dataSpecific)

                    dataSpecific.map((item)=>
                        setSNameR(item.Sender_Name),
                        setSPhoneR(item.Sender_Phone),
                        setSAddressR(item.Sender_Address),

                        setRNameR(item.Receiver_Name),
                        setRPhoneR(item.Receiver_Phone),
                        setRAddressR(item.Receiver_Address),

                        setPNameR(item.Parcel_Name),
                        setDparcelR(item.Parcel_Description),
                        setRRNameR(item.Real_Receiver_Name),
            )})}
    
        function PostShit (e){
    
            var formData = {
                SName:SName,
                SPhone:SPhone,
                Addressza:Addressza,
                RName:RName,
                RPhone:RPhone,
                Addressza2:Addressza2,
                PName:PName,
                Dparcel:Dparcel,
                DateTime:DateTime,
                Monthx:Monthx,
                Yearx:Yearx
            }
    
            axios.post('http://localhost:4000/PostParcel', formData)
                .then(function (response) {
                    console.log(response);
              })
                .catch(function (error) {
                    console.log(error);
              });
    
              TimeRanger();
              
                // eslint-disable-next-line
                if (SName!==null&&SName!=="", SPhone!==null&&!SPhone=="", Addressza!==null&&Addressza!=="", RName!==null&&RName!=="",
                // eslint-disable-next-line
                RPhone!==null&&RPhone!=="", Addressza2!==null&&Addressza2!=="", PName!==null&&PName!=="", Dparcel!==null&&Dparcel!=="") {
                    return(alert('เพิ่มพัสดุสำเร็จ'),
                    window.location.reload(false)
                    )}}

        function PushParcel (e){
            e.preventDefault()
            setTimeout(() => {
                setOpen(false);
                PostShit();
                }, 500);  
                }
    
        function Accept (){
            var accept ={
                id:GetIDParcel,
                RRName:RRName,
                Check:checked}
            axios.put('http://localhost:4000/accept',accept)
                .then(function (response){
                    // ohWow();  
            })}

        function ShortAddress(item){
            const addressShort = item.Receiver_Address
            const Shortaddress = addressShort.split('-')[0]
            // console.log(SmallAddress)
            return(Shortaddress)
            }
            /*
                !Short Address
            */
        const Menu =()=>{
            axios.get('http://localhost:4000/address')
            .then(function(response){
                const dataAddress = response.data;
                const DropdownAddress = dataAddress.map((item) =>
                        <option 
                        key={ item.ID_ADDRESS } 
                        value={ item.Address_Full} 
                        // onChange={ ()=> { setAddressza(item.Address_Name) }} 
                        fullwidth >
                            { item.Address_Name}
                    </option>)
                    // <p>{item.Address_Name}</p>)
                    
                    setShowAddressxx(DropdownAddress)}
                   )}
            /*
                !Dropdown Address
            */
        
        function TimeRanger(){
            var DateTime = moment().format('L') +' '+moment().format('LT');
            var Day = moment().format('DD');  
            var Month = moment().format('MMMM'); 
            var Year = moment().format('YYYY');  
            setDateTime(DateTime)
            setMonthx(Month)
            setYearx(Year)
            // console.log('TimeRanger')
            console.log(DateTime)
            console.log(Day)
            console.log(Month)
            console.log(Year)
            }
    
        function SetMonth(date){
            console.log(date)
            var fullDate = date
            setSelectedDate(fullDate)
            // var Month = dateFormat(fullDate, "mmmm");
            // var Year = dateFormat(fullDate, "yyyy");
            // setMonthza(Month)
            // setYearza(Year)
            // console.log(fullDate)
            // console.log(Month)
            // console.log(Year)
            OhSend();
            OhReceived ();
            }
            /*
                !Select month side bar
            */

        function SelectAccept(item){
            ShowData (item);
            handleClickOpenConfirmAccept();
            }
             /*
                !ClickToAccept
            */
    
    
        function OhSend (){
            var info ={
                params: {
                    Monthza:Monthza,
                    Yearza:Yearza
                }}
    
            return axios.get('http://localhost:4000/OhSent',info) 
            .then(function (response) {
                const data = response.data;
                // console.table(data)
                setDataBoxL(data);
                
                })}
        
        function OhReceived (){
            var info ={
                params: {
                    Monthza:Monthza,
                    Yearza:Yearza
                }}
    
            return axios.get('http://localhost:4000/OhReceived',info)
            .then(function (response){
                const data = response.data;
                setDataBoxRec(data);
                // console.table(data)
                })}
    
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
            window.location.reload(false);
        };
        /*
            !Open-Close Dialog
        */
    
        const handleClickOpenConfirmAccept = () => {
                setOpenconfirmAccept(true);
        };
        const handleClickCloseConfirmAccept = () => {
            setOpenconfirmAccept(false);
        };
        const handleClickCloseConfirmAcceptWihtAccept= (e) => {
            e.preventDefault()
            Accept();
            setOpenconfirmAccept(false);
            window.location.reload(false);
            alert("ผู้รับคือ : "+ RRName)
        };
        /*
            !Open-Close-Submit Accept Dialog
        */
    
        function Reload(){
            window.location.reload(false)
        }
        useEffect(() => {
            // console.log(DataBoxL)
            // console.log("UseEffect")
            // console.log(SelectedDate)
            // console.log("Year")
            // console.log(Yearza)
        })

    return (

       <Fragment>
            {/* Page Wrapper */}

{/* **************** Dialog ******************** */}            
            <Dialog 
                fullWidth 
                open={open} 
                id='shitDialog'
                className='p-5' 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title" 
                class='container col col-sm-4 col-md-12 col-xl-8'
                >
                    <DialogTitle 
                    id="form-dialog-title" 
                    className='text-center mt-3'>
                        <h1 id='useFont'>ข้อมูลพัสดุที่ส่ง </h1>
                    </DialogTitle><hr/>
                    <DialogContent>
                    
                    <DialogTitle 
                    id="form-dialog-title" 
                    className='text-center'>
                        <h4 id='useFont'>ผู้ส่ง</h4>
                    </DialogTitle>
                    <form
                    id="SEND"
                    name="SEND"
                    onSubmit={ PushParcel }>
                        <TextField 
                        required 
                        autoFocus
                        fullWidth
                        type="text"
                        label="ชื่อผู้ส่ง" 
                        id="nameSender" 
                        variant="outlined" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ SName }
                                onChange={ SNameChange }
                        />
                        <br/><br/>

                        <TextField 
                        required
                        fullWidth
                        type="text"
                        id="phoneSender" 
                        label="เบอร์โทรผู้ส่ง" 
                        variant="outlined"
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={SPhone}
                                onChange={ SPhonehange }
                        /><br/><br/>

                        <FormControl required id='formControl'>
                        <InputLabel htmlFor="age-native-simple" id='useFont'>ที่อยุ่สาขาที่ส่ง</InputLabel>
                        <Select 
                        native
                        required 
                        fullwidth
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาต้นทาง" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Addressza } 
                                onChange={ (e)=>{ setAddressza(e.target.value) } } 
                        >
                            { ShowAddressxx } 
                        </Select>
                        </FormControl><br/><br/>
                        
                                <TextField 
                                disabled
                                variant="outlined"  
                                multiline rows="2" 
                                id="addresstextarea" 
                                InputProps={{readOnly: true, }} 
                                className='col col-11 float-right'
                                    inputProps={{style: {fontFamily:'Mitr'}}} 
                                    InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                        value={ Addressza }
                                /><br/><br/><br/><hr/>



                        <DialogTitle 
                        id="form-dialog-title" 
                        className='text-center'>
                            <h4 id='useFont'>ผู้รับ </h4>
                        </DialogTitle>

                        <TextField 
                        required 
                        fullWidth
                        type="text"
                        label="ชื่อผู้รับ" 
                        id="nameSender" 
                        variant="outlined" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={RName}
                                onChange={ RNameChange }
                        /><br/><br/>
                        <TextField 
                        required 
                        fullWidth
                        type="text"
                        id="phoneSender" 
                        variant="outlined"
                        label="เบอร์โทรผู้รับ" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={RPhone}
                                onChange={ RPhoneChange }
                        /><br/><br/>

                        <FormControl required id='formControl'>
                        <InputLabel htmlFor="age-native-simple" id='useFont'>ที่อยุ่สาขาที่รับ</InputLabel>
                        <Select 
                        native
                        required 
                        fullwidth
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาปลายทาง" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Addressza2 } 
                                onChange={ (e)=>{ setAddressza2(e.target.value) } }  
                        >
                            { ShowAddressxx }
                        </Select>
                        </FormControl><br/><br/>
                                <TextField  
                                disabled
                                variant="outlined"  
                                multiline rows="2" 
                                id="addresstextarea" 
                                className='col col-11 float-right' 
                                    inputProps={{style: {fontFamily:'Mitr'}}} 
                                    InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                        InputProps={{readOnly: true, }} 
                                        value={ Addressza2 }/><br/><br/><br/><hr/>

                    

                        <DialogTitle 
                        id="form-dialog-title" 
                        className='text-center'>
                        <h4 id='useFont'>ข้อมูลของพัสดุ { <FaBoxOpen/> } </h4>
                        </DialogTitle>

                        <TextField 
                        required 
                        fullWidth
                        label="พัสดุ" 
                        type="text"
                        value={PName}
                        id="namePracel" 
                        variant="outlined" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                onChange={ PNameChange }
                        /><br/><br/>
                                    
                        <TextField 
                        required 
                        type="text"
                        value={Dparcel}
                        variant="outlined" 
                        multiline rows="4"
                        label="รายละเอียดของพัสดุ"
                        id="detailpraceltextarea" 
                        onChange={ DparcelChange }
                        className='col col-11 float-right' 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                         />
                        </form>
                    </DialogContent>
                    
                    <DialogActions>
                    <br/><br/><br/><br/>
                    <Button 
                    id='useFont'
                    size="large" 
                    color="secondary"
                    variant="contained" 
                    onClick={ handleClose }  
                    >
                        ยกเลิก
                    </Button>

                    <Button 
                    form="SEND"
                    id='useFont'
                    size="large" 
                    type="submit"
                    color="primary"
                    variant="contained" 
                     >
                        ส่งพัสดุ
                    </Button>

                    </DialogActions>
                    
                </Dialog>


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
                                <div className="col-xl-12 col-md-11 mb-4 ml-3 ">
                                    <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                                        <Card 
                                        elevation={5} 
                                        variant="outlined " 
                                        className='my-5 col  col-md-5 col-lg-5 col-xl-12' 
                                        onClick={handleClickOpen}
                                        id='shitCardxx'>
                                            <h2 className='pl-5 my-1 ' ></h2>
                                            <h4 className='mb-3 ml-5 ' id='useFont2'>ส่งพัสดุ</h4>
                                            <div class='horizonLine2'/>
                                            <br/>
                                        </Card>
                                    </Grid><br/><br/>

                                    <Grid container spacing={5}>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
                                                <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                                                    <Card elevation={1} variant="outlined "  id='shitCardTop1' onClick={()=>{handleClickxxB1("B1")}}>
                                                        <h4 
                                                        className='text-center p-4' 
                                                        id='useFont'>Sent {" "} 
                                                        <Badge 
                                                        badgeContent={DataBoxL.length} 
                                                        color="secondary">
                                                        </Badge>
                                                        </h4>
                                                    </Card>
                                                        <Collapse key={'B1'} in={openB1['B1']}>
                                                        <List>
                                                            {DataBoxL.map(item=>{
                                                                // console.log(item)
                                                                // console.table(item.status)
                                                                return(
                                                                <div class='border border-top-0'>
                                                                    <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                                                    <ListItemAvatar>
                                                                    <Avatar>
                                                                    </Avatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText  key ={item.Id_parcel} >
                                                                            
                                                                            {item.status=="ส่งแล้ว"?
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Box borderRadius={30} {...BoxStsProps1} >ส่งแล้ว</Box>
                                                                            </Box>:
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                            <Box borderRadius={30} {...BoxStsProps2} >รับแล้ว</Box>
                                                                            </Box>}
                                                                            
                                                                            <strong id='useFont'>{'สาขาที่รับ:'+' '}</strong><span id='useFont2'>{ShortAddress(item)}</span><br/>
                                                                            <strong id='useFont'>{'สถานะพัสดุ:'+' '}</strong><span id='useFont2'>{ item.status }</span><br/>
                                                                            <strong id='useFont'>{'พัสดุ:'+' '}</strong><span id='useFont2'>{ item.Parcel_Name }</span><br/>
                                                                            <strong id='useFont'>{'วันเวลาที่ส่ง:'+' '}</strong><span id='useFont2'>{item.Date_Time}</span><br/>
                                                                        </ListItemText>
                                                                    </ListItem>
                                            
                                                                    
                                                                    <Collapse key={item.Id_parcel} in={openx[item.Id_parcel]}>
                                                                    <div class='horizonLine3'/>
                                                                        <ListItem key={item.Id_parcel}>
                                                                    <ListItemAvatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText key ={item.Id_parcel}>
                                                                            <h2 className='' id='useFont'>รายละเอียด</h2><br/>
                                                                            <strong id='useFont'>{'ชื่อผู้ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Name}</span><br/>
                                                                            <strong id='useFont'>{'เบอร์โทรผู้ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Phone}</span><br/>
                                                                            <strong id='useFont'>{'สาขาที่ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Address}</span><br/><br/>
                                                                            <strong id='useFont'>{'ชื่อผู้รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Name}</span><br/>
                                                                            <strong id='useFont'>{'เบอร์โทรผู้รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Phone}</span><br/>
                                                                            <strong id='useFont'>{'สาขาที่รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Address}</span><br/><br/>
                                                                            <strong id='useFont'>{'พัสดุ:'+' '}</strong><span id='useFont2'>{item.Parcel_Name}</span><br/>
                                                                            <strong id='useFont'>{'รายละเอียดพัสดุ:'+' '}</strong><span id='useFont2'>{item.Parcel_Description}</span><br/><br/>
                                                                            <strong id='useFont'>{'ผู้ลงชื่อรับพัสดุ:'+' '}</strong><span id='useFont2'>{item.Real_Receiver_Name}</span><br/>

                                                                            <div className='row'>
                                                                            <div class="col col-3"></div>
                                                                            <div class="col col-3"></div>
                                                                                <div className='row col my-2'>
                                                                                    <div className='row'>
                                                                                        <div>
                                                                                            {item.status=="ส่งแล้ว"?
                                                                                            <Alert 
                                                                                                key ={item.Id_parcel} 
                                                                                                id='AlertButton'
                                                                                                severity="success"
                                                                                                onClick={ ()=>{ SelectAccept(item) } }>
                                                                                                <AlertTitle id='useFont'>รับพัสดุ</AlertTitle>
                                                                                            </Alert> :null
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ListItemText>
                                                                        </ListItem>
                                                            </Collapse>
                                                            <Divider />
                                                            </div>
                                                            )})}
                                                        </List>
                                                        
                                                        </Collapse>
                                                </Card>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
                                                <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                                                    <Card elevation={1} variant="outlined "  id='shitCardTop1' onClick={()=>{handleClickxxB2("B2")}}>
                                                        <h4 
                                                        className='text-center p-4' 
                                                        id='useFont'>Done {" "} 
                                                        <Badge 
                                                        badgeContent={DataBoxRec.length} 
                                                        color="secondary">
                                                        </Badge>
                                                        </h4>
                                                    </Card>
                                                        <Collapse key={'B2'} in={openB2['B2']}>
                                                        <List>
                                                            {DataBoxRec.map(item=>{
                                                                // console.log(item)
                                                                // console.table(item.status)
                                                                return(
                                                                <div class='border border-top-0'>
                                                                    <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                                                    <ListItemAvatar>
                                                                    <Avatar>
                                                                    </Avatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText  key ={item.Id_parcel} >
                                                                            
                                                                            {item.status=="ส่งแล้ว"?
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Box borderRadius={30} {...BoxStsProps1} >ส่งแล้ว</Box>
                                                                            </Box>:
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                            <Box borderRadius={30} {...BoxStsProps2} >รับแล้ว</Box>
                                                                            </Box>}
                                                                            
                                                                            <strong id='useFont'>{'สาขาที่รับ:'+' '}</strong><span id='useFont2'>{ShortAddress(item)}</span><br/>
                                                                            <strong id='useFont'>{'สถานะพัสดุ:'+' '}</strong><span id='useFont2'>{ item.status }</span><br/>
                                                                            <strong id='useFont'>{'พัสดุ:'+' '}</strong><span id='useFont2'>{ item.Parcel_Name }</span><br/>
                                                                            <strong id='useFont'>{'วันเวลาที่ส่ง:'+' '}</strong><span id='useFont2'>{item.Date_Time}</span><br/>
                                                                        </ListItemText>
                                                                    </ListItem>
                                            
                                                                    <Collapse key={item.Id_parcel} in={openx[item.Id_parcel]}>
                                                                    <div class='horizonLine3'/>
                                                                        <ListItem key={item.Id_parcel}>
                                                                    <ListItemAvatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText key ={item.Id_parcel}>
                                                                            <h2 className='' id='useFont'>รายละเอียด</h2><br/>
                                                                            <strong id='useFont'>{'ชื่อผู้ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Name}</span><br/>
                                                                            <strong id='useFont'>{'เบอร์โทรผู้ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Phone}</span><br/>
                                                                            <strong id='useFont'>{'สาขาที่ส่ง:'+' '}</strong><span id='useFont2'>{item.Sender_Address}</span><br/><br/>
                                                                            <strong id='useFont'>{'ชื่อผู้รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Name}</span><br/>
                                                                            <strong id='useFont'>{'เบอร์โทรผู้รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Phone}</span><br/>
                                                                            <strong id='useFont'>{'สาขาที่รับ:'+' '}</strong><span id='useFont2'>{item.Receiver_Address}</span><br/><br/>
                                                                            <strong id='useFont'>{'พัสดุ:'+' '}</strong><span id='useFont2'>{item.Parcel_Name}</span><br/>
                                                                            <strong id='useFont'>{'รายละเอียดพัสดุ:'+' '}</strong><span id='useFont2'>{item.Parcel_Description}</span><br/><br/>
                                                                            <strong id='useFont'>{'ผู้ลงชื่อรับพัสดุ:'+' '}</strong><span id='useFont2'>{item.Real_Receiver_Name}</span><br/>

                                                                            <div className='row'>
                                                                            <div class="col col-3"></div>
                                                                            <div class="col col-3"></div>
                                                                                <div className='row col my-2'>
                                                                                    <div className='row'>
                                                                                        <div>
                                                                                            {item.status=="ส่งแล้ว"?
                                                                                            <Alert 
                                                                                                key ={item.Id_parcel} 
                                                                                                id='AlertButton'
                                                                                                severity="success"
                                                                                                onClick={ ()=>{ SelectAccept(item) } }>
                                                                                                <AlertTitle id='useFont'>รับพัสดุ</AlertTitle>
                                                                                            </Alert> :null
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ListItemText>
                                                                        </ListItem>
                                                            </Collapse>
                                                            <Divider />
                                                            </div>
                                                            )})}

                                                        </List>
                                                        </Collapse>
                                                </Card>
                                        </Grid>
                                    </Grid>

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


{/* **************** AcceptDialog ******************** */}  
                <div className='containter row pl-2'>       
                    <div >
                                <Dialog fullWidth 
                                    open={OpenconfirmAccept} onClose={handleClickCloseConfirmAccept} 
                                    aria-labelledby="form-dialog-title" id='shitDialog2'>
                                        <h3 id='useFont' className='ml-4 mt-4 mb-3'>การยืนยันรับพัสดุ</h3>
                                        <DialogContent>
                                            <DialogContentText id='useFont'>
                                                หากต้องการที่จะรับ <strong >{PNameR}</strong>  โปรดกรอกชื่อเเละกดปุ่ม <strong>"ยืนยัน"</strong>.
                                            </DialogContentText>
                                            <form id="SENDACC" name="SENDACC" onSubmit={ handleClickCloseConfirmAcceptWihtAccept }>
                                                <TextField
                                                    required
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="ชื่อผู้รับ"
                                                    inputProps={{style: {fontFamily:'Mitr'}}} 
                                                    InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                                    value={ RRName }
                                                    type="text"
                                                    onChange={ RRNameChange }
                                                    fullWidth/>
                                                    <br/><br/>
                                                    {/* <Checkbox
                                                        checked={checked}
                                                        onChange={handleChange}
                                                        value="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    /> */}
                                                    <p id='useFont'>ความครบถ้วนของพัสดุ</p>
                                                    <Radio
                                                    
                                                        checked={checked === 'ครบ'}
                                                        onChange={handleChange}
                                                        value="ครบ"
                                                        color='primary'
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    /><span id='useFont'>ครบ</span>
                                                    <Radio
                                                        checked={checked === 'ไม่ครบ'}
                                                        onChange={handleChange}
                                                        value="ไม่ครบ"
                                                        color='secondary'
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'B' }}
                                                    /><span id='useFont'>ไม่ครบ</span>
                                                    
                                            </form>
                                        </DialogContent>
                                        
                                        <DialogActions>
                                        <Button 
                                            id='AlertButton2' 
                                            variant="contained" 
                                            color="secondary"
                                            size="large"
                                            onClick={handleClickCloseConfirmAccept}><AlertTitle id='useFont'>ยกเลิก</AlertTitle>
                                        </Button>
                                        <Button 
                                            form="SENDACC"
                                            type="submit"
                                            id='AlertButton' 
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            // onClick={handleClickCloseConfirmAcceptWihtAccept}
                                            >
                                                <AlertTitle id='useFont'>ยืนยัน</AlertTitle>
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                    </div>
                </div>  
            </Fragment>



       
    )
}
export default NewCase