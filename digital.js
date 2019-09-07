

$(function () {   //on load function

    $(".musicc,.timerr,.screen3,.screen2,.screen4,.screen5").hide();
    $(".mes").click(function () {  //function for messages
        $(".musicc,.timerr,.screen1,.screen3,.screen4,.screen5").hide();
        $(".screen2").show();

    });
    $(".mesg1").click(function () {  //function for each messages
        $(".musicc,.timerr,.screen1,.screen2,.screen4,.screen5").hide();

        $(".screen3").show();

    });
    $(".mesg2").click(function () {  //function for each messages
        $(".musicc,.timerr,.screen1,.screen2,.screen3,.screen5").hide();
        $(".screen4").show();

    });
    $(".mesg3").click(function () {  //function for each messages
        $(".musicc,.timerr,.screen1,.screen2,.screen3,.screen4").hide();
        $(".screen5").show();
    });
    $(".backicon").click(function () {  //function for getting back to screen2
        $(".musicc,.timerr,.screen1,.screen3,.screen5,.screen4").hide();
        $(".screen2").show();
    });



    $(".mus").click(function () {  //function for music

        $(".timerr,.screen1,.screen2,.screen3,.screen5,.screen4").hide();
        $(".musicc").show();

    });
    $(".tim").click(function () {   //function for timer

        $(".musicc,.screen1,.screen2,.screen3,.screen5,.screen4").hide();
        $(".timerr").show();



    });
    $(".watch-strap-2").click(function () {  //to display the screen
        $(".musicc,.timerr,.screen2,.screen3,.screen5,.screen4").hide();
        $(".screen1").show();

    });

});


//    To change the date and time
let p = new Date();
let n = p.getDay();

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("display1").innerHTML = day[n];
document.getElementById("date").innerHTML = p.getDay() + "/0" + p.getMonth() + "/" + p.getFullYear();;
document.getElementById("time").innerHTML = p.getHours() + ":" + p.getMinutes() + ":" + p.getSeconds() + " " + "am";

//function to change the messages

var nam = ["adithya", "faisa", "showki"];

var mesg = ["hope you are doing good!!! see u soon..", "Loooi, are you there, its time to go", "hey,where are you!!! waiting for a long time...."];

for (i = 0; i < 3; i++) {
    document.getElementsByClassName("mesg4")[i].innerHTML = nam[i];
    document.getElementsByClassName("messagebox")[i].innerHTML = mesg[i];
}


    //function  for timer
let hour = 0;
let minute = 0;
let seconds = 0;
let totalSeconds = 0;

let intervalId = 0;

function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = seconds;
}

document.getElementById('start').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
})

document.getElementById('stop').addEventListener('click', () => {
    if (intervalId != 0)
        clearInterval(intervalId);
});


document.getElementById('reset').addEventListener('click', () => {
    totalSeconds = 0;
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("min").innerHTML = '0';
    document.getElementById("sec").innerHTML = '0';
});



