import "../src/assets/styles/tailwind.css";
import { withThemeByClassName } from '@storybook/addon-themes';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#0B0B0B',
        }
      ]
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: 'light',
          dark: 'dark',
      },
  })]
};

export default preview;
