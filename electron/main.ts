/// <reference types="vite/client" />
import { app, BrowserWindow } from 'electron'
import { join } from 'path'

let mainWindow: BrowserWindow | null = null

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, 'preload.js'), // We'll add this file later
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    // Load the Vite React app
    mainWindow.loadURL('http://localhost:5173') // Vite dev server default port
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}) 