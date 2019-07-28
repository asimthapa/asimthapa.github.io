//TODO fix minute exceeding 60 and hr exceeding 24
//TODO fix setAlarm running function even there is no alarm input
//TODO fix the timer; it's weird using two setTimeOut() and it's acting funky


var d,day, month, year, hour, hourFormatted, min, sec, ampm, alarmTimer, alarmBox, timerBox;

function init() {
    d= new Date();
    day= d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    ampm = document.getElementById("ampm");
    time();
    date();
}

function time() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;

        if(min == 60) {
            min = 0;
            hour++;

            if(hour == 24) {
                day = d.getDate();
                hour == 0;
            }
        }
    }
    if (hour > 12) {
        hourFormatted = hour - 12;
        ampm.innerHTML = "PM";
    }
    else {
        hourFormatted = hour;
        if (hour == 12){
            ampm.innerHTML = "PM";
        }
        else{
            ampm.innerHTML = "AM";
        }
    }

    $('sec', sec);
    $('min', min);
    $('hour', hourFormatted);
    setTimeout(time, 1000);
}

function date() {
    $('day', day);
    $('month', month);
    $('year', year);
}

function $(id, val) {
    if(val < 10) {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
}

window.onload = init;

// Alarm clock function //
var audio = new Audio('alarm.mp3');
var alarmHr_form, alarmMin_form;


function displayAlarm() {
    alarmBox = document.getElementsByClassName("alarmBox")[0];
    alarmBox.style.display = 'block';
}
function closeAlarm() {
    alarmBox.style.display = 'none';
}

function stopAlarm() {
    clearInterval(alarmTimer);
    audio.pause();
    return;
    
}
function setAlarm() {
    alarmHr_form =  document.getElementById("alarmHr").value;
    alarmMin_form =  document.getElementById("alarmMin").value;

    if(isNaN(alarmHr_form) || isNaN(alarmMin_form)) {
        alert("Invalid time");
        return;
    }
    else if(alarmHr_form == "" || alarmMin_form == ""){
        alert("Please input hour and minute");
        return;
    }
    closeAlarm();
    playalarm();
}

function playalarm() {
    console.log("test");
    if (alarmHr_form == hourFormatted && alarmMin_form == min){
        console.log("success");
        audio.play();

        if (sec == 59){
            clearInterval(alarmTimer);
            audio.pause();
        }
    }
}
function executeAlarm() {
    alarmTimer = setInterval(playalarm, 1000);
}

//Timer function//
var timerAudio = new Audio('timer.mp3');
var timerHr_form, timerMin_form, timerSec_form, timerFinalHr, timerFinalMin;

function displayTimer() {
    timerBox = document.getElementsByClassName("timerBox")[0];
    timerBox.style.display = 'block';
}

function closeTimer() {
    timerBox.style.display = 'none';
}

function stopTimer() {
    document.getElementsByClassName("runningTimerBox")[0].style.display = 'none';
    clearInterval(timerTimer);
    timerAudio.pause();
    return;
}

function setTimer() {
    document.getElementsByClassName("runningTimerBox")[0].style.display = 'block';

    timerHr_form = document.getElementById("timerHr").value;
    timerMin_form = document.getElementById("timerMin").value;
    timerSec_form = 0;

    $('timerRunningHr', timerHr_form);
    $('timerRunningMin', timerMin_form);
    $('timerRunningSec', 0);


    if(isNaN(timerHr_form) || isNaN(timerMin_form)) {
        alert("invalid timer time");
        return; 
    }
    else if(timerHr_form == "" && timerMin_form == "") {
        alert("No timer input");
        return;
    }
    else if(timerHr_form == "") {
        timerHr_form = 0;
    }
    else if(timerMin_form == "") {
        timerMin_form = 0;
    }
    timerFinalHr = parseFloat(hourFormatted) + parseFloat(timerHr_form);
    timerFinalMin = parseFloat(min) + parseFloat(timerMin_form);

    closeTimer();
    playTimer();
    executeRunningTimer();
}

function playTimer() {
    console.log("Timer test");
    if( timerFinalHr == hourFormatted && timerFinalMin == min) {
        console.log("Timer ready");
        timerAudio.play();
        

        if(sec == 59) {
            clearInterval(timerTimer);
            timerAudio.pause();
        }
    }
}

function executeTimer() {
    timerTimer = setInterval(playTimer, 1000);
}

function executeRunningTimer() {
    timerSec_form--;
    if(timerSec_form <= 0) {
        timerSec_form = 59;
        timerMin_form--;

        if(timerMin_form <= 0) {
            timermin_form = 59;
            timerHr_form--;

            if(timerHr_form > 0) {
                timerMin_form = 59;
            }
            if(timerHr_form <= 0) {
                timerHr_form = 0;
                timerMin_form = 0;
            }
        }
    }
    $('timerRunningHr', timerHr_form);
    $('timerRunningMin', timerMin_form);
    $('timerRunningSec', timerSec_form);
    setTimeout(executeRunningTimer, 1000);
}




