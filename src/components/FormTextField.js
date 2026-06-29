import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FormTextField({
  name,
  label,
  control,
  rules,
  errors,
  disabled = false,
  multiline = false,
  rows = 1,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          margin="normal"
          disabled={disabled}
          multiline={multiline}
          rows={rows}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default FormTextField;
