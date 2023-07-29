// CityBike Locator app
// API: https://api.citybik.es/v2/#filter

window.onload = (e) => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()

        const userInput = document.querySelector('input[type="text"]').value

        console.log(userInput)
    })

    fetch(`https://api.citybik.es/v2/networks`).then((data) => {
        return data.json()
    }, (err) => {
        console.log(err, ` ERROR`)
    }).then((cityBikeData) => {
        console.log(cityBikeData.networks[0])

        document.querySelector('#network-name').innerHTML = cityBikeData.networks[0].name
        document.querySelector('#network-city').innerHTML = cityBikeData.networks[0].location.city
        document.querySelector('#network-country').innerHTML = cityBikeData.networks[0].location.country
    })





}