export const root = true;
export const env = { browser: true, es2024: true, node: true };
export const parser = '@typescript-eslint/parser';
export const parserOptions = { ecmaVersion: 'latest', sourceType: 'module' };
export const settings = { react: { version: 'detect' } };
export const plugins = [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'simple-import-sort',
];
export const extends = [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
];
export const rules = {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
};
export const ignorePatterns = ['dist', '.meteor', 'node_modules'];
