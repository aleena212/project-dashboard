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

    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selectedProject) {
      reset(selectedProject);
    } else {
      reset({
        name: "",

        description: "",
      });
    }
  }, [selectedProject, reset]);

  const submit = (data) => {
    if (editMode) {
      setProjects(
        projects.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,

                ...data,
              }
            : project,
        ),
      );
    } else {
      addProject(data);
    }

    reset();

    setOpen(false);
  };

  const isViewMode = selectedProject && !editMode;

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);

        reset();
      }}
    >
      <Box
        sx={{
          padding: 4,

          width: 450,
        }}
      >
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

          <Box mt={3}>
            {!isViewMode && (
              <Button type="submit" variant="contained" fullWidth>
                {editMode ? "Update" : "Save"}
              </Button>
            )}

            <Button
              variant="outlined"
              fullWidth
              sx={{
                mt: 2,
              }}
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
