import React from "react";
// import { LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiSelect from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiList from "./components/MuiList";
import MuiTooltip from "./components/MuiTooltip";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiDateRangePicker from "./components/MuiDateRangePicker";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiPicker from "./components/MuiPicker";
// import MuiTextField from './components/MuiTextField';

const theme = createTheme({
  // status: {
  //   danger: "#e53e3e",
  // },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <div className="App">
        {/* <MuiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiSelect /> */}
        {/* <MuiTextField/> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiList /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiPicker /> */}
        {/* <MuiDateRangePicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
