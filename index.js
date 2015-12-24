var request = require('request');
var config = require('./config');

request({
  url:config.loginurl,
  method:"POST",
  form:{
    account:config.username,
    password:config.password,
    keepLogin:"on",
    referer:config.referer
  }
},function(error,response,body){
  if(error){
    console.log(error);
    return;
  }
  if(response.statusCode!="200"){
    console.log(response);
    return;
  }
  console.log(body);
})
