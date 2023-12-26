// import React, { useState } from "react";
// import { Stack, TextField } from "@mui/material";
// import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab";

// const MuiPicker = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<Date | null>(null);
//   const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
//   console.log({ selectedDate });
//   return (
//     <Stack spacing={4} sx={{ width: "250px" }}>
//       <DatePicker
//         label="Date Picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedDate}
//         onChange={(newValue) => {
//           setSelectedDate(newValue);
//         }}
//       />
//       <TimePicker
//         label="Time picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedTime}
//         onChange={(newValue) => {
//           setSelectedDate(newValue);
//         }}
//       />
//       <DateTimePicker
//         label="Date Time picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedDateTime}
//         onChange={(newValue) => {
//           setSelectedDateTime(newValue);
//         }}
//       />
//     </Stack>
//   );
// };

// export default MuiPicker;
import React from "react";

const MuiPicker = () => {
  return (
    <div>
      <h2>Hello World!</h2>
    </div>
  );
};

export default MuiPicker;
