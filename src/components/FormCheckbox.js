import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

function FormCheckbox({
  name,
  label,
  control,
  rules,
  errors,
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={false}
      render={({ field }) => (
        <FormControl margin="normal" error={!!errors[name]}>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={field.value || false}
                disabled={disabled}
              />
            }
            label={label}
          />

          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default FormCheckbox;
