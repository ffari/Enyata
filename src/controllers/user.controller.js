const { connect } = require('../routes');
var app = require('../app');
var res_data;
var res_data1;

function postData(){
    app.post
}

function getCityData(q, appid){
    var url = 'http://api.openweathermap.org/geo/1.0/direct/' + q + appid;
    app.get(url, (req, res)=>{
        console.log(res);
    });
}


module.exports = {
    postIncident: function(x, y){
        var city = y;
        var appid = x;

        getCityData(city, appid);
    },
};

