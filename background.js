const GREEN_ICONS = {
  "16": "icons/icon-green-16.png",
  "48": "icons/icon-green-48.png",
  "128": "icons/icon-green-128.png"
};

const RED_ICONS = {
  "16": "icons/icon-red-16.png",
  "48": "icons/icon-red-48.png",
  "128": "icons/icon-red-128.png"
};

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get({ isGreen: true }, ({ isGreen }) => {
    const nextIsGreen = !isGreen;
    chrome.action.setIcon({ path: nextIsGreen ? GREEN_ICONS : RED_ICONS });
    chrome.storage.local.set({ isGreen: nextIsGreen });
  });
});
