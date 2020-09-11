const daysE= document.getElementById('days');
const hoursE= document.getElementById('hours');
const minutesE=document.getElementById('minutes');
const secondsE=document.getElementById('seconds');



const future="21 Apr 2021";

function countdown(){
  
    const newYearsDate=new Date(future);
    const currentDate= new Date();
     
    const totalSeconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    

    daysE.innerHTML=days;
    hoursE.innerHTML=formatTime(hours);
    minutesE.innerHTML=formatTime(minutes);
    secondsE.innerHTML=formatTime(seconds);

    console.log( days, hours, minutes, seconds);

}

function formatTime(time){

    return time <10? (`0${time}`) : time;
}
countdown();
setInterval(countdown,1000);

