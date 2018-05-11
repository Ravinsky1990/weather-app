const request = require("request");

const getWeather = (lat, lng, callback)=>{
request({
    url: `https://api.darksky.net/forecast/fd79565e7653322ae4201d6182ee3e8a/${lat},${lng}`,
    json: true,
}, (error, response, body)=>{
    if(error){
        callback("Unable to connect to Forecast.io servers!")
    }else if(body.code===400){
        callback("The given location is invalid.")
    }else{
        callback(undefined, {
            temperature:body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        })
    }
})
};

module.exports.getWeather = getWeather;

