layui.define(['code', 'element', 'table', 'util'], function(exports){
    var $ = layui.jquery
        ,element = layui.element
        ,layer = layui.layer
        ,form = layui.form
        ,util = layui.util
        ,device = layui.device();


    //阻止IE7以下访问
    if(device.ie && device.ie < 8){
        layer.alert('Layui最低支持ie8，您当前使用的是古老的 IE'+ device.ie + '，你丫的肯定不是程序猿！');
    }

    var home = $('#LAY_home');


    layer.ready(function(){
        /*$.get('menu/symfonyMenu.html', function (data) {
            $('#js-menu').html(data)
            element.init();
        })*/
    });

    //切换版本
    form.on('select(tabVersion)', function(data){
        var value = data.value;
        location.href = value === 'new' ? '/' : ('/' + value + '/doc/');
    });


    //首页banner
    setTimeout(function(){
        $('.site-zfj').addClass('site-zfj-anim');
        setTimeout(function(){
            $('.site-desc').addClass('site-desc-anim')
        }, 5000)
    }, 100);


    //数字前置补零
    var digit = function(num, length, end){
        var str = '';
        num = String(num);
        length = length || 2;
        for(var i = num.length; i < length; i++){
            str += '0';
        }
        return num < Math.pow(10, length) ? str + (num|0) : num;
    };



    //固定Bar
    if(global.pageType !== 'demo'){
        util.fixbar({

        });
    }

    //窗口scroll
    ;!function(){
        var main = $('.site-tree').parent(), scroll = function(){
            var stop = $(window).scrollTop();

            if($(window).width() <= 750) return;
            var bottom = $('.footer').offset().top - $(window).height();
            if(stop > 61 && stop < bottom){
                if(!main.hasClass('site-fix')){
                    main.addClass('site-fix');
                }
                if(main.hasClass('site-fix-footer')){
                    main.removeClass('site-fix-footer');
                }
            } else if(stop >= bottom) {
                if(!main.hasClass('site-fix-footer')){
                    main.addClass('site-fix site-fix-footer');
                }
            } else {
                if(main.hasClass('site-fix')){
                    main.removeClass('site-fix').removeClass('site-fix-footer');
                }
            }
            stop = null;
        };
        scroll();
        $(window).on('scroll', scroll);
    }();

    //示例页面滚动
    $('.site-demo-body').on('scroll', function(){
        var elemDate = $('.layui-laydate')
            ,elemTips = $('.layui-table-tips');
        if(elemDate[0]){
            elemDate.each(function(){
                var othis = $(this);
                if(!othis.hasClass('layui-laydate-static')){
                    othis.remove();
                }
            });
            $('input').blur();
        }
        if(elemTips[0]) elemTips.remove();

        if($('.layui-layer')[0]){
            layer.closeAll('tips');
        }
    });

    //代码修饰
    layui.code({
        elem: 'pre',
        about: false,
        skin: 'notepad'
    });

    //目录
    var siteDir = $('.site-dir');
    if(siteDir[0] && $(window).width() > 750){
        layer.ready(function(){
            layer.open({
                type: 1
                ,content: siteDir
                ,skin: 'layui-layer-dir'
                ,area: 'auto'
                ,maxHeight: $(window).height() - 300
                ,title: '目录'
                //,closeBtn: false
                ,offset: 'r'
                ,shade: false
                ,success: function(layero, index){
                    layer.style(index, {
                        marginLeft: -15
                    });
                }
            });
        });
        siteDir.find('li').on('click', function(){
            var othis = $(this);
            othis.find('a').addClass('layui-this');
            othis.siblings().find('a').removeClass('layui-this');
        });
    }
    //让导航在最佳位置
    var thisItem = $('.site-demo-nav').find('dd.layui-this');
    if(thisItem[0]){
        var itemTop = thisItem.offset().top
            ,winHeight = $(window).height()
            ,elemScroll = $('.layui-side-scroll');
        if(itemTop > winHeight - 120){
            elemScroll.animate({'scrollTop': itemTop/2}, 200)
        }
    }
    //手机设备的简单适配
    var treeMobile = $('.site-tree-mobile')
        ,shadeMobile = $('.site-mobile-shade')

    treeMobile.on('click', function(){
        $('body').addClass('site-mobile');
    });

    shadeMobile.on('click', function(){
        $('body').removeClass('site-mobile');
    });

    exports('global', {});
});