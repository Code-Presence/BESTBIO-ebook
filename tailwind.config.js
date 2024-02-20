/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            keyframes: {
                moveForever: {
                    '0%': { transform: 'translate3d(-90px, 0, 0)' },
                    '100%': { transform: 'translate3d(85px, 0, 0)' },
                },
            },
            animation: {
                moveForever: 'moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite',
            },
        },
    },
    plugins: [],
});
