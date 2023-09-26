let [seconds,minutes,hours]=[0,0,0];
let Display = document.getElementById("display");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
    }
    if(minutes == 60){
        minutes=0;
        hours++;
    }
    let hr = hours;
    let mins = minutes;
    let secs = seconds;

    if(hr<10){
        hr="0"+hr;
    }
    if(mins<10){
        mins ="0" + mins ;
    }
    if (secs < 10) {
        secs="0"+secs;
    }
    Display.innerHTML = hr + ":" + mins + ":" + secs;
}

function start(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}
function pause(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    Display.innerText = "00:00:00"
}

