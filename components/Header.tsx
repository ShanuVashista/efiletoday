import {Button, Drawer, Grid, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import React, {useState} from "react";
import {Menu, Search, XCircle} from "react-feather";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri";

const Header = () => {
    const [show, setShow] = useState(false);

    const links = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "File",
            href: "file"
        },
        {
            label: "Pay",
            href: "/pay"
        },
        {
            label: "Refunds",
            href: "/refund"
        },
        {
            label: "Forms & Instructions",
            href: ""
        },
        {
            label: "Contact",
            href: "/contact"
        },
    ];

    const socialIcon = [
        {
            icon: <AiOutlineTwitter fill="#32CD32" fontSize="small" />,
            href: ""
        },
        {
            icon: <AiOutlineInstagram fill="#32CD32" fontSize="small" />,
            href: ""
        },
        {
            icon: <FaFacebookF fill="#32CD32" fontSize="small" />,
            href: ""
        },
        {
            icon: <RiLinkedinFill fill="#32CD32" fontSize="small" />,
            href: ""
        },
    ];

    const content = <>{
        links.map((link, i) => <Grid key={i} className="p-1 p-lg-2 w-auto">
            <Button href={link.href} size="small" className="header-link">
                {link.label}
            </Button>
        </Grid>)
    }</>;

    return (
        <Grid
            container
            wrap="nowrap"
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
                <a href="/"><Image src={logo} height={100} width={120}/></a>
            </Grid>
            <Grid container direction="column" wrap="nowrap" item xs>
                <Grid container wrap="nowrap" alignItems="center" justifyContent="space-between" className="p-2 text-white">
                    <Grid item xs container className="hidden-mdUp-container">
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
                    {
                        socialIcon.map((icon, i) => <Grid key={i} className="p-1">
                            <Grid
                                container alignItems="center" justifyContent="center"
                                className="p-1" style={
                                    {
                                        borderColor: "white",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderRadius: "50%",
                                        height: 30,
                                        width: 30,
                                    }
                                }
                            >
                                {icon.icon}
                            </Grid>
                        </Grid>)
                    }
                    <Grid className="p-1 hidden-mdDown-container">
                        <IconButton
                            size="small"
                            style={
                                {
                                    width: 30,
                                    height: 30,
                                    borderWidth: 1,
                                    borderRadius: "50%",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                }
                            }
                        >
                            <Search color="white" size={15}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" wrap="nowrap" justifyContent="space-between">
                    <Grid item xs container alignItems="center" justifyContent="space-between" wrap="nowrap" className="hidden-mdUp-container">
                        {content}
                    </Grid>
                    <Grid className="p-2 hidden-mdUp-container">
                        <IconButton>
                            <Search color="white" size={20}/>
                        </IconButton>
                    </Grid>
                    <Grid container item md={2} className="p-2 p-lg-3" justifyContent="flex-end">
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
                            href="/login"
                        >
                            Login/Register
                        </Button>
                    </Grid>
                    <Grid item md={2} className="p-2 p-lg-0 hidden-mdDown-container">
                        <IconButton
                            onClick={() => setShow(true)}
                            size="small"
                            style={
                                {
                                    borderWidth: 1,
                                    marginRight: 2,
                                    borderRadius: "50%",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                }
                            }
                        >
                            <Menu color="white" size={22}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Drawer
                open={show}
                className="w-100"
            >
                <Grid
                    className="h-100"
                    style={{background: "linear-gradient(90deg, #99c928 , #0072BA 100%)"}}
                >
                    <Grid
                        container
                        alignItems="center"
                    >
                        <Grid item xs>
                            <Grid
                                className="d-inline-flex"
                                style={
                                    {
                                        borderBottomLeftRadius: 25,
                                        borderBottomRightRadius: 25,
                                        background: "linear-gradient(180deg, #FFFFFF 60%, #87CEFA)",
                                    }
                                }
                            >
                                <img src={"/logo.png"} className="p-3" style={{width: 120}}/>
                            </Grid>
                        </Grid>
                        <Grid className="p-2">
                            <IconButton onClick={() => setShow(false)}>
                                <XCircle size={30} color="#fff"/>
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            wrap="nowrap"
                            direction="column"
                            className="p-2"
                        >
                            {content}
                        </Grid>
                        <Grid item xs={12} container wrap="nowrap" direction="column" className="p-2">
                            <Grid container wrap="nowrap" className="p-3" alignItems="center">
                                <Typography className="text-white" style={{marginRight: ".5rem"}}>
                                    Phone:
                                </Typography>
                                <BsFillTelephoneFill className="text-white" style={{marginRight: ".5rem"}}/>
                                <Typography className="text-white" component={"a"} href={"tel:'+14146906435'"}>
                                +1 (414) 690-6435
                                </Typography>
                            </Grid>
                            <Grid container wrap="nowrap" className="p-3" alignItems="center">
                                <Typography className="text-white" style={{marginRight: ".5rem"}}>
                                    Email:
                                </Typography>
                                <HiOutlineMailOpen fontSize="large" className="text-white" style={{marginRight: ".5rem"}}/>
                                <Typography component={"a"} className="text-white" href={"mailto:'info@efiletoday.com'"}>
                                info@efiletoday.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </Grid>
    );
};

export default Header;
