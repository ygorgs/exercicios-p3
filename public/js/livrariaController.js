(function () {

	var app = angular.module('Livraria', []);
	
	app.controller('LivrariaCtrl', function ($scope) {

		var livros = window.db;

		$scope.indice = 0;
		$scope.livro = livros[$scope.indice];

		$scope.next = function (){
			$scope.indice +=1;
			if($scope.indice === livros.length){ 
				$scope.indice=0;
			}		
			$scope.livro = livros[$scope.indice];
			console.log("next");
		};
		
		$scope.previous = function (){
			$scope.indice -=1;
			if($scope.indice === -1){ 
				$scope.indice= livros.length - 1;
			}		
			$scope.livro = livros[$scope.indice];
			console.log("previous");
		};

		$scope.getAutores = function(){
			var autores = "Por: ";
			angular.forEach($scope.livro.autores, function(autor, index){
				if(index === $scope.livro.autores.length - 1){
					autores += autor + ".";
				}else{
					autores += autor + ", ";
				}
			});
			return autores;
		};

		$scope.addComentario = function(user){
			if($scope.livro.user === undefined){
				$scope.livro.user = [];
			}
			$scope.livro.user.push(user);
			delete $scope.user;
		};

		$scope.addLivro = function(novoLivro){
			livros.push(novoLivro);
		};
	});
})()