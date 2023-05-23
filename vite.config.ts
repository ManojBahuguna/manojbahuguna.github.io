import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "Manoj Bahuguna's Personal Website",
  short_name: "Manoj Bahuguna",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#FEF6E4",
  background_color: "#FEF6E4",
  display: "standalone",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        navigateFallbackAllowlist: [], // app routes will go here if added
      },
    }),
  ],
});
