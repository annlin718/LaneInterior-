window.onload = function () {
    const PageW = $(window).outerWidth();

    if (PageW <= 760) {
        var ObjPic = $(".Project");
        var duration = 1.5;
        var from = {
            opacity: 0.0,
            y: 20
        };
        var to = {
            opacity: 1,
            y: 0
        };
        TweenLite.fromTo(ObjPic, duration, from, to);


    }
    // $(".picLogo").attr("src", "../Sourse/logo1.png");
    $(".picLogo").attr("src", "../Sourse/logo1.png");
};

function goLink(sURL) {
    document.location.href = sURL;
}

function OpenNew(sURL) {
    window.open(sURL);
}

let isExpand = false;
let isExpanding = false;

function MenuExpand() {
    if (isExpanding) return;

    isExpanding = true;
    if (!isExpand) {
        var to = {
            marginTop: 0
        };
        TweenLite.set($(".picLogo"), {
            opacity: 0
        });
        TweenLite.set($("#divMenu_m"), {
            background: "#efd2d2"
        });
        TweenLite.to($("#divMenu"), 0.5, to);

        var tl = gsap.timeline({
            repeat: 0
        });
        tl.to($(".divMenu_hr_m2"), 0.2, {
            display: "none"
        });
        tl.to($(".divMenu_hr_m"), 0.2, {
            margin: -1,
            onComplete: myFunction
        });
    } else {
        var to = {
            marginTop: "-100vh"
        };
        TweenLite.to($("#divMenu"), 0.5, to);

        var tl = gsap.timeline({
            repeat: 0
        });
        tl.to($(".divMenu_hr_m"), 0.2, {
            rotation: 0,
            onComplete: myFunction2
        });
    }
}

function myFunction() {
    TweenLite.to($(".divMenu_hr_m").eq(0), 0.2, {
        rotation: 45
    });
    TweenLite.to($(".divMenu_hr_m").eq(2), 0.2, {
        rotation: -45
    });
    isExpanding = false;
    isExpand = !isExpand;
}

function myFunction2() {
    TweenLite.to($(".divMenu_hr_m"), 0.2, {
        margin: "3 auto"
    });
    TweenLite.to($(".divMenu_hr_m2"), 0.2, {
        display: "block"
    });
    TweenLite.to($(".picLogo"), 0.7, {
        opacity: 1
    });
    TweenLite.to($("#divMenu_m"), 0.2, {
        background: "#fff",
        onComplete: myFunction3
    });

}

function myFunction3() {
    isExpanding = false;
    isExpand = !isExpand;
}

function GSAPChangeCover(SelectObj) {
    var SelectObj2 = $(SelectObj).parent().find(".ChangeCover");
    $(SelectObj2).css("visibility", "visible");
    var duration = 0.5;

    var to = {
        opacity: 1
    };
    TweenLite.to(SelectObj2, duration, to);

    var SelectObj3 = $(SelectObj).parent().find(".ProjectName");
    var myBannerTimeline = new TimelineLite();
    myBannerTimeline.to(SelectObj3, duration, {
        css: {
            marginLeft: 10
        }
    });
}

function GSAPBackCover(SelectObj) {
    var SelectObj2 = $(SelectObj).parent().find(".ChangeCover");
    $(SelectObj2).css("visibility", "visible");
    var duration = 0.3;

    var to = {
        opacity: 0
    };
    TweenLite.to(SelectObj2, duration, to);

    var SelectObj3 = $(SelectObj).parent().find(".ProjectName");
    var myBannerTimeline = new TimelineLite();
    myBannerTimeline.to(SelectObj3, duration, {
        css: {
            marginLeft: 0
        }
    });
}

function GSAP_ZoomIn(SelectObj) {
    var duration = 0.4;
    var from = {
        scaleX: 1.0,
        scaleY: 1.0,
        ease: Linear.ease
    };
    var to = {
        scaleX: 1.05,
        scaleY: 1.05,
        opacity: 0.8
    };
    TweenLite.fromTo(SelectObj, duration, from, to);

    var SelectObj2 = $(SelectObj).parent().find(".ProjectName");
    var myBannerTimeline = new TimelineLite();
    myBannerTimeline.to(SelectObj2, duration, {
        css: {
            marginTop: 8,
            marginLeft: -20
        }
    });
}

function GSAP_ZoomOut(SelectObj) {
    var duration = 0.4;
    var from = {
        scaleX: 1.05,
        scaleY: 1.05,
        opacity: 0.8
    };
    var to = {
        scaleX: 1.0,
        scaleY: 1.0,
        opacity: 1
    };
    TweenLite.fromTo(SelectObj, duration, from, to);

    var myBannerTimeline = new TimelineLite();
    myBannerTimeline.to('.ProjectName', duration, {
        css: {
            marginTop: 0,
            marginLeft: 0
        }
    });
}


function GetXMLData_Locoal(strURL) {
    var xmlhttp, xmlDoc;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", strURL, false);
    xmlhttp.send();

    return convert_string_to_xml(xmlhttp.responseText); // xmlhttp.responseXML;  
}

function convert_string_to_xml(strXML) {
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(strXML);
        return xmlDoc;
    } else {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(strXML, "text/xml");
        return xmlDoc;
    }
}