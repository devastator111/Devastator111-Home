slot = document.querySelector("div");
slot.appendChild(document.createElement("P"));
function resetCount(){
    
        countdownEnd = new Date("June, 06, 2025, 15:08:00").valueOf() - Date.now();
        var time = {};
        time.weeks = Math.floor(countdownEnd/604800000);
        time.days = Math.floor((countdownEnd-time.weeks*604800000)/86400000);
        time.hours = Math.floor((countdownEnd-(time.days*86400000+time.weeks*604800000))/3600000);
        time.minutes = Math.floor((countdownEnd-(time.days*86400000+time.weeks*604800000+time.hours*3600000))/60000);
        time.seconds = Math.floor((countdownEnd-(time.days*86400000+time.weeks*604800000+time.hours*3600000+time.minutes*60000))/1000);
        countdown = document.createElement("P");
        if(Date.now()<(new Date("June, 06, 2025, 15:08:00").valueOf())){
            countdown.textContent = time.weeks+" : "+time.days+" : "+time.hours+" : "+time.minutes+" : "+time.seconds;
        }else{
            slot.children[0].textContent='Relax!';
            countdown.textContent = "Summer Break!!"

        }
        countdown.setAttribute('style','padding-top:0px;');
        countdown.setAttribute('id','countdown');
        slot.replaceChild(countdown,slot.childNodes[slot.childNodes.length-1]);
        
        //console.log(Date.now<new Date("June, 06, 2025, 15:08:00").valueOf());
    
}
resetCount();
setInterval(resetCount,1000);