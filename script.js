let hours = document.querySelector(".hours")
let minutesupdate= document.querySelector(".Minutes")
let secondupdate= document.querySelector(".Second")


setInterval(()=>{
    let update = new Date()
hours.innerHTML = update.getHours()
minutesupdate.innerHTML = update.getMinutes()
secondupdate.innerHTML = update.getSeconds()
},1000)
