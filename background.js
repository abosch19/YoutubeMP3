//Author: Alex Bosch
//Github: https://www.github.com/abosch19
//Project: https://github.com/abosch19/YoutubeMP3

//------------------------------------------------------------------------------
//Extension boton listener//
//------------------------------------------------------------------------------
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.getSelected(null,function (tab) {
    var tabLink = tab.url;
    if(youtubeURL(tabLink)){
      downloadMusic(tabLink,true);
    }
    else {
      alert("Not a youtube video");
    }
  });  
});

//--------------------------------------------------------------------------------
//API
//--------------------------------------------------------------------------------

function downloadMusic(tabLink) {
  var apiLink = "http://www.youtubeinmp3.com/fetch/?video="
  var link = apiLink + tabLink;
    chrome.tabs.create({url:link, active: false}, function (tab) {
      chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementById("download").click();'
      },function(){});
    });
}

//---------------------------------------------------------------------------------
//Check youtube url
//---------------------------------------------------------------------------------
function youtubeURL(url) {
  if(url.slice(0,32) == 'https://www.youtube.com/watch?v='){
    return true;
  }
  else {
    return false;
  }
}