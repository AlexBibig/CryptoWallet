module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        alias: {
          '~components': './src/components',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~assets': './src/assets',
          '~core': './src/core',
          '~types': './src/types',
        },
      },
    ],
  ],
};
