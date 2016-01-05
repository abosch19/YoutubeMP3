//Author: Alex Bosch
//Github: https://www.github.com/abosch19
//Project: https://github.com/abosch19/YoutubeMP3


//------------------------------------------------------------------------------
//Extension boton listener//
//------------------------------------------------------------------------------
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.getSelected(null,function (tab) {
    var tabLink = tab.url;
    if(tabLink.slice(0,32) == 'https://www.youtube.com/watch?v='){
      downloadMusic(tabLink);
    }
    else {
      alert("ERROR");
      chrome.browserAction.setBadgeText({text: "1"});
    }
  });  
});

//--------------------------------------------------------------------------------
//API
//--------------------------------------------------------------------------------
function downloadMusic(tabLink) {
  var apiLink = "http://www.youtubeinmp3.com/fetch/?video="
  var link = apiLink + tabLink;
  chrome.tabs.update(null,{url:link});
}

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------