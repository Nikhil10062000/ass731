var hour = document.getElementById("th");
var minute = document.getElementById("tm");
var second = document.getElementById("ts");
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var startTimer = 0;

start.addEventListener('click', function(){
    
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})
function stopInterval() {
    clearInterval(startTimer);
}
reset.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    stopInterval()
})

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0 && second.value == 0){
        minute.value = 60;
        hour.value--;
    }
    return;
}
