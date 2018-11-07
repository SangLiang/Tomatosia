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

  // 提交修改
  $(".changeButton").click(function(){
    var _baseTime = parseInt($(".baseTime").val());
    var _restTime = parseInt($(".restTime").val());
    var _longRestTime = parseInt($(".longRestTime").val());
    var _tomatoCountToLongRest = parseInt($(".tomatoCountToLongRest").val());

    if(!isNaN(_baseTime) && !isNaN(_restTime) && !isNaN(_longRestTime) && !isNaN(_tomatoCountToLongRest)){
      localStorage.setItem("baseTime",_baseTime);
      localStorage.setItem("restTime",_restTime);
      localStorage.setItem("longRestTime",_longRestTime);
      localStorage.setItem("tomatoCountToLongRest",_tomatoCountToLongRest);
      window.location.href="./index.html";
      alert("修改成功");
    } else {
      alert ("输入有误");
    }
    
  });
});