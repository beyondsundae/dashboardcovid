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
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/core/styles";
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import MomentUtils from '@date-io/moment';
  import DateFnsUtils from '@date-io/date-fns';


    const useStyles = makeStyles({
        list: { width: 250}
      });
    
    var dateFormat = require('dateformat');
    
    const NewCase =()=>{
        
        window.onload = function() {
            MenuAddress();
            // OhSend();
            // OhResponse();
            // OhReceived ();
            Quarantine ()
            YouRiskNow ()
            NoCovid ()
            TimeRanger();
            handleClickxxB2();
            handleClickxxB1();
        }
        
        const [open, setOpen] = useState(false);
        const [OpenconfirmAccept, setOpenconfirmAccept] = useState(false);
    
        // const [OHwow, setOHwow] = useState();
        const [ShowAddressxx, setShowAddressxx] = useState();
        const [DateTimeNow, setDateTimeNow] = useState();
        const [Monthx, setMonthx] = useState();
        const [Yearx, setYearx] = useState();
        const [DataBoxLeft, setDataBoxLeft] = useState([]);
        const [DataBoxMid, setDataBoxMid] = useState([]);
        const [DataBoxRight, setDataBoxRight] = useState([]);
    
    
        const [openx, setOpenx] = useState(true);
        const handleClickxx=(item)=> {
            console.log("Handle Clicked...."+item.ID);
            // console.log(openx)
            setOpenx({...openx,[item.ID]:!openx[item.ID]});
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
    
        // const [state, setState] = React.useState({
        //         right: false
        //       });
        // const toggleDrawer = (side, open) => event => {
        //     setState({ ...state, [side]: open });
        //     };
        //    const sideList = side => (
        //         <div
        //           className={classes.list}
        //           role="presentation"
        //         //   id="borderTest"
        //           >
        //             <Card elevation={1} variant="outlined "  id='shitCardTop1'>
        //                 <h3 className='text-center p-4' id='useFont'>เลือกเดือน</h3>
        //             </Card>
        //             <Card elevation={5}>
        //                 <div class='text-center ml-3 m-3 p-1' id='shitCardxx'>
        //                     <DatePicker
        //                         id='shitCardxx'
        //                         variant="inline"
        //                         openTo="month"
        //                         orientation="portrait"
        //                         inputProps={{style: {fontFamily:'Mitr'}}} 
                    
        //                         // animateYearScrolling='true'
        //                         views={["year", "month"]}
        //                         value={SelectedDate}
        //                         onChange={(date)=>{SetMonth(date)}}/>
                        
        //                     <Button variant="contained" color="secondary" onClick={()=>{Reload()}} size="large" id='Spacing'>
        //                     ล้างค่า
        //                     </Button>
        //                 </div>
        //             </Card>
        //         </div>
        //       );
    
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
    {/* **************** old ******************** */}  
        const [PersoID, setPersoID] = useState([]); 
        function PersoIDChange (e){ 
            setPersoID(e.target.value) }
        const [Name, setName] = useState([]); 
        function NameChange (e){ 
            setName(e.target.value) }
        const [LastName, setLastName] = useState([]); 
        function LastNameChange (e){ 
            setLastName(e.target.value) }
        const [Age, setAge] = useState([]); 
        function AgeChange (e){ 
            setAge(e.target.value) }
        const [Genderchecked, setGenderchecked] = React.useState('ชาย');
        const handleChangeGender = event => {
            setGenderchecked(event.target.value);};
        const [AddressPerson, setAddressPerson] = useState([]); 
        function AddressPersonChange (e){ 
            setAddressPerson(e.target.value) }     
        const [Job, setJob] = useState([]); 
        function JobChange (e){ 
            setJob(e.target.value) }
        const [Comefrom, setComefrom] = useState([]); 
        function ComefromChange (e){ 
            setComefrom(e.target.value) }

        const [stateCheckA, setStateCheckA] = React.useState(0)
        const handleChangeCheckA = (event) => {
            setStateCheckA(event.target.checked );};
        const [stateCheckB, setStateCheckB] = React.useState(0)
        const handleChangeCheckB = (event) => {
            setStateCheckB(event.target.checked );};
        const [stateCheckC, setStateCheckC] = React.useState(0)
        const handleChangeCheckC = (event) => {
            setStateCheckC(event.target.checked );};
        const [stateCheckD, setStateCheckD] = React.useState(0)
        const handleChangeCheckD = (event) => {
            setStateCheckD(event.target.checked );};
        const [stateCheckE, setStateCheckE] = React.useState(0)
        const handleChangeCheckE = (event) => {
            setStateCheckE(event.target.checked );};
        const [stateCheckF, setStateCheckF] = React.useState(0)
        const handleChangeCheckF = (event) => {
            setStateCheckF(event.target.checked );};
        const [stateCheckG, setStateCheckG] = React.useState(0)
        const handleChangeCheckG = (event) => {
            setStateCheckG(event.target.checked );};
        const [stateCheckH, setStateCheckH] = React.useState(0)
        const handleChangeCheckH = (event) => {
            setStateCheckH(event.target.checked );};
        const [stateCheckI, setStateCheckI] = React.useState(0)
        const handleChangeCheckI = (event) => {
            setStateCheckI(event.target.checked );};
        const [stateCheckJ, setStateCheckJ] = React.useState(0)
        const handleChangeCheckJ = (event) => {
            setStateCheckJ(event.target.checked );};
        const [stateCheckK, setStateCheckK] = React.useState(0)
        const handleChangeCheckK = (event) => {
            setStateCheckK(event.target.checked );};
        // const [stateCheck, setStateCheck] = React.useState()
        // const handleChangeCheck = (event) => {
        //     setStateCheck(event.target.checked );};
        
        
        const [Temperature, setTemperature] = useState([]); 
        function TemperatureChange (e){ 
            setTemperature(e.target.value) }
        const [checkedRisk, setCheckedRisk] = React.useState('กักตัวเพื่อรอดูอาการ');
        const handleChangeRisk = event => {
            setCheckedRisk(event.target.value);
        };
        const [Recorder, setRecorder] = React.useState([]);
        const RecorderChange = event => {
            setRecorder(event.target.value);
        };
        const [DateArrivedVillage, setDateArrivedVillage] = useState(new Date().toLocaleDateString()); 
        const onDateChange = (date) => {
            const fullDate = date
            const Day = dateFormat(fullDate, "dd");
            const Month = dateFormat(fullDate, "mm");
            const Year = dateFormat(fullDate, "yyyy");
            const Formatted = Month +"/"+ Day +"/"+ Year
            // console.log("pickdate01 : " + fullDate)
            // console.log("pickdate02 : " + Formatted)
            // console.log("SelectedDate : " + SelectedDate)
            setDateArrivedVillage(Formatted);
            
          };

    {/* **************** new ******************** */}  
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

        
          

          // const [selectedDate, handleDateChange] = useState(new Date());
        
        const [Monthza, setMonthza] = useState('All'); 
        const [Yearza, setYearza] = useState('All'); 
        
        // const [checkedA, setCheckedA] = React.useState();
        // const handleChangeCheckA = event => {
        //     setCheckedA(event.target.checked);
        // };

       

        


 {/* **************** Style ******************** */}    
          const BoxStsProps1 = {
            bgcolor: "background.paper",
            borderColor: "GoldenRod",
            color: "GoldenRod",
            m: 1,
            border: 1,
            fontFamily:'Mitr',
            style: { width: "10rem", height: "2rem",textAlign: "center" }
          };
          const BoxStsProps2 = {
            bgcolor: "background.paper",
            borderColor: "Crimson",
            color: "Crimson",
            m: 1,
            border: 1,
            fontFamily:'Mitr',
            style: { width: "7rem", height: "2rem",textAlign: "center" }
          };
          const BoxStsProps3 = {
            bgcolor: "background.paper",
            borderColor: "Green",
            color: "Green",
            m: 1,
            border: 1,
            fontFamily:'Mitr',
            style: { width: "7rem", height: "2rem",textAlign: "center" }
          };
           /*
            ! แดง-เหลือง-เขียว indicator
            */
          const classes = useStyles();
    
{/* **************** Process function ******************** */}             
        function GetData (item){
            var info ={
                    params: {
                        id:item.Id_parcel
                    }} 
            setGetIDParcel(item.Id_parcel)
            
            
            axios.get('http://localhost:4000/SpecificDatatoAccept',info)
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

        function PrePost (e){
            e.preventDefault()
            setTimeout(() => {
                setOpen(false);
                PostToDatabase();
                }, 500);  
                }
    
        function PostToDatabase (e){
            var formData = {
                PersoID:PersoID,
                Name:Name,
                LastName:LastName,
                Age:Age,
                Genderchecked:Genderchecked,
                AddressPerson:AddressPerson,
                Job:Job,
                Comefrom:Comefrom,
                DateArrivedVillage:DateArrivedVillage,
                stateCheckA:stateCheckA,
                stateCheckB:stateCheckB,
                stateCheckC:stateCheckC,
                Temperature:Temperature,
                stateCheckD:stateCheckD,
                stateCheckE:stateCheckE,
                stateCheckF:stateCheckF,
                stateCheckG:stateCheckG,
                stateCheckH:stateCheckH,
                stateCheckI:stateCheckI,
                stateCheckJ:stateCheckJ,
                stateCheckK:stateCheckK,
                checkedRisk:checkedRisk,
                Recorder:Recorder,
                DateTimeNow:DateTimeNow
            }
    
            axios.post('http://localhost:4000/PostToDatabase', formData)
                .then(function (response) {
                    console.log(response);
              })
                .catch(function (error) {
                    console.log(error);
              });
    
              TimeRanger();
              
              setTimeout(() => {
                alert('เพิ่มแบบสำรวจสำเร็จ')
                window.location.reload(false)
                }, 500);  
                }
    
        function Quarantine (){
            var info ={
                params: {
                    Monthza:Monthza,
                    Yearza:Yearza
                }}
    
            return axios.get('http://localhost:4000/Quarantine',info) 
            .then(function (response) {
                const data = response.data;
                // console.table(data)
                setDataBoxLeft(data);
                
                })}

        function YouRiskNow (){
            var info ={
                params: {
                    Monthza:Monthza,
                    Yearza:Yearza
                }}
    
            return axios.get('http://localhost:4000/YouRiskNow',info) 
            .then(function (response) {
                const data = response.data;
                // console.table(data)
                setDataBoxMid(data);
                
                })}
        function NoCovid (){
            var info ={
                params: {
                    Monthza:Monthza,
                    Yearza:Yearza
                }}
    
            return axios.get('http://localhost:4000/NoCovid',info) 
            .then(function (response) {
                const data = response.data;
                // console.table(data)
                setDataBoxRight(data);
                
                })}
                
        function Accept (){
            var accept ={
                id:GetIDParcel,
                RRName:RRName,
                Check:checked}
            axios.put('http://localhost:4000/Accept',accept)
                .then(function (response){
                    // ohWow();  
            })}

        const MenuAddress =()=>{
            axios.get('http://localhost:4000/address')
            .then(function(response){
                const dataAddress = response.data;
                const DropdownAddress = dataAddress.map((item) =>
                        <option 
                        key={ item.ID_ADDRESS } 
                        value={ item.Address_Name} 
                        // onChange={ ()=> { setAddressza(item.Address_Name) }} 
                        fullwidth >
                            { item.Address_Name}
                    </option>)
                    setShowAddressxx(DropdownAddress)}
                   )}
        
        function TimeRanger(){
            var DateTime = moment().format('L') +' '+moment().format('LT');
            var Day = moment().format('DD');  
            var Month = moment().format('MMMM'); 
            var Year = moment().format('YYYY');  
            setDateTimeNow(DateTime)
            setMonthx(Month)
            setYearx(Year)
            }
    
        // function SetMonth(date){
        //     console.log(date)
        //     var fullDate = date
        //     setDateArrivedVillage(fullDate)
        //     var Day = dateFormat(fullDate, "mmmm");
        //     var Month = dateFormat(fullDate, "mmmm");
        //     var Year = dateFormat(fullDate, "yyyy");
        //     // setMonthza(Month)
        //     // setYearza(Year)
        //     // console.log(fullDate)
        //     console.log(Day)
        //     console.log(Month)
        //     console.log(Year)
        //     // OhSend();
        //     // OhReceived ();
        //     // แก้ทีหลัง
        //     }
        //     /*
        //         !Select month side bar
        //     */

        function SelectAccept(item){
            GetData (item);
            handleClickOpenConfirmAccept();
            }
             /*
                !ClickToAccept
            */
    
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
            console.log(DateTimeNow)
            // console.log("UseEffect")
            // console.log(SelectedDate)
            // console.log("Year")
            // console.log(Yearza)
            // console.log(...DataBoxLeft)
            // console.log(...DataBoxMid)
            // console.log("เลขบัตร :" + PersoID)
            // console.log("ชื่อ :" + Name)
            // console.log("สกุล :" + LastName)
            // console.log("อายุ :" + Age)
            // console.log("เพศ :" + Genderchecked)
            // console.log("ที่อยู่ :" + AddressPerson)
            // console.log("อาชีพ :" + Job)
            // console.log("เดินทางมาจาก :" + Comefrom)
            // console.log("วันที่เข้าหมู่บ้าน :" + DateArrivedVillage)
            // console.table(stateCheckA)
            // console.log("อุณหภูมิ :" + Temperature)
            // console.table("ระบุผล :" + checkedRisk)
            // console.table("ผู้รายงาน :" + Recorder)
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
                        <h1 id='useFont'>แบบสำรวจผู้มีความเสี่ยงในพื้นที่ </h1>
                    </DialogTitle><hr/>
                    <DialogContent>
                    
                    <form
                    id="SEND"
                    name="SEND"
                    onSubmit={ PrePost }>
                        <TextField 
                        required 
                        autoFocus
                        fullWidth
                        type="text"
                        label="เลขบัตรประชาชน" 
                        // id="nameSender" 
                        // defaultValue="0123456789123" 
                        variant="outlined" 
                            inputProps={{minLength: 13  ,maxLength: 13, style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ PersoID }
                                onChange={ PersoIDChange }
                        />
                        <br/><br/>

                        <TextField 
                        required 
                        // fullWidth
                        type="text"
                        label="ชื่อ" 
                        // id="nameSender" 
                        // defaultValue="อร่อย"
                        variant="outlined" 
                            inputProps={{maxLength: 13, style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Name }
                                onChange={ NameChange }
                        />
                        <span>   </span>

                        <TextField 
                        required 
                        // fullWidth
                        type="text"
                        label="นามสกุล" 
                        // id="nameSender" 
                        // defaultValue="จนต้องต่อยคนข้างๆ"
                        variant="outlined" 
                            inputProps={{maxLength: 13, style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ LastName }
                                onChange={ LastNameChange }
                        />
                        <br/><br/>

                        <TextField 
                        required 
                        // fullWidth
                        type="number"
                        label="อายุ" 
                        // id="nameSender" 
                        // defaultValue="23"
                        variant="outlined" 
                            inputProps={{min: 1, maxLength: 3, style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Age }
                                onChange={ AgeChange }
                        />
                        <br/><br/>

                        <FormLabel component="legend" id='useFont'>เพศ</FormLabel>
                        <Radio
                            checked={Genderchecked === 'ชาย'}
                            onChange={handleChangeGender}
                            value="ชาย"
                            color='primary'
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        /><span id='useFont'>ชาย</span>
                        <Radio
                            checked={Genderchecked === 'หญิง'}
                            onChange={handleChangeGender}
                            value="หญิง"
                            color='secondary'
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        /><span id='useFont'>หญิง</span>
                        <br/><br/>

                        <TextField
                            required
                            fullWidth
                            id="outlined-textarea"
                            label="ที่อยู่"
                            multiline
                            // defaultValue="123/456 หมู่ 5 ต.อิอิ อ.อิอิ จ.อิอิ 12345"
                            rows={4}
                            variant="outlined"
                            inputProps={{maxLength: 13, style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}}
                                value={ AddressPerson }
                                onChange={ AddressPersonChange }
                        />
                        <br/><br/>

                        <TextField 
                        required 
                        // fullWidth
                        type="text"
                        label="อาชีพ" 
                        // id="nameSender" 
                        // defaultValue="รับจ้าง"
                        variant="outlined" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Job }
                                onChange={ JobChange }
                        />
                        <br/><br/>

                        <FormControl required id='formControl'>
                        <InputLabel htmlFor="age-native-simple" id='useFont'>เดินทางมาจาก</InputLabel>
                            <Select 
                            native
                            required 
                            // fullwidth
                            id="addressdropdown" 
                            className='col col-11' 
                            select 
                            label="เดินทางมาจาก" 
                                inputProps={{style: {fontFamily:'Mitr'}}} 
                                InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                    value={ Comefrom } 
                                    onChange={ ComefromChange } 
                            >
                                { ShowAddressxx } 
                            </Select>
                        </FormControl>
                        <br/><br/>
                        
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                            required 
                            // autoOk
                            variant="inline"
                            label="วันที่เข้าหมุ่บ้าน (เดือน/วัน/ปี)"
                            className='col col-6' 
                            value={DateArrivedVillage}
                            format="MM/dd/yyyy"
                            onChange={date => onDateChange(date)}
                            />
                        </MuiPickersUtilsProvider>
                        <br/><br/>

                        <h5 id="useFont" className="ml-3">ประเมินความเสี่ยงเบื้องต้น ในรอบ 14 วัน</h5>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckA}
                                onChange={handleChangeCheckA}
                                className="ml-5"
                                name="stateCheckA"
                                color="primary"
                        />}label="ไปสถานที่เสี่ยง"/>
                        <br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckB}
                                onChange={handleChangeCheckB}
                                className="ml-5"
                                name="stateCheckB"
                                color="primary"
                        />}label="ไปสถานที่ที่มีคนมาก"/>
                        <br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckC}
                                onChange={handleChangeCheckC}
                                className="ml-5"
                                name="stateCheckC"
                                color="primary"
                        />}label="ใกล้ชิดผู้ป่วย"/>
                        <br/><br/>

                        <TextField 
                        required 
                        // fullWidth
                        type="number"
                        label="อุณหภูมิ" 
                        className="col col-4"
                        // id="nameSender" 
                        // defaultValue="รับจ้าง"
                        variant="outlined" 
                            inputProps={{min: 35, max: 45, maxLength: 3, step:"0.1", style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Temperature }
                                onChange={ TemperatureChange }
                        />
                        <br/><br/>
                        
                        <h5 id="useFont" className="ml-3">อาการ</h5>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckD}
                                onChange={handleChangeCheckD}
                                className="ml-5"
                                name="stateCheckD"
                                color="primary"
                        />}label="ปวดศีรษะ"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckE}
                                onChange={handleChangeCheckE}
                                className="ml-5"
                                name="stateCheckE"
                                color="primary"
                        />}label="ไอ"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckF}
                                onChange={handleChangeCheckF}
                                className="ml-5"
                                name="stateCheckF"
                                color="primary"
                        />}label="มีเสมหะ"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckG}
                                onChange={handleChangeCheckG}
                                className="ml-5"
                                name="stateCheckG"
                                color="primary"
                        />}label="เจ็บคอ"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckH}
                                onChange={handleChangeCheckH}
                                className="ml-5"
                                name="stateCheckH"
                                color="primary"
                        />}label="ปวดกล้ามเนื้อ"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckI}
                                onChange={handleChangeCheckI}
                                className="ml-5"
                                name="stateCheckI"
                                color="primary"
                        />}label="หายใจลำบาก"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckJ}
                                onChange={handleChangeCheckJ}
                                className="ml-5"
                                name="stateCheckJ"
                                color="primary"
                        />}label="ท้องเสีย"/><br/>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={stateCheckK}
                                onChange={handleChangeCheckK}
                                className="ml-5"
                                name="stateCheckK"
                                color="primary"
                        />}label="ไม่สามารถรับรู้กลิ่น/รสชาติ"/>
                        <br/><br/>

                        <h5 id="useFont" className="ml-3">ระบุผล</h5>
                        <Radio
                            checked={checkedRisk === 'กักตัวเพื่อรอดูอาการ'}
                            onChange={handleChangeRisk}
                            className="ml-5"
                            value="ปกติ"
                            color='primary'
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        /><span id='useFont'>กักตัวเพื่อรอดูอาการ</span>
                        <Radio
                            checked={checkedRisk === 'มีความเสี่ยง'}
                            onChange={handleChangeRisk}
                            className="ml-1"
                            value="มีความเสี่ยง"
                            color='secondary'
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        /><span id='useFont'>มีความเสี่ยง</span>
                        <br/><br/>

                        <TextField 
                        required 
                        fullWidth
                        type="text"
                        label="ผู้รายงาน" 
                        // id="nameSender" 
                        // defaultValue="น้องขุนทอง"
                        variant="outlined" 
                            inputProps={{style: {fontFamily:'Mitr'}}} 
                            InputLabelProps={{style: {fontFamily:'Mitr'}}} 
                                value={ Recorder }
                                onChange={ RecorderChange }
                        />
                        <br/><br/>
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
                        เพิ่ม
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
                                    <Grid item xs={12} sm={12} md={12} lg={4} xl={3} id='borderTest'>
                                        <Card 
                                        elevation={5} 
                                        variant="outlined " 
                                        className='my-5 col  col-md-5 col-lg-5 col-xl-12' 
                                        onClick={handleClickOpen}
                                        id='shitCardxx'>
                                            <h2 className='pl-5 my-1 ' ></h2>
                                            <h4 className='mb-3 ml-5 ' id='useFont2'>เพิ่มแบบสำรวจ</h4>
                                            <div class='horizonLine2'/>
                                            <br/>
                                        </Card>
                                        
                                        
                                        
                                    </Grid><br/><br/>

                                    <Grid container spacing={5}>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} >
                                                <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                                                    <Card elevation={1} variant="outlined "  id='shitCardTop1' onClick={()=>{handleClickxxB1("B1")}}>
                                                        <h4 
                                                        className='text-center p-4' 
                                                        id='useFont'>กักตัวเพื่อรอดูอาการ {" "} 
                                                        <Badge 
                                                        badgeContent={DataBoxLeft.length} 
                                                        color="secondary">
                                                        </Badge>
                                                        </h4>
                                                    </Card>
                                                        <Collapse key={'B1'} in={openB1['B1']}>
                                                        <List>
                                                            {DataBoxLeft.map(item=>{
                                                                // console.log(item)
                                                                // console.table(item.status)
                                                                return(
                                                                <div class='border border-top-0'>
                                                                    <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                                                    <ListItemAvatar>
                                                                    <Avatar>
                                                                    </Avatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText  key ={item.ID} >
                                                                            
                                                                            {item.checkedRisk=="กักตัวเพื่อรอดูอาการ"?
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Box borderRadius={30} {...BoxStsProps1} >กักตัวเพื่อรอดูอาการ</Box>
                                                                            </Box>:null}
                                                                            
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{ item.Comefrom }</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{ item.DateArrivedVillage }</span><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{ item.Temperature }{" "}{"°C"}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>
                                                                            <strong id='useFont'>{'ผู้ตรวจ:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                        </ListItemText>
                                                                    </ListItem>
                                                                    
                                                                    <Collapse key={item.ID} in={openx[item.ID]}>
                                                                    <div class='horizonLine3'/>
                                                                        <ListItem key={item.ID}>
                                                                    <ListItemAvatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText key ={item.ID}>
                                                                            <h2 className='' id='useFont'>รายละเอียด</h2><br/>
                                                                            <strong id='useFont'>{'เลขบัตรประชาชน:'+' '}</strong><span id='useFont2'>{item.Personal_ID}</span><br/>
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'อายุ:'+' '}</strong><span id='useFont2'>{item.Age}</span><br/>
                                                                            <strong id='useFont'>{'เพศ:'+' '}</strong><span id='useFont2'>{item.Genderchecked}</span><br/>
                                                                            <strong id='useFont'>{'ที่อยู่:'+' '}</strong><span id='useFont2'>{item.AddressPerson}</span><br/>
                                                                            <strong id='useFont'>{'อาชีพ:'+' '}</strong><span id='useFont2'>{item.Job}</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{item.Comefrom}</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{item.DateArrivedVillage}</span><br/>
                                                                            <h6 id="useFont" className="ml-3">ประเมินความเสี่ยงเบื้องต้น ในรอบ 14 วัน</h6>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedA} disabled className="ml-5" color="primary"/>} label="ไปสถานที่เสี่ยง"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedB} disabled className="ml-5" color="primary"/>} label="ไปสถานที่ที่มีคนมาก"/><br/>   
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedC} disabled className="ml-5" color="primary"/>} label="ใกล้ชิดผู้ป่วย"/><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{item.Temperature}</span><br/>            
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedD} disabled className="ml-5" color="primary"/>} label="ปวดศีรษะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedE} disabled className="ml-5" color="primary"/>} label="ไอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedF} disabled className="ml-5" color="primary"/>} label="มีเสมหะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedG} disabled className="ml-5" color="primary"/>} label="เจ็บคอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedH} disabled className="ml-5" color="primary"/>} label="ปวดกล้ามเนื้อ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedI} disabled className="ml-5" color="primary"/>} label="หายใจลำบาก"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedJ} disabled className="ml-5" color="primary"/>} label="ท้องเสีย"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedK} disabled className="ml-5" color="primary"/>} label="ไม่สามารถรับรู้กลิ่น/รสชาติ"/><br/>     
                                                                            <strong id='useFont'>{'ระบุผล:'+' '}</strong><span id='useFont2'>{item.checkedRisk}</span><br/>
                                                                            <strong id='useFont'>{'ผู้รายงาน:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>

                                                                            <div className='row'>
                                                                            <div class="col col-4"></div>
                                                                            <div class="col col-4"></div>
                                                                                <div className='row col my-2'>
                                                                                    <div className='row'>
                                                                                        <div>
                                                                                            {item.checkedRisk=="กักตัวเพื่อรอดูอาการ"?
                                                                                            <Alert 
                                                                                                key ={item.ID} 
                                                                                                id='AlertButton'
                                                                                                severity="info"
                                                                                                onClick={ ()=>{ SelectAccept(item) } }>
                                                                                                <AlertTitle id='useFont'>แก้ไขผล</AlertTitle>
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

                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} >
                                                <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                                                    <Card elevation={1} variant="outlined "  id='shitCardTop1' onClick={()=>{handleClickxxB1("B1")}}>
                                                        <h4 
                                                        className='text-center p-4' 
                                                        id='useFont'>กักตัวเพื่อรอดูอาการ {" "} 
                                                        <Badge 
                                                        badgeContent={DataBoxLeft.length} 
                                                        color="secondary">
                                                        </Badge>
                                                        </h4>
                                                    </Card>
                                                        <Collapse key={'B1'} in={openB1['B1']}>
                                                        <List>
                                                            {DataBoxMid.map(item=>{
                                                                // console.log(item)
                                                                // console.table(item.status)
                                                                return(
                                                                <div class='border border-top-0'>
                                                                    <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                                                    <ListItemAvatar>
                                                                    <Avatar>
                                                                    </Avatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText  key ={item.ID} >
                                                                            
                                                                            {item.checkedRisk=="มีความเสี่ยง"?
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Box borderRadius={30} {...BoxStsProps2} >มีความเสี่ยง</Box>
                                                                            </Box>:null}
                                                                            
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{ item.Comefrom }</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{ item.DateArrivedVillage }</span><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{ item.Temperature }{" "}{"°C"}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>
                                                                            <strong id='useFont'>{'ผู้ตรวจ:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                        </ListItemText>
                                                                    </ListItem>
                                                                    
                                                                    <Collapse key={item.ID} in={openx[item.ID]}>
                                                                    <div class='horizonLine3'/>
                                                                        <ListItem key={item.ID}>
                                                                    <ListItemAvatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText key ={item.ID}>
                                                                            <h2 className='' id='useFont'>รายละเอียด</h2><br/>
                                                                            <strong id='useFont'>{'เลขบัตรประชาชน:'+' '}</strong><span id='useFont2'>{item.Personal_ID}</span><br/>
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'อายุ:'+' '}</strong><span id='useFont2'>{item.Age}</span><br/>
                                                                            <strong id='useFont'>{'เพศ:'+' '}</strong><span id='useFont2'>{item.Genderchecked}</span><br/>
                                                                            <strong id='useFont'>{'ที่อยู่:'+' '}</strong><span id='useFont2'>{item.AddressPerson}</span><br/>
                                                                            <strong id='useFont'>{'อาชีพ:'+' '}</strong><span id='useFont2'>{item.Job}</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{item.Comefrom}</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{item.DateArrivedVillage}</span><br/>
                                                                            <h5 id="useFont" className="ml-3">ประเมินความเสี่ยงเบื้องต้น ในรอบ 14 วัน</h5>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedA} disabled className="ml-5" color="primary"/>} label="ไปสถานที่เสี่ยง"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedB} disabled className="ml-5" color="primary"/>} label="ไปสถานที่ที่มีคนมาก"/><br/>   
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedC} disabled className="ml-5" color="primary"/>} label="ใกล้ชิดผู้ป่วย"/><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{item.Temperature}</span><br/>            
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedD} disabled className="ml-5" color="primary"/>} label="ปวดศีรษะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedE} disabled className="ml-5" color="primary"/>} label="ไอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedF} disabled className="ml-5" color="primary"/>} label="มีเสมหะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedG} disabled className="ml-5" color="primary"/>} label="เจ็บคอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedH} disabled className="ml-5" color="primary"/>} label="ปวดกล้ามเนื้อ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedI} disabled className="ml-5" color="primary"/>} label="หายใจลำบาก"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedJ} disabled className="ml-5" color="primary"/>} label="ท้องเสีย"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedK} disabled className="ml-5" color="primary"/>} label="ไม่สามารถรับรู้กลิ่น/รสชาติ"/><br/>     
                                                                            <strong id='useFont'>{'ระบุผล:'+' '}</strong><span id='useFont2'>{item.checkedRisk}</span><br/>
                                                                            <strong id='useFont'>{'ผู้รายงาน:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>

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

                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} >
                                                <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                                                    <Card elevation={1} variant="outlined "  id='shitCardTop1' onClick={()=>{handleClickxxB1("B1")}}>
                                                        <h4 
                                                        className='text-center p-4' 
                                                        id='useFont'>กักตัวเพื่อรอดูอาการ {" "} 
                                                        <Badge 
                                                        badgeContent={DataBoxLeft.length} 
                                                        color="secondary">
                                                        </Badge>
                                                        </h4>
                                                    </Card>
                                                        <Collapse key={'B1'} in={openB1['B1']}>
                                                        <List>
                                                            {DataBoxRight.map(item=>{
                                                                // console.log(item)
                                                                // console.table(item.status)
                                                                return(
                                                                <div class='border border-top-0'>
                                                                    <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                                                    <ListItemAvatar>
                                                                    <Avatar>
                                                                    </Avatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText  key ={item.ID} >
                                                                            
                                                                            {item.checkedRisk=="กักตัวเพื่อรอดูอาการ"?
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Box borderRadius={30} {...BoxStsProps1} >กักตัวเพื่อรอดูอาการ</Box>
                                                                            </Box>:null}
                                                                            
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{ item.Comefrom }</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{ item.DateArrivedVillage }</span><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{ item.Temperature }{" "}{"°C"}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>
                                                                            <strong id='useFont'>{'ผู้ตรวจ:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                        </ListItemText>
                                                                    </ListItem>
                                                                    
                                                                    <Collapse key={item.ID} in={openx[item.ID]}>
                                                                    <div class='horizonLine3'/>
                                                                        <ListItem key={item.ID}>
                                                                    <ListItemAvatar>
                                                                    </ListItemAvatar>
                                                                        <ListItemText key ={item.ID}>
                                                                            <h2 className='' id='useFont'>รายละเอียด</h2><br/>
                                                                            <strong id='useFont'>{'เลขบัตรประชาชน:'+' '}</strong><span id='useFont2'>{item.Personal_ID}</span><br/>
                                                                            <strong id='useFont'>{'ชื่อ-สกุล:'+' '}</strong><span id='useFont2'>{ item.Name }{" "}{ item.LastName }</span><br/>
                                                                            <strong id='useFont'>{'อายุ:'+' '}</strong><span id='useFont2'>{item.Age}</span><br/>
                                                                            <strong id='useFont'>{'เพศ:'+' '}</strong><span id='useFont2'>{item.Genderchecked}</span><br/>
                                                                            <strong id='useFont'>{'ที่อยู่:'+' '}</strong><span id='useFont2'>{item.AddressPerson}</span><br/>
                                                                            <strong id='useFont'>{'อาชีพ:'+' '}</strong><span id='useFont2'>{item.Job}</span><br/>
                                                                            <strong id='useFont'>{'เดินทางมาจาก:'+' '}</strong><span id='useFont2'>{item.Comefrom}</span><br/>
                                                                            <strong id='useFont'>{'วันที่เข้าหมู่บ้าน:'+' '}</strong><span id='useFont2'>{item.DateArrivedVillage}</span><br/>
                                                                            <h5 id="useFont" className="ml-3">ประเมินความเสี่ยงเบื้องต้น ในรอบ 14 วัน</h5>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedA} disabled className="ml-5" color="primary"/>} label="ไปสถานที่เสี่ยง"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedB} disabled className="ml-5" color="primary"/>} label="ไปสถานที่ที่มีคนมาก"/><br/>   
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedC} disabled className="ml-5" color="primary"/>} label="ใกล้ชิดผู้ป่วย"/><br/>
                                                                            <strong id='useFont'>{'อุณหภูมิ:'+' '}</strong><span id='useFont2'>{item.Temperature}</span><br/>            
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedD} disabled className="ml-5" color="primary"/>} label="ปวดศีรษะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedE} disabled className="ml-5" color="primary"/>} label="ไอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedF} disabled className="ml-5" color="primary"/>} label="มีเสมหะ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedG} disabled className="ml-5" color="primary"/>} label="เจ็บคอ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedH} disabled className="ml-5" color="primary"/>} label="ปวดกล้ามเนื้อ"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedI} disabled className="ml-5" color="primary"/>} label="หายใจลำบาก"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedJ} disabled className="ml-5" color="primary"/>} label="ท้องเสีย"/><br/>
                                                                                <FormControlLabel control={ <Checkbox checked={item.stateCheckedK} disabled className="ml-5" color="primary"/>} label="ไม่สามารถรับรู้กลิ่น/รสชาติ"/><br/>     
                                                                            <strong id='useFont'>{'ระบุผล:'+' '}</strong><span id='useFont2'>{item.checkedRisk}</span><br/>
                                                                            <strong id='useFont'>{'ผู้รายงาน:'+' '}</strong><span id='useFont2'>{item.Recorder}</span><br/>
                                                                            <strong id='useFont'>{'วันที่ตรวจ:'+' '}</strong><span id='useFont2'>{item.RecordTime}</span><br/>

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
                                                    fullWidth
                                                />
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