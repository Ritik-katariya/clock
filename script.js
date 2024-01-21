function clo(){
    var clock= new Date();
var hh=clock.getHours();
var mm=clock.getMinutes();
var ss=clock.getSeconds();
document.getElementById("clock").innerText=hh+":"+mm+":"+ss;
var t=setTimeout(function(){clo()},1000);

}
clo();