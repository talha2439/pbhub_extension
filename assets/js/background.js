let receive = '';
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data) {
    receive = message.data;
    test();
  }
});

function test(){
  console.log(receive);
}