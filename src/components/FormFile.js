import { Box, TextField, Typography } from "@mui/material";

import { Controller } from "react-hook-form";

function FormFile({
  name,
  control,
  rules,
  errors,
  preview,
  selectedImage,
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Box mt={2}>
          <TextField
            type="file"
            fullWidth
            disabled={disabled}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              accept: ".jpg,.jpeg,.png",
            }}
            onChange={(e) => field.onChange(e.target.files)}
            error={!!errors[name]}
          />

          {errors[name] && (
            <Typography
              color="error"
              variant="body2"
              sx={{
                mt: 1,
                ml: 1,
              }}
            >
              {errors[name].message}
            </Typography>
          )}

          {(selectedImage || preview?.[0]) && (
            <Box mt={2}>
              <img
                src={
                  preview?.[0] ? URL.createObjectURL(preview[0]) : selectedImage
                }
                alt="preview"
                width="100%"
                height="220"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          )}
        </Box>
      )}
    />
  );
}

export default FormFile;
