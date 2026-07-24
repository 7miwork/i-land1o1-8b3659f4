import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
  nitro: false,
  vite: {
    server: { host: "127.0.0.1" },
    preview: { host: "127.0.0.1" },
  },
});