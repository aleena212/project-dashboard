import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

function FormDate({ name, label, control, rules, errors, disabled = false }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          type="date"
          label={label}
          fullWidth
          margin="normal"
          disabled={disabled}
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default FormDate;
