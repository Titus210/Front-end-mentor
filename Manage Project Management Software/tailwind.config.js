module.exports = {
    content: ['./*.html'],
    theme: {
        // breakpoints
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            //colors
            colors: {
                brightRed: 'hls(12,88%,59%)',
                brightRedLight: 'hls(12,88%,69%)',
                brightRedSupLight: 'hls(12,88%,95%)',
                darkBlue: 'hls(228,39%,23%)',
                darkGrayishBlue: 'hls(227,12%,61%)',
                veryDarkBlue: 'hls(223,12%,13%)',
                veryPaleRed: 'hls(13,100%,96%)',
                veryLightGray: 'hls(0,0%,98%)'
            }
        },
    },
    plugins: [],
}