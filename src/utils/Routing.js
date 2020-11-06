//  Routing Utilities

//  Open Link in New Tab
export const openNewTab = (url) => {
  const win = window.open(url, '_blank');
  if (win != null) {
    win.focus();
  }
};
