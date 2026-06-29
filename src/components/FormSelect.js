import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

function FormSelect({
  name,
  label,
  control,
  rules,
  errors,
  options,
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl fullWidth margin="normal" error={!!errors[name]}>
          <InputLabel>{label}</InputLabel>

          <Select {...field} label={label} disabled={disabled}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default FormSelect;
