# reset-article-limit
Chrome Extension that resets the monthly free article limit for specific media sites by removing browser data associated with those sites.

# How to Use
1. Download the repo. 
2. Go to chrome://extensions in your Chrome browser. 
3. Enable developer mode.  <== this has some risks. Be careful about extensions if you have this enabled.
4. Click on "load unpacked".
5. Pick the directory that contains the files from this repo.
6. Click on the icon to clear the browser data for the listed sites.

# List of Sites
* New York Times
* LA Times
* Washington Post
* Bloomberg
* Wired
* Vanityfair
* Vulture
* NY Mag

# Types of Browser Data Removed
* appCache
* Cache
* cacheStorage
* Cookies
* fileSystems
* indexedDB
* localStorage
* pluginData
* serviceWorkers
* webSQL

# Release Notes

## Release 20190910.01
* Fixed some typos on domains
* Added nymag.com and www.nymag.com

## List of Sites (as of v1.0)
* New York Times
* LA Times
* Washington Post
* Bloomberg
* Wired
* Vanityfair
* Vulture

## Types of Browser Data Removed (as of v1.0)
* appCache
* Cache
* cacheStorage
* Cookies
* fileSystems
* indexedDB
* localStorage
* pluginData
* serviceWorkers
* webSQL
