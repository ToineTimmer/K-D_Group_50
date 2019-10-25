angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);
//Gewoon maar gekopieerd, hoe zit dit dan precies??

function mainCtrl($scope, $http, ChartJsProvider){
//Van Q4, ass5.


   $scope.abdomenSPARQL = function($scope,$http){
         $scope.myEndpoint = "http://192.168.1.12:7200/repositories/Final_Project_v01/" ;
         $scope.abdomenQueryText = "SELECT * WHERE { ?exercise rdf:type oo:Abdomenexercise; rdfs:label ?label; oo:trainsMuscle ?muscle; rdfs:comment ?comment; oo:exercise_instruction ?instruction; oo:hasForce ?force; oo:hasMechanics ?mechanics; oo:hasUtility ?utility; oo:usesEquipment ?equipment. filter(langMatches(lang(?label),""EN""))"" SERVICE <http://dbpedia.org/sparql> { ?exercise foaf:depiction ?thumb. bind('<figure><img src="{{thumb}}"><figcaption>{{label}}</figcaption></figure>' as ?widget)}}"

      $scope.abdomenquery = encodeURI($scope.abdomenQueryText).replace(/#/g, '%23') ;


      $http( {
          method: "GET",
        url : $scope.myEndpoint + "?query=" + $scope.abdomenquery,
                    headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
          })
          .succes(function(data, status ) {
              console.log(data);
              $scope.result =data;
              $scope.myDynamicLabels = [];
              $scope.myDynamicData = [];


    })
      .error(function(error) {
          console.log('Error '+error);
      });
    };
}






}
