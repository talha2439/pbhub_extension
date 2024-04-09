let url = new URL(window.location.href);
let siteName = url.host.split(".");
let index = url.host.includes("www.") ? 1 : 0;

chrome.runtime.sendMessage({ data: siteName[index] }, (response) => {});

chrome.runtime.sendMessage({ action: "toggleIcon" });