document.getElementById('youtube-url').value = url;
document.getElementById('submit').click();
setTimeout(function () {
	var links = document.getElementById('dl_link').getElementsByTagName('a');
	for(var i = 0; i < links.length;++i) {
		var attr = links[i].href;
		if(attr[52]=='t'){
			var finished = true;
			links[i].click();
			break;
			}
	}
},500);
