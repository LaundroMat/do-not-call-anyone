module.exports = {
    purge: {
        enabled: process.env.NODE_ENV != 'develop',
        content: ['./**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [],
}