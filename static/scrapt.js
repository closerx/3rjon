function alldata(city) {
      let fetchRes = fetch(
        "http://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=Kingdom%20Saudia%20Arabia&method=4");
      fetchRes.then(res =>
        res.json()).then(data => {
        let hijri = data["data"]["date"]["hijri"]["date"]
        let meldi = data["data"]["date"]["gregorian"]["date"]

        //date
        document.getElementById("hjiri").innerText = hijri
        document.getElementById("mladi").innerText = meldi

        //month
        let month = data["data"]["date"]["hijri"]["month"]["ar"]
        document.getElementById("mymo").innerText = month
        //day
        let day = data["data"]["date"]["hijri"]["weekday"]["ar"]
        document.getElementById("day").innerText = day
        //times
        let ppp = data["data"]["timings"]
        //times dom
        document.getElementById("ttt1").innerText = ppp["Fajr"]
        document.getElementById("ttt2").innerText = ppp["Sunrise"]
        document.getElementById("ttt3").innerText = ppp["Dhuhr"]
        document.getElementById("ttt4").innerText = ppp["Asr"]
        document.getElementById("ttt5").innerText = ppp["Maghrib"]
        document.getElementById("ttt6").innerText = ppp["Sunset"]

      });
    };
  
var mycitys = document.querySelector('#allcitys');
alldata("Makkah")
mycitys.addEventListener("change", function() {
  alldata(mycitys.value) 
  
});
