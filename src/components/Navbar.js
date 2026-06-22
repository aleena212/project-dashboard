import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" elevation={3}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,

              letterSpacing: 1,
            }}
          >
            Project Dashboard
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
