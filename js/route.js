/**
 * Created by Administrator on 2017/2/11.
 */
/*
* ����·��  ����·��Ҫ����angular��·��ģ�� ngRoute
* */
angular.module('movieApp.route',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        // ����·��
        $routeProvider.when('/',{
            templateUrl:'tmps/index-tmp.html'
        }).when('/nowplaying',{
            templateUrl:'tmps/nowplaying-tmp.html',
            controller:'nowPlayingCtrl'
        }).when('/later',{
            templateUrl:'tmps/later-tmp.html',
            controller:'laterCtrl'
        }).when('/top250',{
            templateUrl:'tmps/top250-tmp.html',
            controller:'top250Ctrl'
        })
    }]);

