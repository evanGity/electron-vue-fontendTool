let { ipcMain } = require('electron')

function winFn (win) {
  ipcMain.on('closewin', function () {
    win.close()
  })
  ipcMain.on('minimizeWin', function () {
    win.minimize()
  })
  ipcMain.on('fullwin', function () {
    if (!win.isMaximized()) {
      win.maximize()
    } else {
      win.restore()
    }
  })
}

export default winFn
