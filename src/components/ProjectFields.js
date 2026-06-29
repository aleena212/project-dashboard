import { TextField, Box, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { projectValidation } from "./validation/projectValidation";

import FormTextField from "./FormTextField";
import FormSelect from "./FormSelect";
import FormMultiSelect from "./FormMultiSelect";
import FormCheckbox from "./FormCheckbox";
import FormRadio from "./FormRadio";
import FormDate from "./FormDate";

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

      {/* Department Dropdown */}
      <FormSelect
        name="department"
        label="Department"
        control={control}
        rules={projectValidation.department}
        errors={errors}
        disabled={isViewMode}
        options={[
          {
            value: "web",
            label: "Web Development",
          },
          {
            value: "ai",
            label: "Artificial Intelligence",
          },
          {
            value: "mobile",
            label: "Mobile Development",
          },
          {
            value: "cyber",
            label: "Cyber Security",
          },
        ]}
      />
      <FormMultiSelect
        name="skills"
        label="Skills"
        control={control}
        rules={projectValidation.skills}
        errors={errors}
        options={[
          "React",
          "JavaScript",
          "Node.js",
          "Python",
          "Java",
          "Flutter",
          "AI",
          "Cyber Security",
        ]}
        disabled={isViewMode}
      />
      <FormCheckbox
        name="acceptTerms"
        label="Accept Terms & Conditions"
        control={control}
        rules={projectValidation.acceptTerms}
        errors={errors}
        disabled={isViewMode}
      />

      <FormRadio
        name="gender"
        label="Gender"
        control={control}
        rules={projectValidation.gender}
        errors={errors}
        disabled={isViewMode}
        options={[
          {
            value: "male",
            label: "Male",
          },
          {
            value: "female",
            label: "Female",
          },
          {
            value: "other",
            label: "Other",
          },
        ]}
      />

      <FormDate
        name="startDate"
        label="Start Date"
        control={control}
        rules={projectValidation.date}
        errors={errors}
        disabled={isViewMode}
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
