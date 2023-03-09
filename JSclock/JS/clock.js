let UserName =prompt("Adinizi giriniz.")
let  myName =document.querySelector("#myName")
myName.innerHTML=UserName;

function showTime() {
    let myClock =document.querySelector("#myClock");
    var date = new Date();
    
    var days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    myClock.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}`
}
setInterval(showTime,1000); //1000 milisn(1 sn)'de bir showTime fonksiyonunu cagirir.