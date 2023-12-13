// frontend/vite.config.js
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias to handle .jsx file extension
      "/@/": `${process.cwd()}/src/`,
    },
  },
};
