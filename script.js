const degH = 360/60*5/3600
const degM = 360/60/60
const degS = 360/60

var d = new Date();
// var dH =  -180;
// var dM =   -180;
// var dS =  -180 ;
var dH = -180 + d.getHours()*degH*3600 + d.getMinutes()*degM*60/60 + d.getSeconds()*degS*1/3600 
var dM = -180 + d.getMinutes()*degM*60 + d.getSeconds()*degS*1/60
var dS = -180 + d.getSeconds()*degS*1

document.getElementsByClassName('h')[0].style.transform = `rotate(${dH}deg) translate(-50%, 0)`
document.getElementsByClassName('m')[0].style.transform = `rotate(${dM}deg) translate(-50%, 0)`
document.getElementsByClassName('s')[0].style.transform = `rotate(${dS}deg) translate(-50%, 0)`

function change(){

    dH = dH + degH
    dM = dM + degM
    dS = dS + degS
    
    document.getElementsByClassName('h')[0].style.transform = `rotate(${dH}deg) translate(-50%, 0)`
    document.getElementsByClassName('m')[0].style.transform = `rotate(${dM}deg) translate(-50%, 0)`
    document.getElementsByClassName('s')[0].style.transform = `rotate(${dS}deg) translate(-50%, 0)`
}

setInterval(change,1000)



