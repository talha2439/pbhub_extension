let receive = "";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data) {
    receive = message.data;
    test();
  }
});

function test() {
  console.log(receive);
  if(receive == 'google'){
    // toggleIcon()
  }
}

console.log(chrome.action.setIcon({path: {"128": "assets/images/logo2.png"}}));

function toggleIcon() {
  chrome.browserAction.getIcon(function(currentIcon) {
      var newIcon = currentIcon == "assets/images/logo.png" ? "assets/images/logo2.png" : "assets/images/logo.png";
      chrome.browserAction.setIcon({ path: newIcon });
  });
}

// // Example: Listen for a message from a content script or popup
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action == "toggleIcon") {
//     toggleIcon();
//   }
// });
