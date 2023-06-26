// moduconst config = {
//     env: {
//         browser: true,
//         es2021: true,
//     },
//     extends: [
//         'eslint:recommended',
//         'plugin:react/recommended',
//         'plugin:react/jsx-runtime',
//         'plugin:react-hooks/recommended',
//     ],
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//     },
//     plugins: ['react', 'react-hooks', 'import'],
// };

const config = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'import'],
};

export default config;
