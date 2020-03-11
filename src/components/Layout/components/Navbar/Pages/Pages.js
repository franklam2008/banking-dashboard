import React from "react";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BarChartIcon from "@material-ui/icons/BarChart";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";

export default [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardOutlinedIcon />
    },
    {
      title: "Accounts",
      href: "/Accounts",
      icon: <ShoppingBasketOutlinedIcon />
    },
    {
      title: "Transactions",
      href: "/Transactions",
      icon: <BarChartIcon />
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <SupervisorAccountOutlinedIcon />
    },
    {
      title: "Profile",
      href: "/Profile",
      icon: <PersonOutlineOutlinedIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsOutlinedIcon />
    },
    {
      title: "Test",
      href: "/Test",
      icon: <BuildOutlinedIcon />
    }
  ];