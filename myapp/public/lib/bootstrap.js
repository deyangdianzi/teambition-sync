import 'angular-material/angular-material.css!'
//import '/stylesheet/style.css!'
import angular from 'angular'
import material from 'angular-material'
import {buglistcontrollerinit} from './index.js'
export function bootstrap(){
  //bootstrap code here
  angular.element(document).ready(function(){
    let appname = 'myApp';
    let body = document.getElementsByTagName("body")[0];
    let app = angular.module(appname,[material]);
    buglistcontrollerinit(app);
    angular.bootstrap(body,[app.name],{strictDi:false});
  });
}
