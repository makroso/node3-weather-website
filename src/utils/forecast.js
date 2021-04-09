const request = require('postman-request')

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c245d524651ee7e5e11c8d5de01df949&query=' + lat + ',' + lon

    request ({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current
            callback(
                undefined, 
                current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out."
            )
        }
    })
}

module.exports = forecast