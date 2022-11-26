var disdoc = true;
window.onload = function () {
	document.getElementById('doc-info').style = 'display: none;';
	document.getElementById('dishid-info').style = "display: block";
}
function dishide() {
	if (disdoc == true) {
		document.getElementById('doc-info').style = 'display: block;';
		disdoc = false;
		document.getElementById('dishid-info-text').innerHTML = "↑隐藏";
	}
	else {
		document.getElementById('doc-info').style = 'display: none;';
		disdoc = true;
		document.getElementById('dishid-info-text').innerHTML = "↓显示";
	}
}