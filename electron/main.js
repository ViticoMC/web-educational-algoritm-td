const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// Importar los IPC handlers
require("./ipc");

let mainWindow;

// Importar el módulo de base de datos
// Nota: Se importa dinámicamente para evitar problemas con compilación
let dbModule;
function getDatabase() {
  if (!dbModule) {
    dbModule = require("../src/lib/db/database");
  }
  return dbModule;
}

async function initDatabase() {
  try {
    // Importar la función de inicialización
    const { initializeDatabase } = getDatabase();
    initializeDatabase();
    console.log("✅ Base de datos SQLite inicializada correctamente");
  } catch (error) {
    console.error("❌ Error al inicializar la base de datos:", error);
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, isDev ? "./preload.ts" : "./preload.js"),
    },
    icon: path.join(__dirname, "../public/icon.png"),
  });

  const startUrl = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../.next/standalone/out/index.html")}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  await initDatabase();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // Cerrar la base de datos antes de salir
    try {
      const { closeDatabase } = getDatabase();
      closeDatabase();
    } catch (error) {
      console.warn("Error closing database:", error);
    }
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC handlers para comunicación con el frontend
ipcMain.handle("db:get-path", () => {
  const userDataPath = app.getPath("userData");
  return path.join(userDataPath, "app-data.db");
});
