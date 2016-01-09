angular.module("app").service("mainService", function($http, $q) {

  var baseURL = "http://swapi.co/api/";
  this.getPlanets = function() {
  //   var deferrer = $q.defer();
  //   $timeout(function() {
  //     if (response) {
  //       deferrer.resolve("Sparkly Unicorn");
  //     } else {
  //       deferrer.reject("Unicorns do not exist, :scrunchyface:");
  //     }
  //   }, 2000);
  //   return deferrer.promise;
  // };
    return $http({
      method: "GET",
      url: baseURL + "planets/"
    }).then (function(response){
      return(response.data.results);
    });
  };

});
