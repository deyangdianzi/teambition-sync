var request = require('request').defaults({jar: true});
var config = require('./config');
function effortcreate(data,efforts) {
  var formdata={  date:date};
  for (var i = 0; i < efforts.length; i++) {
    var effort = efforts[i];
    formdata["id["+i+"]"]=i;
    formdata["work["+i+"]"]=effort.work;
    formdata["consumed["+i+"]"]=2;
    formdata["objectType["+i+"]"]="custom";
  }
  request({
    url:"http://115.29.238.236:82/zentao/effort-batchCreate-"+date+".html",
    method:"POST",
    form:formdata
  },function(error,response,body){
    if(error)console.log(error);
    if(response.statusCode!="200")console.log(response);
    console.log(body);
  });
}
function todoadd(){
  //添加日志
  request({
    url:"http://115.29.238.236:82/zentao/todo-create-20151224.html",
    method:"POST",
    form:{
      date:"2015-12-24",
type:"custom",
pri:3,
name:"",
name:"测试创建日志",
desc:"测试创建日志",
status:"wait",
begin:"1030",
end:"1100",
    }
  },function(){

  })
}
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
  //get all my todo
  // request({url:"http://115.29.238.236:82/zentao/my-todo-all.html",method:"GET"},function(error,response,body){
  //   console.log(body);
  // });
  // todoadd();
  var efforts=[];
  efforts.push({work:"测试"});
  efforts.push({work:"测试"});
  effortcreate("2015-12-24",efforts);
})
