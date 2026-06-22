import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

function ProjectCard({
  project,

  onDelete,

  onView,

  onEdit,
}) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const confirmDelete = () => {
    onDelete(project.id);

    setDeleteOpen(false);
  };

  return (
    <>
      <IconButton color="primary" onClick={() => onView(project)}>
        <VisibilityIcon />
      </IconButton>

      <IconButton color="success" onClick={() => onEdit(project)}>
        <EditIcon />
      </IconButton>

      <IconButton color="error" onClick={() => setDeleteOpen(true)}>
        <DeleteIcon />
      </IconButton>

      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Delete Project</DialogTitle>

        <DialogContent>
          Are you sure you want to delete
          <b> {project.name}</b>?
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>

          <Button color="error" variant="contained" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProjectCard;
