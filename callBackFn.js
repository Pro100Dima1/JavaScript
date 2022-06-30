
let boy = {
    name : "Dima", // Object
    age : 24
    }

const jsonBoy = JSON.stringify(boy)
//console.log(jsonBoy)    

function checkAge () {  
    let pars = JSON.parse(jsonBoy)
if (pars.age < 18){
    console.log("Not so fast, man")
}
if (pars.age >= 18){
    console.log("Welcome")
}
}

function fnCallBack(fnBack){
    fnBack()
}

fnCallBack(checkAge)