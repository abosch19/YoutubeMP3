
//------------------------------------------------------------------------------
//Extension boton listener//
//------------------------------------------------------------------------------
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.getSelected(null,function (tab) {
    var tabLink = tab.url;
    if(tabLink.slice(0,32) == 'https://www.youtube.com/watch?v='){
      downloadVideo(tabLink, tab);
    }
    else {
      alert("ERROR");
      chrome.browserAction.setBadgeText({text: "1"});
    }
  });  
});

//--------------------------------------------------------------------------------
//Function downloads youtube video to mp3//
//--------------------------------------------------------------------------------

function downloadVideo (tabLink, tab) {
  chrome.tabs.create({url:'http://www.youtube-mp3.org/'}, function (tabYou) {
    chrome.tabs.executeScript(null,{
        code:'var url = "'+tabLink+'";'
      }, function () {
          chrome.tabs.executeScript(null,{
            file:"js/script.js"
          }, function () {
              chrome.tabs.remove(tabYou.id, function () {
              chrome.tabs.highlight({tabs: tab.index},function(){});
            });
        });
      });

    });
  }
    /*
//-----------------------------------------------------------------------------------
//onUpdate listener//
//-----------------------------------------------------------------------------------

chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.getSelected(null,function(tab) {
    var tabLink = tab.url;
    if(tabLink.slice(0,32) == 'https://www.youtube.com/watch?v='){

    }
  });
});

//-----------------------------------------------------------------------------------
//onCreated listener//
//-----------------------------------------------------------------------------------

chrome.tabs.onCreated.addListener(function () {
  chrome.tabs.getSelected(null,function(tab) {
    var tabLink = tab.url;
    if(tabLink.slice(0,32) == 'https://www.youtube.com/watch?v='){
    }
    else {
    }
  });
});
*/

