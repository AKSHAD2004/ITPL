import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// Auto-copy uploaded logo file
const uploadedLogoPath = 'C:/Users/hp/.gemini/antigravity/brain/2976dfad-83ab-4a3b-884a-fd2a12019c47/.user_uploaded/media_1788584958268.png';
const assetsDir = path.resolve(__dirname, 'public', 'assets');
try {
  if (fs.existsSync(uploadedLogoPath)) {
    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
    fs.copyFileSync(uploadedLogoPath, path.resolve(assetsDir, 'logo.png'));
    fs.copyFileSync(uploadedLogoPath, path.resolve(assetsDir, 'nav_logo.png'));
    fs.copyFileSync(uploadedLogoPath, path.resolve(assetsDir, 'logo.jpg'));
    
    // Also generate an inline logo data TS module
    const logoBase64 = fs.readFileSync(uploadedLogoPath).toString('base64');
    const logoDataFile = path.resolve(__dirname, 'src', 'data', 'logoData.ts');
    fs.writeFileSync(logoDataFile, `export const INLINE_LOGO = "data:image/png;base64,${logoBase64}";\n`);
  }
} catch (err) {
  console.error('Error auto-syncing logo:', err);
}

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url ? req.url.split('?')[0].split('#')[0] : '';
        if (cleanUrl === '/assets/nav_logo.png' || cleanUrl === '/assets/logo.png' || cleanUrl === '/assets/logo.jpg') {
          if (fs.existsSync(uploadedLogoPath)) {
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            fs.createReadStream(uploadedLogoPath).pipe(res);
            return;
          }
        }
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR === 'true' ? false : {
        clientPort: 3000,
      },
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
