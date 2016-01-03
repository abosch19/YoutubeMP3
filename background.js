chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.getSelected(null,function(tab) {
    var tabLink = tab.url;
    if(tabLink.slice(0,32) == 'https://www.youtube.com/watch?v='){
      downloadVideo(tabLink);
    }
    else {
      alert("No youtube!");
      }
    });
  });

   function downloadVideo (tabLink) {
      chrome.tabs.create({url:'http://www.youtube-mp3.org/'});
      chrome.tabs.executeScript(null,{
        code:'var url = "'+tabLink+'";'
      }, function () {
        chrome.tabs.executeScript(null,{
          file:"js/script.js"
        });

      });
    }