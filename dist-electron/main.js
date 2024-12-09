"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vite/client" />
const electron_1 = require("electron");
const path_1 = require("path");
let mainWindow = null;
electron_1.app.on('ready', () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: (0, path_1.join)(__dirname, 'preload.js'), // We'll add this file later
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    // Load the Vite React app
    mainWindow.loadURL('http://localhost:5173'); // Vite dev server default port
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
