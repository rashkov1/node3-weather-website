const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a52bcb4a5152eddd06f1c4abe91dd2b7/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                temperature: body.daily.data[0].summary,
                temperature1: body.currently.temperature,
                rainProbability: body.currently.precipProbability
        })
        }
    })
}

module.exports = forecast