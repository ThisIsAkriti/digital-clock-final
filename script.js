
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
  let date = new Date();

  hrs.innerHTML = (date.getHours()<10?"0":"")+ date.getHours();
  min.innerHTML = (date.getMinutes()<10?"0":"")+ date.getMinutes();
  sec.innerHTML = (date.getSeconds()<10?"0":"")+ date.getSeconds();

}, 1000)

