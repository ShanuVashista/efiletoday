import {Button, Grid, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import logo from "../public/Fin_E-fileLogo.png";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import React from "react";
import {Search} from "react-feather";

const HomeHeader = () => {
    const links = [
        {
            label: "Home",
            href: ""
        },
        {
            label: "File",
            href: ""
        },
        {
            label: "Pay",
            href: ""
        },
        {
            label: "Refunds",
            href: ""
        },
        {
            label: "Forms & Instructions",
            href: ""
        },
        {
            label: "Contact",
            href: ""
        },
    ];

    return (
        <Grid
            container
            className="homeHeader"
            style={
                {
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    background: "linear-gradient(90deg, #99c928 , #0072BA 100%)",
                    position: "absolute",
                    top: 0,
                    left: "auto",
                }
            }
        >
            <Grid
                className="p-2" style={
                    {
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        background: "linear-gradient(180deg, #FFFFFF 60%, #87CEFA)",
                    }
                }
            >
                <Image src={logo} height={100} width={120}/>
            </Grid>
            <Grid container direction="column" wrap="nowrap" item xs>
                <Grid container className="p-2 text-white">
                    <Grid container wrap="nowrap" className="w-auto p-2" alignItems="center">
                        <BsFillTelephoneFill/>
                        <Typography component={"a"} href={"tel:'+14146906435'"} style={{marginLeft: ".5rem"}}>
                            +1 (414) 690-6435 |
                        </Typography>
                    </Grid>
                    <Grid container wrap="nowrap" className="w-auto p-2" alignItems="center">
                        <HiOutlineMailOpen fontSize="large"/>
                        <Typography component={"a"} href={"mailto:'info@efiletoday.com'"} style={{marginLeft: ".5rem"}}>
                            info@efiletoday.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" wrap="nowrap" justifyContent={"space-between"}>
                    {
                        links.map((link, i) => <Grid key={i} className="p-2">
                            <Button className="text-white">
                                {link.label}
                            </Button>
                        </Grid>)
                    }
                    <Grid className="p-2">
                        <IconButton>
                            <Search color="white" size={20}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2} >
                        <Button
                            variant="contained"
                            size="small"
                            className="shadow-none"
                            style={
                                {
                                    background: "#99c928",
                                    textTransform: "unset"
                                }
                            }
                        >
                            Login/Register
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomeHeader;
