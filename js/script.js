function changeFunc() {

    let changedCity = document.querySelector('.city').value;

    fetch(`https://api.openweathermap.org/data/2.5/onecall?${changedCity}&lang=ua&appid=d95a55027170195124eebe07909c19c5`)
        .then(function (respFew) { return respFew.json() })
        .then(function (dataFew) {

            //day one
            document.querySelector('.day-one-pressure').textContent = `Тиск: ${dataFew.daily[0]['pressure']} hPa`;
            document.querySelector('.day-one-temperature').innerHTML = Math.round((dataFew.daily[0]['temp']['day'] - 273)) + '&deg;';
            document.querySelector('.day-one-clouds').textContent = dataFew.daily[0]['weather'][0]['description'];
            document.querySelector('.day-one-features').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataFew.daily[0]['weather'][0]['icon']}@2x.png">`;

            //day two
            document.querySelector('.day-two-pressure').textContent = `Тиск: ${dataFew.daily[1]['pressure']} hPa`;
            document.querySelector('.day-two-temperature').innerHTML = Math.round((dataFew.daily[1]['temp']['day'] - 273)) + '&deg;';
            document.querySelector('.day-two-clouds').textContent = dataFew.daily[1]['weather'][0]['description'];
            document.querySelector('.day-two-features').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataFew.daily[1]['weather'][0]['icon']}@2x.png">`;

            //day three
            document.querySelector('.day-three-pressure').textContent = `Тиск: ${dataFew.daily[2]['pressure']} hPa`;
            document.querySelector('.day-three-temperature').innerHTML = Math.round((dataFew.daily[2]['temp']['day'] - 273)) + '&deg;';
            document.querySelector('.day-three-clouds').textContent = dataFew.daily[2]['weather'][0]['description'];
            document.querySelector('.day-three-features').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataFew.daily[2]['weather'][0]['icon']}@2x.png">`;
        })
        .catch(function () {

        });

}

document.querySelector('.city').onchange = changeFunc;
changeFunc();