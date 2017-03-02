/**
 * Created by Administrator on 2017/1/15/015.
 */
$(function () {
//<----------���Ƿָ���---------------------------------------------------------------->
    //��������
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
            alert('�س��ύ��');
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
//<----------���Ƿָ���---------------------------------------------------------------->
//    ***********�����������˵�
    $("#header-nav").find("li").hover(function () {
        $(this).find("ul").show(200);
    }, function () {
        $(this).find("ul").hide(200);
    });
    //�ȵ㣨���Ͻǵ�Сͼ��)����
    $(".allProducts .promoted").append('<span class="hot">hot</span>');
//<----------���Ƿָ���---------------------------------------------------------------->
//    ***********�ֲ�Ч������
    var $imgRolls;
    $imgRolls = $("#bannerSub a").css("opacity", "0.8");
    var len = $imgRolls.length;
    var index = 0;
    var adTimer = null;
    $imgRolls.mouseover(function () {
        index = $imgRolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    //���� ֹͣ������������ʼ������
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
//���������г�����
    function showImg(index) {
        //����һ���µ�($imgRolls),����ֱ�������������õģ�����������������Ը���
        var $rollObj = $("#bannerSub");
        var $rollList = $rollObj.find("a");
        //����ѡ����ͼƬ��·����a����һ��
        var newHref = $rollList.eq(index).attr("href");
        $(".bannerList").attr("href", newHref)
            .find("img").eq(index).stop(true, true).fadeIn(400)
            .siblings().fadeOut(400);
        $rollList.css("opacity", "0.8")
            .eq(index).css("opacity", "1");
    }
});


//<----------���Ƿָ���---------------------------------------------------------------->
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
//<----------���Ƿָ���---------------------------------------------------------------->
//��Ʒ�б����
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

//<----------���Ƿָ���---------------------------------------------------------------->
//��ӷŴ�ͼ������span��ǩ����
$(function(){
    $(".product-list a").each(function(index){
        var $img = $(this).find("img");
        var img_width = $img.width();
        var img_height = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:0;width:'+img_width+'px;height:'+img_height+'px;"class="imgMask"></span>';
        $(spanHtml).appendTo(this);
    });
    //���hover�¼����ɹ�
    //$(".product-list a").delegate('.imgMask','hover',function(){
    //    console.log("aa");
    //    $(this).toggleClass("imgOver");
    //    return false;
    //});
});
//<----------���Ƿָ���---------------------------------------------------------------->
