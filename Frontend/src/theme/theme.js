import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#f9f9f9',
        },
    },
    typography: {
        h3: {
            fontWeight: 700,
        },
    },
});

export default theme;
