var counter = 0;
var timeLeft = 3600 * 16;
function convertSeconds(s){
  var hr = floor(s / 3600);
  var min = Math.floor((s - Math.floor(s / 3600)* 3600)/ 60);
  var sec = s % 60;
  return nf(hr, 2) +  ":" + nf(min, 2) + ":" + nf(sec,2);
}
// function convertHours(hrs){
//   var hrs = floor(min / 60);
//   var min = min % 60;
//   return nf(hrs, 2) + ":" nf(min, 2);
// }
function setup(){
  noCanvas();
  var params = getURLParams();
    //console.log(params.minute);
  if(params.minute){
  var min = params.minute;
  timeLeft = min * 60;
}
  var timer = $('#timer');
  timer.html(convertSeconds(timeLeft - counter));
function timeIt(){
  counter++;
  timer.html(convertSeconds(timeLeft - counter));
}
  setInterval(timeIt, 1000);
}
