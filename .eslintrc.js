module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2020, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
      sourceType:  'module',  // Allows for the use of imports
    //   ecmaFeatures: {
    //     jsx: true, // enable JSX
    //     impliedStrict: true // enable global strict mode
    //   }
    },
    extends:  [
    //   'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:jsx-a11y/recommended",
      // 'prettier', // Use prettier, it can disable all rules which conflict with prettier
      // 'prettier/react' // Use prettier/react to pretty react syntax
    ],
    settings: {
      react: {
        version: 'detect',
      }
    },
    env: {
      browser: true // enable all browser global variables
    },
    plugins: ["@typescript-eslint"], // ['prettier', 'react-hooks']
    rules:  {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars" : ["error"],
      "@typescript-eslint/no-var-requires" : "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "import/no-named-as-default": 0
    },
    ignorePatterns: [
      "ts-advanced.tsx", 
      "type-demo.tsx",
      "use-boop.js"
    ],
  };