(function () {

	var app = angular.module('Contador', []);
	
	app.controller('ContadorCtrl', function ($scope, $interval) {

		  var STATE_STOP = 0;
		  var STATE_START = 1;

		  var self = this;

		  self.atual = 0;
		  self.final = 100;
		  self.milisegundos = 100;
		  self.state = STATE_STOP;

		  var intervalPromisse;

		  self.init = function() {
		    self.state = STATE_START;
		    if (intervalPromisse) {
		      $interval.cancel(intervalPromisse);
		    }
		    intervalPromisse = $interval(function(){
		      if (self.state == STATE_START && self.atual < self.final ) {
		        self.atual += 1;
		      }
		    }, self.milisegundos);
		  }

		  self.stop = function() {
		    self.state = STATE_STOP;
		    alert("Contagem parada!");
		  }

		  self.reset = function() {
		    self.atual = 0;
		  }
	});
})()