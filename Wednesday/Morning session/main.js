// Angular Setup
angular.module("TooMuchPressure", []) //Creats the TooMuchPressure module (You can build more then one)
// angular.module("NotEnoughPressure", []) second Module


angular.module("TooMuchPressure")
    .controller("pressurecontrol", ["$scope",function($scope){
    console.log("Hello World")
        
    }])