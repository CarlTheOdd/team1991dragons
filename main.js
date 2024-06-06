var dayTen = 7;
var dayOne = 5;
var hourTen = 2;
var hourOne = 3;
var minuteTen = 5;
var minuteOne = 8;
var secondTen = 1;
var secondOne = 3;

setInterval(changeTime, 1000);

function changeTime(){
    if(secondOne > 0){
        secondOne--;
    } else if(secondTen > 0){
        secondTen--;
        secondOne = 9;
    } else if(minuteOne > 0){
        minuteOne--;
        secondTen = 5;
        secondOne = 9;
    } else if(minuteTen > 0){
        minuteTen--;
        minuteOne = 9;
        secondTen = 5;
        secondOne = 9;
    } else if(hourOne > 0){
        hourOne--;
        minuteTen = 5;
        minuteOne = 9;
        secondTen = 5;
        secondOne = 9;
    } else if(hourTen > 0){
        hourTen--;
        hourOne = 9;
    } else if(dayOne > 0){
        dayOne--;
        hourTen = 2;
        hourOne = 3;
        minuteTen = 5;
        minuteOne = 9;
        secondTen = 5;
        secondOne = 9;
    } else {
        dayTen--;
        dayOne = 9;
    }

    document.getElementById("daysTen").innerHTML = dayTen;
    document.getElementById("daysOne").innerHTML = dayOne;
    document.getElementById("hoursTen").innerHTML = hourTen;
    document.getElementById("hoursOne").innerHTML = hourOne;
    document.getElementById("minutesTen").innerHTML = minuteTen;
    document.getElementById("minutesOne").innerHTML = minuteOne;
    document.getElementById("secondsTen").innerHTML = secondTen;
    document.getElementById("secondsOne").innerHTML = secondOne;
}