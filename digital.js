// $(function () {

//      $(".screen2").hide();
//      $(".screen3").hide();
//      $(".screen4").hide();
//      $(".screen5").hide();
//     $(function ()
//     {
//      $(".mes").click(function () {
//         $(".screen1").hide();
//          $(".screen3").hide();
//          $(".screen4").hide();
//          $(".screen5").hide();
//          $(".screen2").show(); 
//      });
// });
// });
window.onload = () => {
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
}