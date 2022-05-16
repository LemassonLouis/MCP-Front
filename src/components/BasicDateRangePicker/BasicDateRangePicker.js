import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";

export default function BasicDateRangePicker(props) {
  const [value, setValue] = React.useState([null, null]);

  return (
      <DateRangePicker
        fullWidth
        startText="Début de saison"
        endText="Fin de saison"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.func(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> au </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />

  );
}
