const express = require('express');
const mysql = require('mysql');
const http = require('http')
const port = 4000

const app = express();
const cors = require("cors");
const server = http.createServer(app)

const bodyParser = require("body-parser");
// const http = require("http").createServer(app);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.listen(port, () => {
    console.log(`Wow app listening on port ${port}!`)})   
app.use(cors({
    origin:"*",
    methods:['POST','GET','PUT','DELETE'],
    credentials:true
}))  


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HighRisk_Information',
  });


connection.connect(function(err){
    // (err)? console.log(err): console.log(connection);
    console.log(`Example app listening on port ${port}!`)
    });

        
// process.on('uncaughtException', function(err) {         
//     // restart app here
//     console.log("shit i got an error, nevermind i will restart now ")
//   });



app.get('/',(req,res)=>{
    res.send('Begin 4000')
})


// app.get('/wholedata', (req, res)=>{
//     connection.query("SELECT * FROM Parcel ORDER BY Id_parcel DESC", function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//       });
// })

app.post('/PostToDatabase',(req, res) => {
    console.log("insertingrs done")
    let data = {
        Personal_ID: req.body.PersoID,
        Name: req.body.Name,
        LastName: req.body.LastName,
        Age: req.body.Age,
        Genderchecked: req.body.Genderchecked,
        AddressPerson: req.body.AddressPerson,
        Job: req.body.Job,
        Comefrom: req.body.Comefrom,
        DateArrivedVillage: req.body.DateArrivedVillage,
        stateCheckedA: req.body.stateCheckA,
        stateCheckedB: req.body.stateCheckB,
        stateCheckedC: req.body.stateCheckC,
        Temperature: req.body.Temperature,
        stateCheckedD: req.body.stateCheckD,
        stateCheckedE: req.body.stateCheckE,
        stateCheckedF: req.body.stateCheckF,
        stateCheckedG: req.body.stateCheckG,
        stateCheckedH: req.body.stateCheckH,
        stateCheckedI: req.body.stateCheckI,
        stateCheckedJ: req.body.stateCheckJ,
        stateCheckedK: req.body.stateCheckK,
        checkedRisk: req.body.checkedRisk,
        Recorder: req.body.Recorder,
        RecordTime: req.body.DateTimeNow,
        RecorderWhoChangeState: "-",
        // status:"ส่งแล้ว"

        // Sender_Name: req.body.SName, 
        // Sender_Phone: req.body.SPhone, 
        // Sender_Address: req.body.Addressza, 
        // Receiver_Name: req.body.RName, 
        // Receiver_Phone: req.body.RPhone, 
        // Receiver_Address: req.body.Addressza2, 
        // Parcel_Name: req.body.PName, 
        // Parcel_Description: req.body.Dparcel,
        // Date_Time: req.body.DateTime,
        // Month:req.body.Monthx,
        // Year:req.body.Yearx,
        // status:"ส่งแล้ว",
        // color:"alert alert-warning btn-block mr-3",
        // Real_Receiver_name:"-",
        // Checked:'-'
        };

    let sql = "INSERT INTO Person SET ?";
        connection.query(sql, data,(err, results) => {
        if(err) throw err;
    });
});

app.get('/SpecificDatatoAccept', (req, res)=>{
    let param = req.query.id
    connection.query("SELECT * FROM Person WHERE ID = "+ param , function (err, result, fields) {
        if (err) throw err;
            res.send(result)
      });
})

app.put('/Accept', (req, res)=>{
    let id = req.body.id
    let RecorderWhoChangeState = req.body.RecorderWhoChangeState
    let Check = req.body.Check
    connection.query("UPDATE Person SET RecorderWhoChangeState = ?, checkedRisk = ? WHERE ID = "+id,[RecorderWhoChangeState, Check], function (err, result, fields) {
        if (err) throw err;
            res.send(result)
        });
})   

app.get('/Quarantine', (req, res)=>{
    let param = req.query.Monthza;
    let param2 = req.query.Yearza;
    console.log('Quarantinex')
    console.log(param +' '+ param2)
    if (param !== 'All' && param2 !== 'All'){
connection.query("SELECT * FROM Person WHERE checkedRisk='กักตัวเพื่อรอดูอาการ' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC  ",[param,param2], function (err, result, fields) {
        if (err) throw err;
            res.send(result)
      });
}
    else if (param == 'All' &&  param2 == 'All'){
connection.query("SELECT * FROM `Person` WHERE checkedRisk='กักตัวเพื่อรอดูอาการ' ORDER BY `checkedRisk` DESC, `RecordTime` DESC",[param], function (err, result, fields) {
            if (err) throw err;
                res.send(result)
            });
}})

app.get('/YouRiskNow', (req, res)=>{
    let param = req.query.Monthza;
    let param2 = req.query.Yearza;
    console.log('RECEx')
    console.log(param +' '+ param2)

    if (param !== 'All' && param2 !== 'All'){
connection.query("SELECT * FROM Person WHERE checkedRisk='มีความเสี่ยง' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC",[param,param2], function (err, result, fields) {
        if (err) throw err;
            res.send(result)
              });
}
    else if (param == 'All' &&  param2 == 'All'){
connection.query("SELECT * FROM `Person` WHERE checkedRisk='มีความเสี่ยง' ORDER BY `checkedRisk` DESC, `RecordTime` DESC",[param],function (err, result, fields) {
            if (err) throw err;
                res.send(result)
            });
}})

app.get('/NoCovid', (req, res)=>{
    let param = req.query.Monthza;
    let param2 = req.query.Yearza;
    console.log('RECEx')
    console.log(param +' '+ param2)

    if (param !== 'All' && param2 !== 'All'){
connection.query("SELECT * FROM Person WHERE checkedRisk='ไม่มีอาการ' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC",[param,param2], function (err, result, fields) {
        if (err) throw err;
            res.send(result)
              });
}
    else if (param == 'All' &&  param2 == 'All'){
connection.query("SELECT * FROM `Person` WHERE checkedRisk='ไม่มีอาการ' ORDER BY `checkedRisk` DESC, `RecordTime` DESC",[param],function (err, result, fields) {
            if (err) throw err;
                res.send(result)
            });
}})

app.get('/address', (req, res)=>{
    connection.query("SELECT * FROM Address", function (err, result, fields) {
        if (err) throw err;
            res.send(result)
      });
})

// app.get('/OhSent', (req, res)=>{
//     let param = req.query.Monthza;
//     let param2 = req.query.Yearza;
//     console.log('SENDx')
//     console.log(param +' '+ param2)
//     if (param !== 'All' && param2 !== 'All'){
// connection.query("SELECT * FROM Parcel WHERE status='ส่งแล้ว' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC  ",[param,param2], function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//       });
// }
//     else if (param == 'All' &&  param2 == 'All'){
// connection.query("SELECT * FROM `Parcel` WHERE status='ส่งแล้ว' ORDER BY `checkedRisk` DESC, `Date_Time` DESC",[param], function (err, result, fields) {
//             if (err) throw err;
//                 res.send(result)
//             });
// }})

// app.get('/OhResponse', (req, res)=>{
//     connection.query("SELECT * FROM Parcel WHERE status='ส่งแล้ว' ORDER BY Id_parcel DESC  ", function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//       });
// })
// app.get('/OhReceived', (req, res)=>{
//     let param = req.query.Monthza;
//     let param2 = req.query.Yearza;
//     console.log('RECEx')
//     console.log(param +' '+ param2)

//     if (param !== 'All' && param2 !== 'All'){
// connection.query("SELECT * FROM Parcel WHERE status='รับแล้ว' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC",[param,param2], function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//               });
// }
//     else if (param == 'All' &&  param2 == 'All'){
// connection.query("SELECT * FROM `Parcel` WHERE status='รับแล้ว' ORDER BY `status` DESC, `Date_Time` DESC",[param],function (err, result, fields) {
//             if (err) throw err;
//                 res.send(result)
//             });
// }})





// app.get('/months', (req, res)=>{
//     connection.query("SELECT * FROM Months", function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//       });
// })



// app.put('/reject', (req, res)=>{
//     let id = req.body.id
//     let RRName = "Rejected"
//     connection.query("UPDATE Parcel SET status = 'ถูกปฏิเสธ', Real_Receiver_Name = ?, color = 'alert alert-danger btn-block mr-3' WHERE Id_parcel =" +id,[RRName], function (err, result, fields) {
//         if (err) throw err;
//             res.send(result)
//         });
// })    


    
    module.exports = app;