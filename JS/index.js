$(document).ready(function() {
    GetProject();
});

function GetProject() {
    var xmlDoc = GetXMLData_Locoal("Sourse/Info.xml" + "?" + Math.floor(Math.random() * 100));

    var root = xmlDoc.getElementsByTagName("ROOT");
    var custs = root[0].getElementsByTagName('item');
    var CustLength = custs.length;

    //console.log(xmlDoc);
    var sHTML = "";
    for (var i = 0; i < CustLength; i++) {
        if (custs[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue == "N") {
            continue;
        }

        var sURL = custs[i].getElementsByTagName("LinkURL")[0].childNodes[0].nodeValue;
        var MainPic = custs[i].getElementsByTagName("CoverPic1")[0].childNodes[0].nodeValue;
        var CoverPic = custs[i].getElementsByTagName("CoverPic2")[0].childNodes[0].nodeValue;
        var ProjectName = custs[i].getElementsByTagName("ProjectName")[0].childNodes[0].nodeValue;

        sHTML += "<section onclick=\"goLink('" + sURL + "')\" class='Project'>";
        sHTML += "<img class='MainCover' src='" + MainPic + "' />";
        sHTML += "<img class='ChangeCover' src='" + CoverPic + "' />";
        sHTML += "<dt class='ProjectName'>" + ProjectName + "</dt>";
        sHTML += "</section>";
    }

    $("#divMainList").html(sHTML);

    $(".Project .MainCover").mouseover(function() {
        //GSAP_ZoomIn(this);
        GSAPChangeCover(this);
    });
    $(".Project .MainCover").mouseout(function() {
        //GSAP_ZoomOut(this);
        GSAPBackCover(this);
    });
}