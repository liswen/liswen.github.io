/**
 * Created by Administrator on 2016/9/15.
 */
//轮播图
(function($){
    $.fn.autoPlay=function(obj) {
        var main=this;//获取图片父元素
        var imagsIndex=0;//做为autoplay参数
        var imagsNum=obj.imagsNum;//获取图片总长度
        var ZIndex=obj.imagsNum;//设置图片zindex的值，防止定位后最后的图片覆盖之前添加的图片
        var time=obj.autoTime//定时器
        var wid=obj.width;
        var hei=obj.height;
        var left=obj.navLeft;
        var top=obj.navTop;
        main.append("<p class='oP'></p>");//添加p标签存放小圆点
        //同时添加图片和小圆点
        for(var i=0;i<imagsNum;i++){
            ZIndex--;
            main.append("<img class='images' src='"+obj.src[i]+"' style='z-index:"+ZIndex+"'>");
            main.find("p").append("<span class='oSpan'></span>");
        }
        main.css({position:"relative",width:""+wid+"px",height:""+hei+"px"})
        $(".images").css({position:"absolute",width:"100%",height:"100%"})
        $(".oP").css({position:"absolute",zIndex:9999,left:left,top:top})
        $(".oSpan").css({display:"inline-block",width:"15px",height:"15px",borderRadius:"50%",marginRight:"5px"})
        main.find("span").eq(0).css("background","white").siblings().css("background","#cccccc");//设置第一个小圆点默认为白色
        // alert(main.find("span").eq(0).css("background"))
        //自动播放函数
        function autoplay() {
            imagsIndex++
            if(imagsIndex>imagsNum-1){
                imagsIndex=0
            }
            main.children("img").eq(imagsIndex).fadeIn().siblings("img").fadeOut();
            main.find("span").eq(imagsIndex).css("background","white").siblings().css("background","#cccccc");
        }
        var timer=setInterval(autoplay,time);              //声明定时器
        //鼠标移入时停止定时器
        main.children("img").hover(function () {
            clearInterval(timer)
        },function () {
            timer=setInterval(autoplay,time)               //离开时启动定时器，！前面要加timer=。。。，否则会无限开启定时器
        })
        //小圆点点击时切换图片
        main.find("span").click(function () {
                imagsIndex=$(this).index()                  //将当前index值赋值给imagsIndex进行关联，$(this)返回当前元素在集合中的索引值
                main.children("img").eq(imagsIndex).fadeIn().siblings("img").fadeOut();
                main.find("span").eq(imagsIndex).css("background","white").siblings().css("background","#cccccc");
        })
       return this
    };
}(jQuery));

