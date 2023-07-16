const fs=require("fs")

var person={fname:"Ahmed",lname:"Hosaam",age:"20",city:"Alex"}
const sendDataJson=()=>{
    personJson=JSON.stringify(person)
    fs.writeFileSync("data1.json",personJson)}

const getDataObj=()=>{
        task1Datajson=fs.readFileSync("data1.json").toString()
        task1DataObj=JSON.parse(task1Datajson)}

sendDataJson()
getDataObj()

// first way for uppdating data
var person2={fname:"Adel",lname:"Ahmed",age:"40",city:"Cairo"}
person=person2

// second way for uppdating data

// person.fname="Adel"
// person.lname="Ahmed"
// person.age="40"
// person.city="cairo"
sendDataJson()
getDataObj()

console.log(task1DataObj)


