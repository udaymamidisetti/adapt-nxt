import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Orders from "./Orders";
import { Avatar, Stack } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#fff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    backgroundColor: "#fff",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [content, setContent] = React.useState("Orders");
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="#000"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <AiOutlineMenuUnfold color="#000" />
            </IconButton>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
                ...(!open && { display: "none" }),
              }}
            >
              <IconButton onClick={toggleDrawer} color="#000">
                <AiOutlineMenuFold color="#000" />
              </IconButton>
            </Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            ></Typography>
            <IconButton color="inherit">
              <IoMdNotificationsOutline color="#000" />
            </IconButton>
            <IconButton color="inherit">
              <IoMoonOutline color="#000" />
            </IconButton>
            <IconButton color="inherit">
              <LiaLanguageSolid color="#000" />
            </IconButton>
            <IconButton color="inherit">
              <Avatar color="#000" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Divider />
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <img src="" alt="logo" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                gap: "15px",
                paddingLeft: 5,
                marginTop: 5,
                ":hover": {
                  backgroundColor: "#e6f7ff",
                  color: "#76b4ff",
                },
              }}
              onClick={() => setContent("Dashboard")}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <AiOutlineDashboard color="#000" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ fontSize: "14px" }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                gap: "15px",
                paddingLeft: 5,
                ":hover": {
                  backgroundColor: "#e6f7ff",
                  color: "#76b4ff",
                },
              }}
              onClick={() => setContent("Inventory")}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <IoPricetagOutline color="#000" />
              </ListItemIcon>
              <ListItemText primary="Inventory" sx={{ fontSize: "14px" }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                gap: "15px",
                paddingLeft: 5,
                ":hover": {
                  backgroundColor: "#e6f7ff",
                  color: "#76b4ff",
                },
              }}
              onClick={() => setContent("Orders")}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <TiClipboard color="#000" />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ fontSize: "14px" }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                gap: "15px",
                paddingLeft: 5,
                ":hover": {
                  backgroundColor: "#e6f7ff",
                  color: "#76b4ff",
                },
              }}
              onClick={() => setContent("Shipping")}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <MdOutlineLocalShipping color="#000" />
              </ListItemIcon>
              <ListItemText primary="Shippping" sx={{ fontSize: "14px" }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                gap: "15px",
                paddingLeft: 5,
                ":hover": {
                  backgroundColor: "#e6f7ff",
                  color: "#76b4ff",
                },
              }}
              onClick={() => setContent("Channel")}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <IoShareSocialOutline color="#000" />
              </ListItemIcon>
              <ListItemText primary="Channel" sx={{ fontSize: "14px" }} />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <>
                  <Stack useFlexGap flexDirection={"row"} gap={3}>
                    <p
                      style={{
                        color: "#499dfe",
                        borderBottom: "1px solid #499dfe",
                      }}
                    >
                      Pending
                    </p>
                    <p>Accepted</p>
                    <p>AWB Created</p>
                    <p>Ready To Ship</p>
                    <p>Shipped</p>
                    <p>Completed</p>
                    <p>Cancelled</p>
                  </Stack>
                  <Paper
                    sx={{ p: 1, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
