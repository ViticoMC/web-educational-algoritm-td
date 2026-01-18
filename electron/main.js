const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  // En producción cargas el build de Next
  mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);
