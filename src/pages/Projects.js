import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useState } from "react";

import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Projects() {
  const [open, setOpen] = useState(false);

  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);

  const [editMode, setEditMode] = useState(false);

  // ADD
  const addProject = (data) => {
    const newProject = {
      id: Date.now(),

      ...data,
    };

    setProjects([...projects, newProject]);
  };

  // DELETE
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // VIEW
  const viewProject = (project) => {
    setSelectedProject(project);

    setEditMode(false);

    setOpen(true);
  };

  // EDIT
  const editProject = (project) => {
    setSelectedProject(project);

    setEditMode(true);

    setOpen(true);
  };

  // SEARCH
  const filteredProjects = projects.filter((project) => {
    const name = project.name || "";

    const description = project.description || "";

    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,

            marginLeft: "260px",

            marginTop: "90px",

            padding: "40px",
          }}
        >
          <Typography variant="h4" mb={4}>
            Projects
          </Typography>

          <Box
            sx={{
              display: "flex",

              gap: 2,

              mb: 4,
            }}
          >
            <TextField
              label="Search"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button
              variant="contained"
              onClick={() => {
                setSelectedProject(null);

                setEditMode(false);

                setOpen(true);
              }}
            >
              Add Project
            </Button>
          </Box>

          <ProjectForm
            open={open}
            setOpen={setOpen}
            addProject={addProject}
            selectedProject={selectedProject}
            editMode={editMode}
            projects={projects}
            setProjects={setProjects}
          />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project No.</TableCell>

                  <TableCell>Project Name</TableCell>

                  <TableCell>Description</TableCell>

                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredProjects.map((project, index) => (
                  <TableRow key={project.id}>
                    <TableCell>{index + 1}</TableCell>

                    <TableCell>{project.name}</TableCell>

                    <TableCell>{project.description}</TableCell>

                    <TableCell>
                      <ProjectCard
                        project={project}
                        onDelete={deleteProject}
                        onView={viewProject}
                        onEdit={editProject}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
