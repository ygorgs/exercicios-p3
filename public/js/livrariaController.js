(function () {

	var app = angular.module('Livraria', []);
	
	app.controller('LivrariaCtrl', function () {
		var self = this;

		self.livros = window.db;
	});
})()