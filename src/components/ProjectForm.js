import { Dialog, Button, Box, Typography } from "@mui/material";

import { useForm } from "react-hook-form";

import { useEffect } from "react";

import ProjectFields from "./ProjectFields";

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
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: null,
    },
  });

  useEffect(() => {
    if (selectedProject) {
      reset({
        name: selectedProject.name,
        description: selectedProject.description,
        image: null,
      });
    } else {
      reset({
        name: "",
        description: "",
        image: null,
      });
    }
  }, [selectedProject, reset]);

  const submit = (data) => {
    const file = data.image?.[0];

    const finalData = {
      ...data,
      image: file
        ? URL.createObjectURL(file)
        : selectedProject?.image,
    };

    if (editMode) {
      setProjects(
        projects.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,
                ...finalData,
              }
            : project
        )
      );
    } else {
      addProject(finalData);
    }

    reset();

    setOpen(false);
  };

  const isViewMode =
    selectedProject &&
    !editMode;

  const preview =
    watch("image");

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
          width: 500,
        }}
      >
        <Typography
          variant="h5"
          mb={2}
        >
          {isViewMode
            ? "View Project"
            : editMode
            ? "Edit Project"
            : "Add Project"}
        </Typography>

        <form
          onSubmit={handleSubmit(submit)}
        >
          <ProjectFields
            control={control}
            errors={errors}
            preview={preview}
            selectedProject={
              selectedProject
            }
            editMode={editMode}
            isViewMode={
              isViewMode
            }
          />

          <Box mt={5}>
            {!isViewMode && (
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                {editMode
                  ? "Update"
                  : "Save"}
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