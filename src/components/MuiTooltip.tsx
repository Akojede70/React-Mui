import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeletIcon from "@mui/icons-material/Delete";
const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeletIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
