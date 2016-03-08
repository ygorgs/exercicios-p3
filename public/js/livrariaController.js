(function () {

	var app = angular.module('Livraria', []);
	
	app.controller('LivrariaCtrl', function ($scope) {

		var livros = window.db;

		$scope.indice = 0;
		$scope.livro = livros[$scope.indice];

		$scope.next = function (){
			$scope.indice +=1;
			if($scope.indice === 10){ 
				$scope.indice=0;
			}		
			$scope.livro = livros[$scope.indice];
			console.log("next");
		}
		
		$scope.previous = function (){
			$scope.indice -=1;
			if($scope.indice === -1){ 
				$scope.indice=9;
			}		
			$scope.livro = livros[$scope.indice];
			console.log("previous");
		}	
	});
})()