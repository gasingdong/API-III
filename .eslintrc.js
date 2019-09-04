module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
	  "plugin:prettier/recommended",
  ],
  "parserOptions": {
	  "ecmaVersion": 6,
	  "sourceType": "module",
  },
  "env": { 
    "es6": true,
  },
  "globals": {
    "console": "readonly",
	  "document": "readonly",
	  "window": "readonly",
    "it": "readonly",
    "localStorage": "readonly",
  },
};