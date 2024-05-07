module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-class-properties',
      {
        loose: true, // Set 'loose' mode to true
      },
    ],
    [
      '@babel/plugin-transform-private-methods',
      {
        loose: true, // Set 'loose' mode to true (consistent with class-properties)
      },
    ],
    // If you have @babel/plugin-transform-private-property-in-object enabled, configure it here as well
    // Other plugins if you have
    'react-native-paper/babel', // Example plugin
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
