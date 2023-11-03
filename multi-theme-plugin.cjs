const plugin = require('tailwindcss/plugin');
const hexRgb = require('hex-rgb');

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex);
  return `${red} ${green} ${blue}`;
}

// Generate CSS variables

function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key);
    if (typeof value !== 'string') {
      getCssVariableDeclarations(value, newPath, output);
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value);
    }
  });
  return output;
}

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).forEach(([key, value]) => {
      const newPath = path.concat(key);
      if (typeof value !== 'string') {
        return [
          key,
          getColorUtilitiesWithCssVariableReferences(value, newPath),
        ];
      } else {
        return [key, `rgb(var(--${newPath.join('-')}) / <alpha-value>)`];
      }
    })
  );
}

// Check for valid color themes input
function checkForValidColorThemesInput(input) {
  const isValid =
    typeof input === 'object' &&
    Object.keys(input).some((key) => typeof input[key] === 'object');
  if (!isValid) {
    throw new Error(
      'The Multi-Theme Plugin expects a `colorThemes` option passed to it, which contains at least one theme object.'
    );
  }
}

// ------------------------
// Plugin definition
// ------------------------

module.exports = plugin.withOptions(
  function (options) {
    const { colorThemes } = options;
    checkForValidColorThemesInput(colorThemes);
    return function ({ addBase }) {
      addBase({
        ':root': getCssVariableDeclarations(Object.values(colorThemes)[0]),
      });
      Object.entries(colorThemes).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVariableDeclarations(value),
        });
      });
    };
  },
  function (options) {
    const { colorThemes } = options;
    checkForValidColorThemesInput(colorThemes);
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVariableReferences(
            Object.values(colorThemes)[0]
          ),
        },
      },
    };
  }
);

const multiThemePlugin = require('./multi-theme-plugin.cjs');
const themes = require('./themes.json');

module.exports = {
  content: ['./src/**/*.astro'],
  // Pass the themes to the plugin below
  plugin: [
    multiThemePlugin({
      colorThemes: themes,
    }),
  ],
};

// themes.json

const theme = {
  base: {
    primary: {
      50: '#eef2ff',
      100: '#eef2ff',
      200: '#eef2ff',
      300: '#eef2ff',
      400: '#eef2ff',
      500: '#eef2ff',
      600: '#eef2ff',
      700: '#eef2ff',
      800: '#eef2ff',
      900: '#eef2ff',
    },
    secondary: {
      some: {
        nested: {
          color: '#0099aa',
        },
      },
    },
  },
  rainForest: {
    primary: {
      50: '#ecfdf4',
      100: '#c9f2de',
      200: '#9de9c6',
      300: '#56d0a0',
      400: '#00b380',
      500: '#009268',
      600: '#007955',
      700: '#006344',
      800: '#005038',
      900: '#003422',
    },
  },
  candy: {
    primary: {
      50: '#fdf2f8',
      100: '#f7e2ee',
      200: '#f8cce5',
      300: '#f5a4d0',
      400: '#f271b5',
      500: '#e13d90',
      600: '#c31667',
      700: '#a1004b',
      800: '#84003d',
      900: '#590028',
    },
  },
};
