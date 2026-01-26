// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}", // adjust paths to match your project
  ],
  safelist: [
    ".chat-message", // base class
    ".chat-message.user", // user bubble
    ".chat-message.ai", // ai bubble
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
