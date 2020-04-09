var button= document.querySelector('.submit');
var input = document.querySelector('.input_text');
var name = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var icon = document.querySelector('#icon');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d6e876915cce97fab77b5912a1ed7e34')

.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var cloudsValue = data['clouds']

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})



.catch (err => console.log('Wrong City Name'))
})