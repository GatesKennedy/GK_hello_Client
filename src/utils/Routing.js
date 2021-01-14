//  Routing Utilities

//  Open Link in New Tab
export const openNewTab = (url) => {
  if (url === 'void')
    return console.log(`Routing.js > openNewTab() > url === 'void'`);

  const win = window.open(url, '_blank');
  if (win != null) {
    win.focus();
  }
};
