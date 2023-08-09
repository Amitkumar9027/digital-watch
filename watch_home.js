setInterval(()=>{
    const dt= new Date();
    dthour= dt.getHours();
    dtminute =dt.getMinutes();
    dtseconds=dt.getSeconds();
    hour_rotation=30*dthour + dtminute/2;
    minute_rotation =6*dtminute;
    second_rotation=6*dtseconds;

    hour.style.transform = `rotate(${hour_rotation}deg)`;
    minute.style.transform = `rotate(${minute_rotation}deg)`;
    second.style.transform = `rotate(${second_rotation}deg)`;
    document.getElementById('hour1').innerText=`${dthour}`
    document.getElementById('minute1').innerText=`${dtminute}`
    document.getElementById('second1').innerText=`${dtseconds}`
},100)