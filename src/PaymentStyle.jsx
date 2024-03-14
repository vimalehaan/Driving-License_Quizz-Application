import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const useStyle = makeStyles((theme) => ({

    dateField: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderRadius: '20px'
            },
        
        }
    }
}));

export default useStyle;