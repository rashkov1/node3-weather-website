const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = '' 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() /*prevent devault behaviour of a form */
   
    const location = search.value
    messageOne.textContent = 'Loading...'
   
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecastData.temperature + ' Humidity is: ' + data.forecastData.humidity
        }
        
    })
})
})