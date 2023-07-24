module.exports = {
  env: { //ENV Means the environment in which the code runs
    browser: true,
    es2021: true,
  },
  extends: [ //Extends other eslint code configuration
    'plugin:react/recommended', //The 'plugin:react/recommended' preset includes recommended rules for React
    'airbnb', //the 'airbnb' preset enforces Airbnb's JavaScript style guide.
  ],
  parserOptions: { //The parserOptions object in ESLint configuration is used to specify various options related to the parser that ESLint should use to understand and analyze your JavaScript code
    parser: 'babel-eslint', //This property defines the parser to be used by ESLint to process your JavaScript code.
    requireConfigFile: false, //This property indicates whether ESLint should require the presence of a configuration file (e.g., .eslintrc) in your project directory (false means doesnot requires).
    ecmaFeatures: { //This property allows you to enable or disable specific ECMAScript language features that your code may use
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module', //This property defines the source type of your code, indicating how your code is organized and where it runs When 'module' is specified, it indicates that your code uses ECMAScript modules (e.g., import and export statement
  },
  settings: { //Provides additional settings for the linting process. In this configuration, it sets the React version to 'detect', allowing ESLint to automatically detect the version of React being used in the project.
    react: {
      version: 'detect',
    },
  },
  plugins: [ //Specifies the ESLint plugins to be used
    'react',
  ],
  rules: { //Defines the specific linting rules and their configurations. Each rule is associated with an error level (e.g., 'error', 'warn', 'off') and any additional options
    'spaced-comment': [
      'error',
      'never',
      {
        block: {
          balanced: true,
        },
      },
    ],
    'import/no-cycle': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 250],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'no-sparse-arrays': 0,
    'no-array-index-key': 0,
    camelcase: 0,
  },
};
