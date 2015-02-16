angular.module('app', ['ngSlides']);

angular.module('app').controller('MainController', function(){
    var vm = this;

});

angular.module('app').config(function(slideServiceProvider){
    slideServiceProvider.setSlides([
        {
            "id": "today",
            "title": "Today",
            "controller": "TodayController",
            "controllerAs": "todayCtrl",
            "templateUrl": "sections/today/today.html"
        },
        {
            "id": "five",
            "title": "5 Days",
            "controller": "FiveController",
            "controllerAs": "fiveCtrl",
            "templateUrl": "sections/five/five.html"
        },
        {
            "id": "sixteen",
            "title": "16 Days",
            "controllerAs": "sixteenCtrl",
            "templateUrl": "sections/sixteen/sixteen.html"
        }
    ]);
});