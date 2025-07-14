// detector.js (background service worker)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'detectTech') {
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      files: ['detector_inject.js']
    }, () => {
      // The content script will send a message back with the results
    });
  }
}); 