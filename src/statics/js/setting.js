import $ from 'jquery';

$(function(){
  var data = {};
  data.baseTime = localStorage.getItem("baseTime");
  data.restTime = localStorage.getItem("restTime");
  data.longRestTime = localStorage.getItem("longRestTime");
  data.tomatoCountToLongRest = localStorage.getItem("tomatoCountToLongRest");

  $(".baseTime").attr("value",data.baseTime);
  $(".restTime").attr("value", data.restTime);
  $(".longRestTime").attr("value", data.longRestTime);
  $(".tomatoCountToLongRest").attr("value", data.tomatoCountToLongRest);

  $(".changeButton").click(function(){
    localStorage.setItem("baseTime",$(".baseTime").val());
    localStorage.setItem("restTime",$(".restTime").val());
    localStorage.setItem("longRestTime",$(".longRestTime").val());
    localStorage.setItem("tomatoCountToLongRest",$(".tomatoCountToLongRest").val());
    window.location.href="./index.html";
    alert("修改成功");
  });
});