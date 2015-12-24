var zendao = require('./zendao');

zendao.login(function(error,response,body){
  zendao.buglist();
})
