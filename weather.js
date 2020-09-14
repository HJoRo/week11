var button =document.querySelector('.button');
var location =document.querySelector('.location');
var place =document.querySelector('.place');
var desc=document.querySelector('.desc');
var temp =document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+location.value+",us&appid=f69a25959f902ce4d92e4a982a6d0e2f&units=imperial")
    .then(response => response.json())
    .then(data => {
        var placeValue = data['place'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];

        document.getElementById('city').innerHTML = placeValue;
        document.getElementById('temp').innerHTML = tempValue;
        document.getElementById('desc').innerHTML = descValue;
        document.getElementById('icon').src = `http://openweathermap.org/img/w/${iconValue}.png`
    })

.catch(err => alert("Please enter a valid US ZIP code."))
})