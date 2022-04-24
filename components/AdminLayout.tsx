import * as React from "react";
import {AppBar, Avatar, Container, Divider, Drawer, Grid, List, ListItem, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {BsSpeedometer2, BsTruck} from "react-icons/bs";
import {IoPersonOutline} from "react-icons/io5";
import {AiOutlinePullRequest, AiOutlineTransaction} from "react-icons/ai";
import {BiBookContent} from "react-icons/bi";
import {useRouter} from "next/router";

const AdminLayout = ({component}: any) => {
    const router = useRouter();

    const links = [
        {
            label: "Dashboard",
            link: "/admin/dashboard",
            icon: <BsSpeedometer2 fill="#99C928"/>
        },
        {
            label: "Customers",
            link: "/admin/customers",
            icon: <IoPersonOutline fill="#99C928"/>
        },
        {
            label: "Businesses",
            link: "/admin/businesses",
            icon: <IoPersonOutline fill="#99C928"/>
        },
        {
            label: "Transactions History",
            link: "/admin/transactions",
            icon: <AiOutlinePullRequest fill="#99C928"/>
        },
        {
            label: "E Filed Applications",
            link: "/admin/efile-applications",
            icon: <BsTruck fill="#99C928"/>
        },
        {
            label: "Data Control Applications",
            link: "",
            icon: <AiOutlineTransaction fill="#99C928"/>
        },
        {
            label: "Enquiries",
            link: "/admin/enquires",
            icon: <AiOutlineTransaction fill="#99C928"/>
        },
        {
            label: "CMS",
            link: "",
            icon: <BiBookContent fill="#99C928"/>
        },
        {
            label: "Audit Logs",
            link: "/admin/logs",
            icon: <BiBookContent fill="#99C928"/>
        },
        {
            label: "Settings",
            link: "",
            icon: <BiBookContent fill="#99C928"/>
        },
    ];

    return <Grid container wrap="nowrap">
        <Drawer
            sx={
                {
                    width: 240,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                    },
                }
            }
            variant="permanent"
            anchor="left"
        >
            <img src={"/logo.png"} className="p-3 mx-auto" style={{width: 150}}/>
            <Divider/>
            <List className="p-0">
                {
                    links.map((item) => (
                        <ListItem button key={item.label} onClick={() => router.push(item.link)}>
                            <Typography variant="subtitle2" className="p-2">
                                {item.label}
                            </Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
        <Grid item xs container direction="column" wrap="nowrap">
            <AppBar position="static" style={{backgroundColor: "white"}} elevation={1}>
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
                        <Avatar alt="Shawn Edwards" />
                        <Typography variant="subtitle2" className="p-2 font-weight-semi-bold text-muted">
                            Shawn Edwards
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Grid
                style={
                    {
                        minHeight: "calc(100vh - 64px)",
                        overflowY: "auto"
                    }
                }
            >
                {component}
            </Grid>
        </Grid>
    </Grid>;
};

export default AdminLayout;