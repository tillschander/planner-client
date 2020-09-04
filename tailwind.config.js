module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': '#fe502c',
                'secondary': '#faf3f0',
                gray: {
                    'old': '#969792', // 100

                    '100': '#e6e0de',
                    '200': '#d1cecc',
                    '300': '#bdbbba',
                    '400': '#aba8a7', // 200
                    '500': '#8A8988',
                    '600': '#69696A',
                    '700': '#484a4b', // 300
                    '800': '#3a3f40', // 500
                    '900': '#333839', // 800
                }
            }
        }
    },
    variants: {
        display: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}