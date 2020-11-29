/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')
module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode",
    typography: (theme) => ({
    dark: {
        css: {
            color: theme('colors.gray.300'),
            a: {
                color: theme('colors.green.500'),
                '&:hover': {
                    color: theme('colors.green.500'),
                },
            },

            h1: {
                color: theme('colors.gray.300'),
            },
            h2: {
                color: theme('colors.gray.300'),
            },
            h3: {
                color: theme('colors.gray.300'),
            },
            h4: {
                color: theme('colors.gray.300'),
            },
            h5: {
                color: theme('colors.gray.300'),
            },
            h6: {
                color: theme('colors.gray.300'),
            },

            strong: {
                color: theme('colors.gray.300'),
            },

            code: {
                color: theme('colors.gray.300'),
            },

            figcaption: {
                color: theme('colors.gray.500'),
            },
        },
    },
  }),

  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
    typography: ["responsive", "dark"],
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.dark-mode ')))
            })
          }).processSync(selector)
        })
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
