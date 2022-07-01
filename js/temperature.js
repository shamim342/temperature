document.getElementById('spinner').style.display = 'none';
const inputCity = document.getElementById('inputCity');
const situation = document.getElementById('situation');
const weatherIcon = document.getElementById('weatherIcon');
const getSubmit = () => {

    const inputCityValue = inputCity.value;
    inputCity.value = '';

    document.getElementById('spinner').style.display = 'block';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityValue}&appid=2dfda71fa2369afa27933af3b79a2671`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayItem(data))

    console.log(inputCityValue);

}

const displayItem = (datas) => {
    const cityName = document.getElementById('cityName');
    cityName.innerText = `${datas.name}`;
    if (cityName.innerText == 'undefined') {
        document.getElementById('error').innerText = 'Please! input valid City name';
        cityName.innerText = '';
        document.getElementById('temperature').innerText = '';
        document.getElementById('spinner').style.display = 'none';
    } else {
        document.getElementById('error').innerText = '';
        document.getElementById('spinner').style.display = 'none';
        const k = `${datas.main.temp}`;
        const c = (parseInt(k) - 273.15).toFixed(2);
        document.getElementById('temperature').innerText = `${c}`;
        situation.innerText = `${datas.weather[0].main}`;
        const iconUrl = `http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('src', iconUrl);

    }




}