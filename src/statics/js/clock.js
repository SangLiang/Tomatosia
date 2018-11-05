import $ from 'jquery';

var TimerClock = {};

var _t = localStorage.getItem("baseTime");
var _switch = localStorage.getItem("timer_witch");

// TimerClock.baseTime = _t || 0;
TimerClock.baseTime = 0;
TimerClock.second = 5;

TimerClock.run = function () {
  TimerClock.baseTime;

  var time = setInterval(function () {
    if (TimerClock.second == 0) {
      TimerClock.second = 60;
      TimerClock.baseTime--;
    }

    TimerClock.second--;

    if (TimerClock.baseTime < 0) {
      clearInterval(time);
      TimerClock.second = 0;
      TimerClock.baseTime = 0;
      TimerClock.alert();
    }
    $("#clock-timer").html(TimerClock.baseTime + ":" + (TimerClock.second >= 10 ? TimerClock.second : "0" + TimerClock.second));

    if (!_switch) {
      clearInterval(time);
    }
    // console.log(111);
  }, 1000);
}

TimerClock.alert = function () {
  alert("番茄时间到");
  $(".restButton").show();
}

TimerClock.run();