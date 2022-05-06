setInterval(() => {
    let a = new Date;
    let date = a.toLocaleDateString();
    let time = a.getHours()+" hours "+a.getMinutes()+" min "+a.getSeconds()+" sec ";
    document.getElementById('getdate').innerHTML=time+" date is : "+date;
}, 1000);
