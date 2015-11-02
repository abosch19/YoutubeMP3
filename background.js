alert("Se ha cargado la extension");

chrome.tabs.onCreated.addListener(function (tab) {
  alert('La URL de la nueva pestaña es: ' + tab.url);
});

/*chrome.tabs.onRemoved.addListener(function (tab) {
  alert('La URL de la pestaña cerrada es: ' + tab.url);
})*/

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.url.indexOf("google.es") != -1){
        chrome.tabs.remove(tabId);
    }
 });
