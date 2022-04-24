import * as React from "react";
import {Grid, Typography} from "@mui/material";

const Dashboard = () => {
    const links = [
        {
            label: "Start your E-File 2290",
            link: "",
            icon: "/register.png"
        },
        {
            label: "MAKE AN AMENDMENT TO AN EXISTING FILE",
            link: "",
            icon: "/details.png"
        },
        {
            label: "VIEW OR COPY YOUR PREVIOUS FILING",
            link: "",
            icon: "/view-or-copy-icon.png"
        },
        {
            label: "Start your E-File 8849",
            link: "",
            icon: "/tax.png"
        }
    ];

    const fastMenu = [
        {
            label: "Single Truck",
            image: "/single-truck.png",
            link: "/user/single-truck"
        },
        {
            label: "Multiple Truck",
            image: "/multiple-truck.png",
            link: "/user/tax-period"
        },
        {
            label: "View or copy previous filling",
            image: "/view-or-copy.png",
            link: ""
        }
    ];

    return(
        <Grid container justifyContent="center" direction="column" className="p-2 p-md-5 pb-0">
            <Grid container direction="column" className="p-2" justifyContent="center" alignItems="center">
                <Grid className="p-2">
                    <Typography
                        color="white" className="font-weight-bold p-3 rounded shadow" variant="h6"
                        style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}
                    >
                        TELL US WHAT YOU WANT TO DO?
                    </Typography>
                </Grid>
                <Grid container justifyContent="center" className="p-2">
                    {
                        links.map((link, i) => <Grid key={i} item xs md={3} className="p-2">
                            <Grid container alignItems="center" className="bg-white shadow rounded p-2">
                                <Grid className="p-1">
                                    <img
                                        src={link.icon}
                                        style={
                                            {
                                                width: 50,
                                                height: 50,
                                                objectFit: "contain"
                                            }
                                        }
                                    />
                                </Grid>
                                <Typography
                                    component={Grid} item xs color="#0072BA" variant="subtitle2"
                                    className="p-1 text-uppercase font-weight-semi-bold text-center"
                                >
                                    {link.label}
                                </Typography>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
                <Grid container justifyContent="center" className="p-2">
                    {
                        fastMenu.map((menu, i) => <Grid key={i} item xs={12} sm={4} md={3} className="p-2">
                            <Grid container justifyContent="center" className="position-relative" component={"a"} href={menu.link}>
                                <img src={menu.image} className="w-100"/>
                                <Typography
                                    variant="subtitle2"
                                    className="text-uppercase text-center rounded shadow"
                                    style={
                                        {
                                            bottom: 25,
                                            width: 180,
                                            color: "white",
                                            position: "relative",
                                            padding: "8px 20px",
                                            background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                        }
                                    }
                                >
                                    {menu.label}
                                </Typography>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;