import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
const MuiSelect = () => {
  const [country, setCountry] = useState("");
  console.log({ country });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

// multiples
//   const [countries, setCountries] = useState<string[]>([])
//   console.log({ countries})
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value
//     setCountries(typeof value === "string" ? value.split(",") : value)
//   }

  return (
    <Box width="250px" marginTop="100px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        // SelectProps={{
        //     multiple: true
        // }}
        size="small"
        color="secondary"
        helperText="please select your country"
        // error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
