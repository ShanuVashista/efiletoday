import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {AppBar, Container, Typography, IconButton, Toolbar, Avatar, Grid} from "@mui/material";
import logo from "../public/Fin_E-fileLogo.png";
import Image from "next/image";
import Link from "next/link";
import {IoPersonOutline} from "react-icons/io5";
import {BsSpeedometer2, BsTruck} from "react-icons/bs";
import {AiOutlinePullRequest, AiOutlineTransaction} from "react-icons/ai";
import {BiBookContent} from "react-icons/bi";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

export default function AdminDashboard (){
    const menuList = [
        {
            menuItem: "Dashboard",
            icon: <BsSpeedometer2 fill="#99C928"/>
        },
        {
            menuItem: "Categories",
            icon: <IoPersonOutline fill="#99C928"/>
        },
        {
            menuItem: "Users",
            icon: <IoPersonOutline fill="#99C928"/>
        },
        {
            menuItem: "Requests",
            icon: <AiOutlinePullRequest fill="#99C928"/>
        },
        {
            menuItem: "Trucks",
            icon: <BsTruck fill="#99C928"/>
        },
        {
            menuItem: "Transactions",
            icon: <AiOutlineTransaction fill="#99C928"/>
        },
        {
            menuItem: "CMS Content",
            icon: <BiBookContent fill="#99C928"/>
        },
    ];

    return (
        <>
            <Grid container direction="row">
                <Grid item>
                    <Box
                        width={200}
                        role="presentation"
                    >
                        <List>
                            <ListItem button className="p-5 pt-0 pb-0">
                                <Link href="#"><Image src={logo} height={100} width={120}/></Link>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            {
                                menuList.map((item) => (
                                    <ListItem button key={item.menuItem}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.menuItem} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
                <Grid item xs>
                    <AppBar position="static" style={{backgroundColor: "white"}}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Box
                                    sx={
                                        {
                                            flexGrow: 1,
                                            display: {
                                                xs: "none",
                                                md: "flex"
                                            }
                                        }
                                    }
                                >
                                </Box>
                                <Box sx={{flexGrow: 0}}>
                                    <IconButton sx={{p: 0}}>
                                        <Avatar alt="Shawn Edwards" />
                                        <Typography color="black" className="m-2">Shawn Edwards</Typography>
                                        <Button style={{backgroundColor: "#99C928"}} >
                                            <Typography color="white">Logout</Typography>
                                            <MdOutlineKeyboardArrowRight fill="white"/>
                                        </Button>
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    );
}

