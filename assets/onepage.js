var scroll = 1;
var page_index = getParameterByName('tid') || 0;
var animate = {
    delay: 20,
    time: 2000
}
// $(".main").onepage_scroll({
//     sectionContainer: "section",     // 指定单页面的每个页面外部容器
//     easing: "ease",                  // 页面切换的缓动效果，可设置成 "ease", "linear", "ease-in","ease-out", "ease-in-out"
//     animationTime: 300,             // 每个页面切换的时长
//     pagination: false,                // 是否显示右边的导航圆形按钮
//     updateURL: true,                // 切换页面的时候是否需要更新页面URL.
//     beforeMove: function(index) {
//         scroll = index;
//         if(page_index !== "3" && page_index !== "18" && page_index !== "28" && page_index !== "50"){
//             if(scroll === 1){
//                 $("#header").removeClass("fadeOutUp")
//                 $("#header").addClass("fadeInDown")
//             }else{
//                 $("#header").removeClass("fadeInDown")
//                 $("#header").addClass("fadeOutUp")
//             }
//         }
//     },  // 页面切换之前的回调，index表示页面的索引
//     afterMove: function(index) {

//     },   // 页面切换之后的回调，index表示页面的索引
//     loop: false,                     // 当前页面为最后一个的时候，继续向下切换是否回到第一个页面
//     keyboard: true,                  // 是否可以使用方向键来操纵页面切换
//     responsiveFallback: false,        // 是否当浏览器宽度为某一个指定值的时候，去除该插件效果，如果想实现这种效果，那么可以指定一个宽度值
//     direction: "vertical"            // 页面切换方向，可选值为 "vertical"水平 和"horizontal"垂直. 默认 "vertical"
// });

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$("#address1").click(function (){
    $("#menu").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address1").addClass("active");
    $("#list").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address1").addClass("active");
    $("#myIframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.713223800806!2d114.17755235269279!3d22.299706206834582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404018aa0ba2525%3A0xfc556d87a2159f99!2z5Y2X5rSL5Lit5b-D!5e0!3m2!1szh-TW!2ssg!4v1681726270927!5m2!1szh-TW!2ssg");
})
$("#address2").click(function (){
    $("#menu").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address2").addClass("active");
    $("#list").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address2").addClass("active");
    $("#myIframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.28893085196!2d114.01973407590182!3d22.530846934498193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f16053f06479%3A0xdeaa4f8e04a10d07!2z5rex5Lia5rOw54S25aSn5Y6m!5e0!3m2!1szh-CN!2shk!4v1709566865944!5m2!1szh-CN!2shk");
})
$("#address3").click(function (){
    $("#menu").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address3").addClass("active");
    $("#list").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address3").addClass("active");
    $("#myIframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.2052170928614!2d113.31590439678958!3d23.12617300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402ff1aeac136a9%3A0x5b61eaedb469acef!2z5rSl5ruo6IW-6LaK5aSn5Y6m!5e0!3m2!1szh-CN!2shk!4v1709567098721!5m2!1szh-CN!2shk")
})
$("#address4").click(function (){
    $("#menu").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address4").addClass("active");
    $("#list").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address4").addClass("active");
    $("#myIframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.801706244144!2d103.85773817571248!3d1.2934461617530009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a933afffff%3A0xf61b0cf3ff359aa8!2sThe%20Great%20Room%20Centennial%20Tower%20%7C%20Coworking%20Space%20%26%20Hot%20Desking%20Singapore!5e0!3m2!1szh-CN!2shk!4v1749633299352!5m2!1szh-CN!2shk")
})
$("#address1_2").click(function (){
    $("#menu_2").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address1_2").addClass("active");
    $("#list_2").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address1_2").addClass("active");
})
$("#address2_2").click(function (){
    $("#menu_2").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address2_2").addClass("active");
    $("#list_2").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address2_2").addClass("active");
})
$("#address3_2").click(function (){
    $("#menu_2").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address3_2").addClass("active");
    $("#list_2").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address3_2").addClass("active");
})
$("#address4_2").click(function (){
    $("#menu_2").find(".item").each(function (){
        $(this).removeClass("active");
    })
    $("#address4_2").addClass("active");
    $("#list_2").find(".item").each(function (){
        $(this).removeClass("active")
    })
    $(".address4_2").addClass("active");
})

var lang = getParameterByName("lang");
if(lang == "zh" || lang == ""){
    $(".theme1").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=28&lang=zh#1";
    })
    $(".theme2").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=28&lang=zh#2";
    })
    $(".theme3").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=28&lang=zh#3";
    })
    $(".theme4").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=28&lang=zh#4";
    })
    $(".theme5").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=28&lang=zh#5";
    })
}else if(lang == "cn"){
    $(".theme1").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=3&lang=cn#1";
    })
    $(".theme2").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=3&lang=cn#2";
    })
    $(".theme3").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=3&lang=cn#3";
    })
    $(".theme4").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=3&lang=cn#4";
    })
    $(".theme5").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=3&lang=cn#5";
    })
}else if(lang == "en"){
    $(".theme1").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=50&lang=en#1";
    })
    $(".theme2").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=50&lang=en#2";
    })
    $(".theme3").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=50&lang=en#3";
    })
    $(".theme4").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=50&lang=en#4";
    })
    $(".theme5").click(function (){
        location.href = "?m=home&c=Lists&a=index&tid=50&lang=en#5";
    })
}

