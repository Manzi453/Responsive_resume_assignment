import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Vite's dev server has no concept of Vercel serverless functions, so
// api/contact.js is unreachable under plain `vite dev`. This middleware
// runs that same handler in-process so the contact form works locally
// without needing the Vercel CLI. Production still uses the real
// serverless function; this plugin only registers on the dev server.
const contactApiDevMiddleware = () => ({
  name: 'contact-api-dev-middleware',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.end();
        return;
      }

      let raw = '';
      for await (const chunk of req) raw += chunk;
      try {
        req.body = raw ? JSON.parse(raw) : {};
      } catch {
        res.statusCode = 400;
        res.end();
        return;
      }

      res.status = (code) => {
        res.statusCode = code;
        return res;
      };
      res.json = (payload) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(payload));
      };

      const { default: handler } = await import('./api/contact.js');
      await handler(req, res);
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // api/contact.js reads process.env.RESEND_API_KEY directly (Vercel's
  // convention). Vite only loads .env into import.meta.env for client code,
  // so pull it into process.env too for the dev middleware above to see it.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), contactApiDevMiddleware()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'animation': ['framer-motion'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
    },
  };
});