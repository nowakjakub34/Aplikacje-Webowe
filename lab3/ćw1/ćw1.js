const start = document.getElementById("start");
const stop_ = document.getElementById("stop");
const time_display = document.getElementById("time");
const reset = document.getElementById("reset");
var time_s = 0;
var time_min = 0;
var time_h = 0;
var working=false;



start.addEventListener("click",()=> {
    if(!working){
        working= true;
    }
});
stop_.addEventListener("click",()=> {
    if(working){
        working= false;
    }
});
reset.addEventListener("click",()=>{
    time_s=0;
    time_min=0;
    time_h=0;
    working=false;
    time_display.innerHTML = "run";
})


setInterval(function(){
    if(working){
        time_s++;
        if (time_s>=60){
            time_min++;
            time_s=0;
        }
        if (time_min>=60){
            time_h++;
            time_min=0;
        }
        if(time_h>0){
            time_display.innerHTML = time_h + "h" + time_min + "min"+ time_s + "s";
        }
        else if (time_min>0) {
            time_display.innerHTML = time_min + "min"+ time_s + "s";
        } else {
            time_display.innerHTML =  time_s + "s";
        }
    }
},1000);
