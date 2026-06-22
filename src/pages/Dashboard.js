import { Box, Paper, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
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
            ml: "250px",
            mt: "90px",
            p: 4,
            width: "100%",
          }}
        >
          <Typography variant="h3" fontWeight="bold" mb={3}>
            Welcome Aleena!!
          </Typography>

          <Typography variant="h6" color="gray" mb={4}>
            Manage and organize your projects efficiently.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 4,
                width: 250,
                borderRadius: 4,
              }}
            >
              <Typography variant="h6">Total Projects</Typography>

              <Typography variant="h3" color="primary">
                0
              </Typography>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                p: 4,
                width: 250,
                borderRadius: 4,
              }}
            >
              <Typography variant="h6">Status</Typography>

              <Typography variant="h5" color="success.main">
                Active
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
