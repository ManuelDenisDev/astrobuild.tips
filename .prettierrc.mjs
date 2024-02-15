// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    arrowParens: "always",
    bracketSameLine: true,
    bracketSpacing: true,
    semi: false,
    experimentalTernaries: false,
    singleQuote: true,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "all",
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: false,
    proseWrap: "preserve",
    insertPragma: false,
    printWidth: 150,
    requirePragma: false,
    tabWidth: 2,
    useTabs: true,
    embeddedLanguageFormatting: "auto",
     plugins: ['prettier-plugin-astro'],
    overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};


