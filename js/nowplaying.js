/**
 * Created by Administrator on 2017/2/11.
 */
// ����������ӳ�Ŀ�����ģ��'movieApp.top250Ctrl'
// ����һ��������top250Ctrl'

angular.module('movieApp.nowPlayingCtrl',[])
    .controller('nowPlayingCtrl',['$scope','$http','$movieServ', function ($scope,$http,$movieServ) {
        //.1 ����һ����Ӱ�б�����
        $scope.movie={};
        //.2 ͨ��ajax����data.json�ļ�  ��ȡ���ݸ�ֵ��movie��
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
           $scope.movie=data            // ��Ϊ���������Լ�д���첽���� ����Ҫ�ֶ�ˢ��
           $scope.$apply()
        })

        //$movieServ.jsonp()

    }]);
