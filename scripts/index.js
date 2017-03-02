/**
 * Created by Administrator on 2017/1/15/015.
 */
$(function () {
//<----------我是分割线---------------------------------------------------------------->
    //搜索框功能
    $("#inputSearch").focus(function () {
        $(this).addClass("focus");
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        $(this).removeClass("focus");
        if ($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    }).keyup(function (e) {
        if (e.which == 13) {
            alert('回车提交表单');
        }
    });
    //<----------------------------------------------------------------------------------------------->
    $(function(){
        $("#skin").find("li").click(function () {
            console.log("a");
            switchSkin(this.id);
        });
        var cookie_skin = $.cookie("MyCssSkin");
        if (cookie_skin) {
            switchSkin(cookie_skin);
        }
    });
    function switchSkin(skinName) {
        $("#" + skinName).addClass("selected")
            .siblings().removeClass("selected");
        $("#cssFile").attr("href", "skin/" + skinName + ".css");
        $.cookie("MyCssSkin", skinName, {path: '/', expires: 10});
    }
//<----------我是分割线---------------------------------------------------------------->
//    ***********导航栏二级菜单
    $("#header-nav").find("li").hover(function () {
        $(this).find("ul").show(200);
    }, function () {
        $(this).find("ul").hide(200);
    });
    //热点（右上角的小图标)设置
    $(".allProducts .promoted").append('<span class="hot">hot</span>');
//<----------我是分割线---------------------------------------------------------------->
//    ***********轮播效果功能
    var $imgRolls;
    $imgRolls = $("#bannerSub a").css("opacity", "0.8");
    var len = $imgRolls.length;
    var index = 0;
    var adTimer = null;
    $imgRolls.mouseover(function () {
        index = $imgRolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    //划入 停止动画，画出开始动画。
    //noinspection JSJQueryEfficiency
    $("#bannerSub").hover(function () {
        if (adTimer) {
            clearInterval(adTimer);
        }
    }, function () {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 4000);
    }).trigger("mouseleave");
//动画切入切除函数
    function showImg(index) {
        //声明一个新的($imgRolls),或者直接用上面声明好的，最好是新声明，可以复用
        var $rollObj = $("#bannerSub");
        var $rollList = $rollObj.find("a");
        //设置选项里图片的路径和a链接一致
        var newHref = $rollList.eq(index).attr("href");
        $(".bannerList").attr("href", newHref)
            .find("img").eq(index).stop(true, true).fadeIn(400)
            .siblings().fadeOut(400);
        $rollList.css("opacity", "0.8")
            .eq(index).css("opacity", "1");
    }
});


//<----------我是分割线---------------------------------------------------------------->
$(function () {
    var x = 10;
    var y = 20;
    $(".toolTip").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var toolTip = "<div id='toolTip'>" + this.myTitle + "</div>";
        $("body").append(toolTip);
        $("#toolTip").css({
            "top": (e.pageY + y) + 'px',
            "left": (e.pageX + x) + 'px'
        }).show("fast");
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#toolTip").remove();
    }).mousemove(function (e) {
        $("#toolTip").css({
            "top": (e.pageY + y) + 'px',
            "left": (e.pageX + x) + 'px'

        });
    });
});
//<----------我是分割线---------------------------------------------------------------->
//商品列表浏览
$(function(){
    $(".brandList-header ul li a").click(function(){
        $(this).parent().addClass("chang").siblings().removeClass("chang");
        var idx = $(".brandList-header ul li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
    function showBrandList(index){
        var imgWidth = $(".product-list img").width();
        $(".product-list").stop(true ,false).animate({left:-imgWidth*4*index},1000);
    }
});

//<----------我是分割线---------------------------------------------------------------->
//添加放大镜图标所在span标签内容
$(function(){
    $(".product-list a").each(function(index){
        var $img = $(this).find("img");
        var img_width = $img.width();
        var img_height = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:0;width:'+img_width+'px;height:'+img_height+'px;"class="imgMask"></span>';
        $(spanHtml).appendTo(this);
    });
    //添加hover事件不成功
    //$(".product-list a").delegate('.imgMask','hover',function(){
    //    console.log("aa");
    //    $(this).toggleClass("imgOver");
    //    return false;
    //});
});
//<----------我是分割线---------------------------------------------------------------->
