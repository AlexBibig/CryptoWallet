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
        },
      },
    ],
  ],
};
