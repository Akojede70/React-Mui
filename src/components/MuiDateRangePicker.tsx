// import React, { useState } from "react";
// import { Box, TextField } from "@mui/material";
// import { DateRange } from "@mui/lab";
// import { DateRangePicker } from "@mui/x-date-pickers-pro";

// const MuiDateRangePicker = () => {
//   const [value, setValue] = useState<DateRange<Date>>([null, null]);
//   // console.log({ value })
//   return (
//     <Box width="500px">
//       <DateRangePicker
//         startText="Check-in"
//         endText="check-out"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => {
//           <>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </>;
//         }}
//       ></DateRangePicker>
//     </Box>
//   );
// };

// export default MuiDateRangePicker;
import React from "react";

const MuiDateRangePicker = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default MuiDateRangePicker;
