import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
const MuiAutocomplete = () => {
  type skill = {
    id: number;
    label: string;
  };
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);
  console.log({ skill });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        // freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(event: any, newValue: skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
