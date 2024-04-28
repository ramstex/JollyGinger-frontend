export default defineAppConfig({
  ui: {
    // Primary тема
    primary: 'purple',

    // Цветовые темы из tailwind.config
    colors: ['purple'],

    button: {
      rounded: 'rounded-none',

      default: {
        size: 'md',
      },
    },
  },
});
