import { makeStyles } from '@mui/styles';
import theme from './Colors';

const useStylePrimaryButton = makeStyles({
    root: {
        background: theme.status.error.main,
        border: 0,
        color: theme.white,
        borderRadius: 3,
        height: 48,
        padding: '0 30px',
        cursor: 'pointer'
    },
});

export default useStylePrimaryButton;