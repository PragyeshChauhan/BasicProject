let startbutton =document.querySelector('#start')
let stopbutton =document.querySelector('#stop')
let body =document.querySelector('body')
let intervalRef;
function getRandamColor() {
    let color ='#';
    let letterbox ='0123456789abcdefABCDEF';
    for (let index = 0; index <6; index++) {
        color+= letterbox[ Math.floor(Math.random()*22)]; 
    } 
    return  color;
}

startbutton.addEventListener('click' ,function(){
    if(!intervalRef){
        console.log("start again");
    function intervalHandeler(str) {
        body.style.backgroundColor=getRandamColor();
        console.log(str);
    }
    intervalRef= setInterval(intervalHandeler,1000,"running")
    }
},false)


stopbutton.addEventListener('click' ,function(){
    clearInterval(intervalRef);
    intervalRef=null;
},false)
