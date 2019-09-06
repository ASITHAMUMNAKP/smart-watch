


$(function () {   //on load function
    $(".timerr").hide();
    $(".musicc").hide();
    $(".screen2").hide();
    $(".screen3").hide();
    $(".screen4").hide();
    $(".screen5").hide();
    
       
    $(".mes").click(function () {  //function for messages
        $(".musicc").hide();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen3").hide();
        $(".screen4").hide();
        $(".screen5").hide();
        $(".screen2").show();

    });
        $(".mesg1").click(function () {  //function for each messages
            $(".musicc").hide();
            $(".timerr").hide();
            $(".screen1").hide();
            $(".screen2").hide();
            $(".screen4").hide();
            $(".screen5").hide();
            $(".screen3").show();
         
    });
    $(".mesg2").click(function () {  //function for each messages
        $(".musicc").hide();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").show();

    });
    $(".mesg3").click(function () {  //function for each messages
        $(".musicc").hide();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen5").show();
        $(".screen4").hide();

    });
        $(".mesg2").click(function () {  //function for each messages
        $(".musicc").hide();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").show();

    });
    $(".backicon").click(function () {  //function for getting back to screen2
        $(".musicc").hide();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen2").show();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").hide();

    });



    $(".mus").click(function () {  //function for music
        $(".musicc").show();
        $(".timerr").hide();
        $(".screen1").hide();
        $(".screen2").show();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").hide();
        

      
    });
    $(".tim").click(function () {   //function for timer
        $(".timerr").show();
        $(".musicc").hide();
        $(".screen1").hide();
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").hide();
        
        
    });
    $(".watch-strap-2").click(function () {  //to display the screen
        $(".timerr").hide();
        $(".musicc").hide();
        
        $(".screen1").show();
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen5").hide();
        $(".screen4").hide();

    });
  
});


//    To change the date and time
let p = new Date();
let n = p.getDay();

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("display1").innerHTML = day[n];
document.getElementById("date").innerHTML = p.getDay() + "/0" + p.getMonth() + "/" + p.getFullYear();;
document.getElementById("time").innerHTML = p.getHours() + ":" + p.getMinutes() + ":" + p.getSeconds() + " " + "am";

//   functn to change the timer
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



