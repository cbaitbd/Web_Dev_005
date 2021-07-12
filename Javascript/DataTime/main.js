
// Date


// console.log(new Date());

// let date = new Date();

// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getTime());

let clock = document.getElementById('clock');

setInterval(function () {

    // let date = new Date();

    // let hour = date.getHours();
    // let mnt = date.getMinutes();
    // let second = date.getSeconds();
    // let section = 'AM';

    // if (hour >= 12) {
    //     section = "PM"
    // }

    // if(hour % 12 < 10){
    //     hour = "0"+(hour % 12)
    // }else{
    //     hour %= 12 
    //     // hour = hour % 12
    // }

    // if(mnt < 10){
    //     mnt = "0"+mnt
    // }

    // if(second < 10){
    //     second = "0"+second
    // }

    // clock.innerHTML = `${hour}:${mnt}:${second} ${section}`


    clock.innerHTML = new Date().toLocaleTimeString('bn-BD');

}, 1000)
