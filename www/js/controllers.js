angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', '$http', function ($scope, $http) {
   $scope.submit = function(){
      $http.get('http://localhost/api/db.php')
    .success(function(data) {
        $getData = data;
    //     console.log($getData[0].no_urut);
        
    // });
    // var link ="http://localhost/api/db.php";
    // $http.get(link, {kodeUnik: $scope.username}).then(function (res){
          $scope.response = $getData[0].no_urut;
    });

   };
    
}])
//   $scope.data = {};
//     $scope.submit = function(){
//         var link = ;
//         $http.post(link, {kodeUnik: $scope.data.username}).then(function (res){
//           console.log(data.no_urut);
//             $scope.response = res.data.no_urut;
//         });
//     };
// })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('qrcodeController', function($scope, $cordovaBarcodeScanner){
  $scope.scanBarcode = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      alert(imageData.text);
      console.log("format :"+ imageData.format);
    },function(error){
      console.log("error");
    });
  }
});
