'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {


  chrome.browsingData.remove({
    "origins": [
      "https://nytimes.com",
      "https://www.nytimes.com",
      "https://www.latimes.com",
      "https://latimes.com",
      "https://washingtonpost.com",
      "https://www.washingtonpost.com",
      "https://bloomberg.com",
      "https://www.bloomberg.com",
      "https://www.wired.com",
      "https://wired.com",
      "https://www.vanityfair.com",
      "https://vanityfair.com",
      "https://vulture.com",
      "https://www.vultue.com"
    ]}, {
      "appcache" :true,
      "cache": true,
      "cacheStorage": true,
      "cookies": true,
      "fileSystems": true,
      "indexedDB" : true,
      "localStorage": true,
      "pluginData": true,
      "serviceWorkers": true,
      "webSQL": true
    });
});