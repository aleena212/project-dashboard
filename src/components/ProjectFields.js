import { TextField, Box, Typography } from "@mui/material";

import { Controller } from "react-hook-form";

import { projectValidation } from "./validation/projectValidation";

function ProjectFields({
  control,

  errors,

  isViewMode,

  preview,

  selectedProject,

  editMode,
}) {
  return (
    <>
      <Controller
        name="name"
        control={control}
        rules={projectValidation.name}
        render={({ field }) => (
          <TextField
            {...field}
            label="Project Name"
            fullWidth
            margin="normal"
            disabled={isViewMode}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={projectValidation.description}
        render={({ field }) => (
          <TextField
            {...field}
            label="Project Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            disabled={isViewMode}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />

      {!isViewMode && (
        <Controller
          name="image"
          control={control}
          rules={projectValidation.image(editMode)}
          render={({ field }) => (
            <Box mt={2}>
              <TextField
                type="file"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  accept: ".jpg,.jpeg,.png",
                }}
                onChange={(e) => field.onChange(e.target.files)}
                error={!!errors.image}
              />

              {errors.image && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{
                    mt: 1,
                    ml: 1,
                  }}
                >
                  {errors.image.message}
                </Typography>
              )}
            </Box>
          )}
        />
      )}

      {(selectedProject?.image || preview?.[0]) && (
        <Box mt={2}>
          <img
            src={
              preview?.[0]
                ? URL.createObjectURL(preview[0])
                : selectedProject.image
            }
            alt="project"
            width="100%"
            height="220"
          />
        </Box>
      )}
    </>
  );
}

export default ProjectFields;
