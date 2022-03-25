import {Button, Grid, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import logo from "../public/Fin_E-fileLogo.png";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import React from "react";
import {BiSearch} from "react-icons/all";

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
            container style={
                {
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    background: "linear-gradient(90deg, #99c928 , #0072BA 100%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }
            }
        >
            <Grid
                item xs={2} md={1} className="p-2" style={
                    {
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        background: "linear-gradient(180deg, #FFFFFF 60%, #87CEFA)",
                    }
                }
            >
                <Image src={logo} height={100} width={150}/>
            </Grid>
            <Grid container direction="column" wrap="nowrap" item xs={10} md={11}>
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
                <Grid container alignItems="center" justifyContent={"space-between"}>
                    {
                        links.map((link, i) => <Grid key={i} className="p-2">
                            <Button className="text-white">
                                {link.label}
                            </Button>
                        </Grid>)
                    }
                    <Grid className="p-2">
                        <IconButton>
                            <BiSearch color="white" size={20}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2} >
                        <Button
                            variant="contained"
                            size="large"
                            className="shadow-none"
                            style={
                                {
                                    background: "#99c928",
                                    textTransform: "unset"
                                }
                            }
                        >
                            <Typography fontSize="small">Login/Register</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomeHeader;
