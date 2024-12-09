# Vite + React + TypeScript + Electron Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules, wrapped in an Electron application.

## Using this Template

1. **Copy and Initialize**

```bash
# Copy the project to a new directory with your desired name
cp -r vite-react-electron/ my-new-project-name/
cd my-new-project-name/

# Remove the existing Git history and initialize a new repository
rm -rf .git
git init
```

2. **Update Package Information**
   Modify the following fields in `package.json`:

```json
{
  "name": "your-new-project-name",
  "version": "0.0.1",
  "private": true
}
```

3. **Update HTML Title**
   In `index.html`, change the title to your project name:

```html
<title>Your Project Name</title>
```

4. **Clean up App.tsx**
   Replace the demo content in `src/App.tsx` with your initial setup:

```typescript
import "./App.css";

function App() {
  return (
    <div>
      <h1>Your New Project</h1>
    </div>
  );
}

export default App;
```

5. **Install Dependencies**

```bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Fresh install of dependencies
npm install
```

6. **Optional: Update Electron Window Settings**
   Customize the initial window size in `electron/main.ts`:

```typescript
mainWindow = new BrowserWindow({
  width: 800, // Customize width
  height: 600, // Customize height
  webPreferences: {
    preload: join(__dirname, "preload.js"),
    contextIsolation: true,
    nodeIntegration: false,
  },
});
```

7. **Test the Setup**

```bash
# Start the development server
npm start
```

8. **Create Initial Commit**

```bash
git add .
git commit -m "Initial commit"
```

## Additional Configuration

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the application
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the build
- `npm run electron:dev` - Start Electron development
- `npm start` - Run both Vite and Electron in development mode

### Project Structure

- `/src` - React application source code
- `/electron` - Electron main process code
- `/public` - Static assets
- `/dist-electron` - Compiled Electron code

### Additional Tips

- Update this README.md with your project's specific information
- Review and update `.gitignore` for your specific needs
- Customize `.vscode/settings.json` for your development preferences
- Update assets in `src/assets/` as needed
- Modify CSS files (`src/App.css` and `src/index.css`) for your styling needs

## Available Plugins

Currently, two official Vite plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Type Support For `.tsx` Imports in TS

TypeScript VSCode extension supports source type definitions for `.tsx` imports by default. You can configure the ESLint settings in `eslint.config.js` for additional type checking.
