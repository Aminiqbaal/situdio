module.exports = {
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended', // ini penting
  ],
  rules: {
    'import/extensions': ['error', 'never'],
  },
};
