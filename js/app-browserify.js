 "use strict";

  
 //     // just Node?
 //     // var fetch = require('node-fetch')
 //     // Browserify?
 //     // require('whatwg-fetch') //--> not a typo, don't store as a var

 // // es6 polyfills, powered by babel
  require("babel/register")

 // // other stuff that we don't really use in our own code
 // // var Pace = require("../bower_components/pace/pace.js")

 // // require your own libraries, too!
 // // var Router = require('./app.js')

 // // window.addEventListener('load', app)

 // // function app() {
 // // start app
 // // new Router()
 // // }



 




 var findClock = function() {

     var container = document.querySelector('.container')

     var date = new Date()

     var currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()]
         //create colorScale, scalable for use in rgb or hex

     var range = [24, 60, 60]

     var colorScale = currentTime.map(function(v, i) {

         return Math.floor(v / range[i] * 255)

     })

     var color = `rgb(${colorScale.join(',')})`
         //convert colorScale into hex notation

     var hexColor = colorScale.map(function(v) {
         return v.toString(16).toUpperCase()
     })

     hexColor = zeroString(hexColor)

     container.style['background'] = color

     container.querySelector("hr").width = `${((currentTime[2] / range[2]) * 100)}%`

     currentTime = zeroString(currentTime)

     container.querySelector(".time").innerHTML = currentTime

     container.querySelector(".hex").innerHTML = hexColor
 }


 setInterval(findClock, 1000)

 var zeroString = function(arr) {

     return arr.map(function(v) {

         if (v.toString().length < 2) {

             return v = '0' + v.toString()

         } else {

             return v

         }
     }).join(':')
 }
