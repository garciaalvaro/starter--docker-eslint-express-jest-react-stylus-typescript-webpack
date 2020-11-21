module.exports = {
	ignorePatterns: ["dist", "node_modules"],

	parser: "@typescript-eslint/parser",

	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint",
		"prettier/react",
	],

	env: {
		es2020: true,
		browser: true,
		node: true,
	},

	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
	},

	settings: {
		react: {
			version: "detect",
		},
	},
};
