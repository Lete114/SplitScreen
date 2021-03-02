chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: `document.write('<title>'+document.title+'</title><frameset cols="50%,*"><frame src='+location.href +'><frame src='+location.href+'></frameset>')`
    });
});