/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:27:55
 * @modify date 2022-04-25 20:27:56
 * @desc [description]
 */
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    white: '#fff',
    black: '#000',
    status: {
        error: {
            main:"#DD4343",
            error50: "#FFF0F0",
            error100: "#FFDDDD",
            error200: "#FFC2C2",
            error300: "#FF9A9A",
            error400: "#FD6363",
            error500: "#DD4343",
            error600: "#C42A2A",
            error700: "#B41A1A",
            error800: "#8D0C0C",
            error900: "#6B0505",
        },
        success: {
            success50: "#EDFFE9",
            success100: "#D8FFD1",
            success200: "#AFFFA2",
            success300: "#93E585",
            success400: "#72C464",
            success500: "#53A545",
            success600: "#398B2B",
            success700: "#227414",
            success800: "#126404",
            success900: "#0C5500",
        },
        warning:{
            warning50: "#FFF6E9",
            warning100: "#FFEDD3",
            warning200: "#FFD493",
            warning300: "#FFB649",
            warning400: "#F69300",
            warning500: "#D37E00",
            warning600: "#B36B00",
            warning700: "#8B5300",
            warning800: "#6E4200",
            warning900: "#5B3700",
        }
    },
    palette: {
        primary: {
            main:"#F48625",
            primary50: "#FFF0DD",
            primary100: "#FED6B1",
            primary200: "#FABC84",
            primary300: "#F7A154",
            primary400: "#F48625",
            primary500: "#DA6D0B",
            primary600: "#AB5807",
            primary700: "#7A3B03",
            primary800: "#4B2300",
            primary900: "#1E0900",
            contrastText: '#fff',
        },
        grey: {
            main:"#F5F5F4",
            grey50: "#FAFAF9",
            grey200: "#E7E5E4",
            grey300: "#D6D3D1",
            grey400: "#A8A29E",
            grey500: "#78716C",
            grey600: "#57534E",
            grey700: "#44403C",
            grey800: "#292524",
            grey900: "#1C1917",
        },
    },
});

export default theme;