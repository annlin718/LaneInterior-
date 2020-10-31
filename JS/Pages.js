var sW = $(window).outerWidth();
var sH = $(window).outerHeight();
$(document).ready(function () {
    // $("#owl-demo").owlCarousel({
    //   autoPlay: 2500,
    //   items:1,
    //   navigation: false, // Show next and prev buttons
    //   slideSpeed: 500,
    //   paginationSpeed: 500,
    //   singleItem: true,
    //   autoHeight:false
    // });

    getPic();
    document.onkeydown = jumpPage;
});

function jumpPage() {
    if (event.keyCode == 37) {
        //左
        CheckPic(-1, $("#btnPre"));
    }
    if (event.keyCode == 39) {
        //右
        CheckPic(1, $("#btnNext"));
    }
}

var PicList = [];

function getPic() {
    var xmlDoc = GetXMLData_Locoal("Sourse/Pics.xml" + "?" + Math.floor(Math.random() * 100));

    var root = xmlDoc.getElementsByTagName("ROOT");
    var custs = root[0].getElementsByTagName('item');
    var CustLength = custs.length;

    var NowPageUrl = window.location.href;
    var EndCnt = NowPageUrl.indexOf("?");
    sPageURL = NowPageUrl.substring(EndCnt + 1);

    var PicCnt = 0;
    var FolderName = "";
    var ProjectName = "";
    for (var i = 0; i < CustLength; i++) {
        if (custs[i].getElementsByTagName("PageURL")[0].childNodes[0].nodeValue != sPageURL) {
            continue;
        }

        PicCnt = custs[i].getElementsByTagName("TotalPicCnt")[0].childNodes[0].nodeValue;
        FolderName = custs[i].getElementsByTagName("FolderName")[0].childNodes[0].nodeValue;
        ProjectName = custs[i].getElementsByTagName("ProjectName")[0].childNodes[0].nodeValue;
    }

    var sHTML = "";
    if (PicCnt > 0) {
        for (var i = 1; i <= PicCnt; i++) {

            PicList[i - 1] = FolderName + "/" + i + ".jpg";

            if (sW >= 760) {
                if (i > PicCnt * 0.5) {
                    sHTML += '<div onclick="ShowPic(' + (i - 1) + ')" class="content_box"><img class="ranPic lazyload" data-src="' + FolderName + '/' + i + '.jpg" /></div>';
                } else {
                    sHTML += '<div onclick="ShowPic(' + (i - 1) + ')" class="content_box"><img class="ranPic" src="' + FolderName + '/' + i + '.jpg" /></div>';
                }
            } else {
                if (i > PicCnt * 0.5) {
                    sHTML += '<div class="content_box"><img class="ranPic lazyload" data-src="' + FolderName + '/' + i + '.jpg" /></div>';
                } else {
                    sHTML += '<div class="content_box"><img class="ranPic" src="' + FolderName + '/' + i + '.jpg" /></div>';
                }
            }
        }

        $("#MainName").text(ProjectName);
        $("#outbox").html(sHTML);
    }
    else {
        goLink('index.html');
    }

    //$("img.lazyload").lazyload();
}

var NowPic;

function ShowPic(sNO) {
    $("#divCoverPic").css("display", "flex");
    NowPic = sNO;
    if (NowPic <= 0) {
        $("#btnPre").css("opacity", "0.2");
    } else {
        $("#btnPre").css("opacity", "1");
    }

    if (NowPic + 1 >= PicList.length) {
        $("#btnNext").css("opacity", "0.2");
    } else {
        $("#btnNext").css("opacity", "1");
    }

    $("#CoverPic").attr("src", PicList[NowPic]);
    if ($("#CoverPic").height() > $("#CoverPic").width()) {
        $("#CoverPic").css("height", "100vh");
        $("#CoverPic").css("width", "auto");
    }
    if ($("#CoverPic").width() > sW) {
        $("#CoverPic").css("height", "auto");
        $("#CoverPic").css("width", "80%");
    }
}

function closePic() {
    $("#divCoverPic").fadeOut(100);
}

function CheckPic(order, sObj) {
    GSAP_Click(sObj);

    if (NowPic <= 0 && order < 0) {
        //第一張再往前
        return;
    }

    if (order > 0 && (NowPic + 1) >= PicList.length) {
        return; //第一張或最後一張!!
    }

    NowPic = NowPic + order;

    if (NowPic <= 0) {
        $("#btnPre").css("opacity", "0.2");
    } else {
        $("#btnPre").css("opacity", "1");
    }

    if (NowPic + 1 >= PicList.length) {
        $("#btnNext").css("opacity", "0.2");
    } else {
        $("#btnNext").css("opacity", "1");
    }

    $("#CoverPic").attr("src", PicList[NowPic]);

    if ($("#CoverPic").height() > $("#CoverPic").width()) {
        $("#CoverPic").css("height", "100vh");
        $("#CoverPic").css("width", "auto");
    }
    if ($("#CoverPic").width() > sW) {
        $("#CoverPic").css("height", "auto");
        $("#CoverPic").css("width", "80%");
    }
}

function GSAP_Click(SelectObj) {
    var duration = 0.1;
    var from = { scaleX: 0.9, scaleY: 0.9, ease: Linear.ease };
    var to = { scaleX: 1.0, scaleY: 1.0 };
    TweenLite.fromTo(SelectObj, duration, from, to);
}