import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

function FormRadio({
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
      defaultValue=""
      render={({ field }) => (
        <FormControl margin="normal" error={!!errors[name]} disabled={disabled}>
          <FormLabel>{label}</FormLabel>

          <RadioGroup {...field} row>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default FormRadio;
