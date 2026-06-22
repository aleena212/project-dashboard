import { Dialog, Button, TextField, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function ProjectForm({
  open,
  setOpen,
  addProject,
  selectedProject,
  editMode,
  projects,
  setProjects,
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selectedProject) {
      reset({
        name: selectedProject.name,
        description: selectedProject.description,
      });
    } else {
      reset({
        name: "",
        description: "",
      });
    }
  }, [selectedProject, reset]);

  const submit = (data) => {
    const file = data.image?.[0];

    const finalData = {
      ...data,
      image: file ? URL.createObjectURL(file) : selectedProject?.image,
    };

    if (editMode) {
      setProjects(
        projects.map((project) =>
          project.id === selectedProject.id
            ? { ...project, ...finalData }
            : project,
        ),
      );
    } else {
      addProject(finalData);
    }

    reset();
    setOpen(false);
  };

  const isViewMode = selectedProject && !editMode;

  const preview = watch("image");

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        reset();
      }}
    >
      <Box sx={{ padding: 4, width: 500 }}>
        <Typography variant="h5" mb={2}>
          {isViewMode
            ? "View Project"
            : editMode
              ? "Edit Project"
              : "Add Project"}
        </Typography>

        <form onSubmit={handleSubmit(submit)}>
          <TextField
            label="Project Name"
            fullWidth
            margin="normal"
            disabled={isViewMode}
            {...register("name", {
              required: "Project name required",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Project Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            disabled={isViewMode}
            {...register("description", {
              required: "Description required",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          {!isViewMode && (
            <TextField
              type="file"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("image")}
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
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          )}

          <Box mt={3}>
            {!isViewMode && (
              <Button type="submit" variant="contained" fullWidth>
                {editMode ? "Update" : "Save"}
              </Button>
            )}

            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                setOpen(false);
                reset();
              }}
            >
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}

export default ProjectForm;
