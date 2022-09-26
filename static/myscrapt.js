function alldata(city) {
      let fetchRes = fetch(
        "/data/" + city);
      fetchRes.then(res =>
        res.json()).then(data => {
        console.log(data)
      });
    };
  
var mycitys = document.querySelector('#allcitys');
alldata("Makkah")
mycitys.addEventListener("change", function() {
  alldata(mycitys.value) 
  
});
