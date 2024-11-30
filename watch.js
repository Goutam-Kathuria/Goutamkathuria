let hour=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')
let a

function clock(){
    a=new Date()
    sc=a.getSeconds()
    mn=a.getMinutes()
    hr=a.getHours()

    let secangle=sc*6
    let minangle=mn*6
    let hrangle=hr*30+mn*0.5

    sec.style.transform=`rotate(${secangle}deg)`
    min.style.transform=`rotate(${minangle}deg)`
    hour.style.transform=`rotate(${hrangle}deg)`
}
setInterval(clock,1000)