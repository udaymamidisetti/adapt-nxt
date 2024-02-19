import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
const MainListItems = () => {
  const handleListItems = () => {};
  return (
    <React.Fragment>
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
      >
        <ListItemIcon sx={{ minWidth: 0 }}>
          <IoShareSocialOutline color="#000" />
        </ListItemIcon>
        <ListItemText primary="Channel" sx={{ fontSize: "14px" }} />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;
