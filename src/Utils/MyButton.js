import { makeStyles } from '@mui/styles';
// import { Button } from '@mui/material';
import theme from './Colors';

/**
 * In Progress : custom button
 */

const useStyleButton = makeStyles( {
    root: {
        background: theme.palette.primary.main,
        border: 0,
        color: theme.white,
        borderRadius: 3,
        height: 40,
        fontSize:14,
        fontWeight:600,
        padding: '0 20px',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: theme.palette.primary.primary500,
            boxShadow: `0 3px 5px 2px ${theme.palette.grey.grey300}`
        },
        transitionDuration: 300,
        boxShadow: `0 3px 5px 2px ${theme.palette.grey.grey200}`
    },
});

export function MyButton(props) {
    const classes = useStyleButton(props);
    return <button onClick={props.onClick} type={props.type} className={classes.root}>{props.text}</button>;
}