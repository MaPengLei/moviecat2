/**
 * Created by Administrator on 2017/2/11.
 */
/*
* �����js
    ����һ�� ����ģ��  movieApp.service
    ����һ��$movieServ����
* */
angular.module('movieApp.service',[])
    .service('$movieServ', function () {
// json�Ĳ��� url��ʾ���������API��ַ params��ʾAPI��Ҫ����Ĳ��� ���� start=0��ʼ��Ӱ callback���ǻص�����  success(function (data) {})
        this.jsonp = function(url, params, callback) {
            //1.��̬����һ��script��ǩ
            var script = document.createElement('script');
            //2. ƴ��url https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=aa
            url += '?';
            for (var key in params) {
                url += key + '=' + params[key] + '&';
            }
            url += 'callback=aa';
            //3.��url���õ�script��src��
            script.src = url;
            //4.��script��ӵ�ҳ����
            document.body.appendChild(script);
            //5.��window���洴��һ��aaȫ�ֺ���
            // aa({����})
            window.aa = function(data) { //�β�
                //  6.�ں����������õ����� Ȼ�󴫸� success�Ļص�������Ϊ����
                callback(data); //ʵ��
                //7. ��ȡ������ݺ�ɾ��script��ǩ
                document.body.removeChild(script);
            }
        }

    })