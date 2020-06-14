let open = false;
$('#showlanlcont').click(function() {
    $("#showlanlcont").html(open = !open? 'Свернуть': 'LANL Earthquake prediction');
});
$(document).ready(function(){
    $("#showlanlcont").click(function () {
        if ($("#content_LANL").is(":hidden")) {
            $("#content_LANL").show("slow");
        } else {
            $("#content_LANL").hide("slow");
        }
        return false;
    });
});
$('#showjigcont').click(function() {
    $("#showjigcont").html(open = !open? 'Свернуть': 'Jigsaw Toxicity Classification');
});
$(document).ready(function(){
    $("#showjigcont").click(function () {
        if ($("#content_JigSaw").is(":hidden")) {
            $("#content_JigSaw").show("slow");
        } else {
            $("#content_JigSaw").hide("slow");
        }
        return false;
    });
});
$('#showABtest').click(function() {
    $("#showABtest").html(open = !open? 'Свернуть': 'Анализ результатов А/В тестирования');
});
$(document).ready(function(){
    $("#showABtest").click(function () {
        if ($("#content_AB").is(":hidden")) {
            $("#content_AB").show("slow");
        } else {
            $("#content_AB").hide("slow");
        }
        return false;
    });
});
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
function showlanl(){
    $("#lanl_container").css("display","inherit");
    $("#lanl_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#lanl_container").removeClass("animated slideInUp");
    },800);
}
function closelanl(){
    $("#lanl_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#lanl_container").removeClass("animated slideOutDown");
        $("#lanl_container").css("display","none");
    },800);
}
function showjigsaw(){
    $("#jigsaw_container").css("display","inherit");
    $("#jigsaw_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#jigsaw_container").removeClass("animated slideInUp");
    },800);
}
function closejigsaw(){
    $("#jigsaw_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#jigsaw_container").removeClass("animated slideOutDown");
        $("#jigsaw_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

