/**
 * Created by Administrator on 2017/2/11.
 */
// 创建即将上映的控制器模块'movieApp.top250Ctrl'
// 创建一个控制器top250Ctrl'

angular.module('movieApp.nowPlayingCtrl',[])
    .controller('nowPlayingCtrl',['$scope','$http','$movieServ', function ($scope,$http,$movieServ) {
        //.1 创建一个电影列表属性
        $scope.movie={};
        //.2 通过ajax请求data.json文件  获取数据赋值给movie中
        //$http({
        //    url:"data.json",
        //}).success(function (data) {
        //    console.log(data);
        //    $scope.movie=data;
        //})
       $movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', {
            count: 100,
            start: 0
        }, function(data) {
            console.log(data);
           $scope.movie=data            // 因为这是我们自己写的异步代码 所有要手动刷新
           $scope.$apply()
        })

        //$movieServ.jsonp()

    }]);
