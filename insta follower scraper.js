var saveData = (function () {
var a = document.createElement("a");
// document.body.appendChild(a);
// a.style = "display: none";
return function (data, fileName) {
    var blob = new Blob([data], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};
}());


var description=document.querySelectorAll(".wFPL8 ");
var id=document.querySelectorAll("._0imsa");
var all=[];
var tmpd={"id":"","desc":""};
document.querySelectorAll("._0imsa").forEach(function(elm,ind){
  tmpd["id"]=elm.title;
  tmpd["desc"]=description[ind].innerHTML;
  all.push(tmpd);
  tmpd={"id":"","desc":""};
})

saveData(JSON.stringify(all), document.baseURI.split("www.instagram.com/")[1].split("/")[0]+'_followers.json');
