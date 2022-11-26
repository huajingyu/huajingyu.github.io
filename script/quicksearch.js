window.onload = function () {
	for (i = 0; i < document.querySelectorAll('.searchline').length; i++) {
		document.querySelectorAll('.searchline')[i].style = "display: default";
	}
}
function searching() {
	var searchdisplayingitem=0;
	for (i = 0; i < document.querySelectorAll(".filelist li").length; i++) {
		if ((document.querySelectorAll(".filelist li")[i].innerText.indexOf(document.getElementById('searchbar').value)) >= 0) {
			document.querySelectorAll(".filelist li")[i].style = "display: default";
			searchdisplayingitem++;
		}
		else {
			document.querySelectorAll(".filelist li")[i].style = "display: none";
		}
	}
	for (i=0;i<document.querySelectorAll(".searchline p").length;i++){
		if(document.getElementById('searchbar').value==""){
			document.querySelectorAll(".searchline p")[i].innerText=null;
		}
		else{
			document.querySelectorAll(".searchline p")[i].innerText=searchdisplayingitem + " 个项目";
		}
	}
}