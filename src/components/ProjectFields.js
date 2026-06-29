import FormTextField from "./FormTextField";
import FormSelect from "./FormSelect";
import FormMultiSelect from "./FormMultiSelect";
import FormCheckbox from "./FormCheckbox";
import FormRadio from "./FormRadio";
import FormDate from "./FormDate";
import FormFile from "./FormFile";

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

      {/* Department */}
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

      {/* Skills */}
      <FormMultiSelect
        name="skills"
        label="Skills"
        control={control}
        rules={projectValidation.skills}
        errors={errors}
        disabled={isViewMode}
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
      />

      {/* Checkbox */}
      <FormCheckbox
        name="acceptTerms"
        label="Accept Terms & Conditions"
        control={control}
        rules={projectValidation.acceptTerms}
        errors={errors}
        disabled={isViewMode}
      />

      {/* Radio */}
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

      {/* Date */}
      <FormDate
        name="startDate"
        label="Start Date"
        control={control}
        rules={projectValidation.date}
        errors={errors}
        disabled={isViewMode}
      />

      {/* File Upload */}
      {!isViewMode && (
        <FormFile
          name="image"
          control={control}
          rules={projectValidation.image(editMode)}
          errors={errors}
          preview={preview}
          selectedImage={selectedProject?.image}
          disabled={isViewMode}
        />
      )}

      {/* Image Preview in View Mode */}
      {isViewMode && selectedProject?.image && (
        <img
          src={selectedProject.image}
          alt="Project"
          width="100%"
          height="220"
          style={{
            marginTop: "20px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      )}
    </>
  );
}

export default ProjectFields;
