const worldcup=new Date(2022,10,22);

function startCountDown ()
{
    const cur_date=new Date();
    //console.log(worldcup);

   // console.log(cur_date)

    const seconds=(worldcup-cur_date)/1000;
// console.log("Seconds:",Math.floor(seconds%60));

    document.getElementById("seconds").innerHTML=Math.floor(seconds%60);
    
    const minutes=Math.floor(seconds/60);

    document.getElementById("minutes").innerHTML=minutes%60;

    
    const hours=Math.floor(minutes/60);

    document.getElementById("hours").innerHTML=hours%24;
    
    //console.log("hours:"+hours);
    
    const days=Math.floor(hours/24);
    
    //console.log("Days"+days);
    document.getElementById("days").innerHTML=days;
}

setInterval(startCountDown,1000);
