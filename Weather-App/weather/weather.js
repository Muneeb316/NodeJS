const request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/81ca7ae1d0167c48a62e365d9e57aae0/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temprature: body.currently.temprature,
                apparentTemprature: body.currently.apparentTemprature
            });
        }
    });

};
module.exports.getWeather = getWeather;

