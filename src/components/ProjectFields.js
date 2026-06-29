import { TextField, Box, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { projectValidation } from "./validation/projectValidation";
import FormTextField from "./FormTextField";

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
      {/* Project Name */}
      <FormTextField
        name="name"
        label="Project Name"
        control={control}
        rules={projectValidation.name}
        errors={errors}
        disabled={isViewMode}
      />

      {/* Project Description */}
      <FormTextField
        name="description"
        label="Project Description"
        control={control}
        rules={projectValidation.description}
        errors={errors}
        disabled={isViewMode}
        multiline
        rows={4}
      />

      {/* Project Image */}
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

      {/* Image Preview */}
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
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      )}
    </>
  );
}

export default ProjectFields;
