$(document).ready(function(){
    $("#service .item").mouseover(function (){
        $(this).stop(false).animate({
            width: "50%"
        })
        $(this).children(".before").stop(false).fadeOut(1000);
        $(this).children(".after").stop(false).fadeIn(1000);
        $(this).find(".after h1").stop(false).fadeIn(1000);
        $(this).find(".after p").stop(false).fadeIn(1000);
        $("#service_box .logo").stop(false).fadeOut(1000);
        $("#service_box .desc").stop(false).fadeOut(1000);
    }).mouseleave(function (){
        $(this).stop(false).animate({
            width: "12.5%"
        })
        $(this).children(".before").stop(false).fadeIn(1000);
        $(this).children(".after").stop(false).fadeOut(1000);
        $(this).find(".after h1").stop(false).hide();
        $(this).find(".after p").stop(false).hide();
        $("#service_box .logo").stop(false).fadeIn(1000);
        $("#service_box .desc").stop(false).fadeIn(1000);
    })

    $("#nav-service").mouseover(function (){
        $(".nav-child").slideDown();
    }).mouseleave(function (){
        $(".nav-child").slideUp();
    })

    $(".toShare").click(function (){
        $(".share-box").addClass("fadeInUp");
        $(".share-box").removeClass("fadeOutDown");
        $(".share-back").show();
        $(".share-box").show();
    })
    $("#share-close").click(function (){
        $(".share-box").addClass("fadeOutDown");
        $(".share-box").removeClass("fadeInUp");
        $(".share-back").hide();
        setTimeout(function() {$(".share-box").hide();}, 1000);
    })

    $(".toShare").click(function (){
        $(".share-box").addClass("fadeInUp");
        $(".share-box").removeClass("fadeOutDown");
        $(".share-back").show();
        $(".share-box").show();
    })
    $("#share-close").click(function (){
        $(".share-box").addClass("fadeOutDown");
        $(".share-box").removeClass("fadeInUp");
        $(".share-back").hide();
        setTimeout(function() {$(".share-box").hide();}, 1000);
    })

    $(".video-show").click(function (){
        $("#video").attr("src",$(this).data("src"));
        $(".video-box").addClass("fadeInUp");
        $(".video-box").removeClass("fadeOutDown");
        $(".video-back").show();
        $(".video-box").show();
    })
    $(".video-back").click(function (){
        $(".video-box").addClass("fadeOutDown");
        $(".video-box").removeClass("fadeInUp");
        $(".video-back").hide();
    })
})