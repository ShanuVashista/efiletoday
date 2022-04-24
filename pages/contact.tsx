import React from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import HomeFooter from "../components/Footer/HomeFooter";
import {Mail, MapPin, Phone, Share2} from "react-feather";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri";
import WebLayout from "../components/WebLayout";

export default function ContactUs (){
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

    return <WebLayout
        component={
            <Grid container wrap="nowrap" direction="column">
                <Grid>
                    <img src="/contact-banner.png" className="w-100"/>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    className="p-2 p-md-5"
                    style={
                        {
                            background: "url('/contact-content-bg.png') no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                        }
                    }
                >
                    <Grid item xs={12} sm={10} md={9} container>
                        <Typography component={Grid} item xs={12} variant="h3" className="font-weight-bold p-2 text-center">
                        Get In <span style={{color: "#85bc3c"}}>Touch</span>
                        </Typography>
                        <Grid item xs={12} sm={6} md={5} className="p-2" container direction="column" wrap="nowrap">
                            <Grid container alignItems="center" wrap="nowrap" style={{marginBottom: 8}} className="p-2">
                                <Grid className="p-1">
                                    <Grid
                                        className="rounded"
                                        style={
                                            {
                                                marginRight: 16,
                                                padding: "8px 20px",
                                                background: "linear-gradient(90deg, #99c928 , #0072BA 100%)"
                                            }
                                        }
                                    >
                                        <Phone size={20} color="white"/>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography
                                        component={"a"}
                                        variant="subtitle2"
                                        href={"tel: 4146906435"}
                                        className="font-weight-semi-bold text-muted"
                                    >
                                    +1 (414) 690-6435
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" wrap="nowrap" style={{marginBottom: 8}} className="p-2">
                                <Grid className="p-1">
                                    <Grid
                                        className="rounded"
                                        style={
                                            {
                                                marginRight: 16,
                                                padding: "8px 20px",
                                                background: "linear-gradient(90deg, #99c928 , #0072BA 100%)"
                                            }
                                        }
                                    >
                                        <Mail size={20} color="white"/>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography
                                        component={"a"}
                                        variant="subtitle2"
                                        href={"mailto: info@efiletoday.com"}
                                        className="font-weight-semi-bold text-muted"
                                    >
                                    info@efiletoday.com
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" wrap="nowrap" style={{marginBottom: 8}} className="p-2">
                                <Grid className="p-1">
                                    <Grid
                                        className="rounded"
                                        style={
                                            {
                                                marginRight: 16,
                                                padding: "8px 20px",
                                                background: "linear-gradient(90deg, #99c928 , #0072BA 100%)"
                                            }
                                        }
                                    >
                                        <MapPin size={20} color="white"/>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography
                                        variant="subtitle2"
                                        className="font-weight-semi-bold text-muted"
                                    >
                                    123, Main Street <br/> Milwaukee - USA
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" wrap="nowrap" style={{marginBottom: 8}} className="p-2">
                                <Grid className="p-1">
                                    <Grid
                                        className="rounded"
                                        style={
                                            {
                                                marginRight: 16,
                                                padding: "8px 20px",
                                                background: "linear-gradient(90deg, #99c928 , #0072BA 100%)"
                                            }
                                        }
                                    >
                                        <Share2 size={20} color="white"/>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    {
                                        socialIcon.map((icon, i) => <Grid key={i} className="p-1">
                                            <Grid
                                                container alignItems="center" justifyContent="center"
                                                className="p-1" style={
                                                    {
                                                        borderColor: "grey",
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
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} className="p-2">
                            <Grid container>
                                <Grid item xs={12} md={6} className="p-2 custom-form with-white with-contact">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        className="border rounded-2"
                                        placeholder="First Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} className="p-2 custom-form with-white with-contact">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        className="border rounded-2"
                                        placeholder="Email"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className="p-2 custom-form with-white with-contact">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        className="border rounded-2"
                                        placeholder="Subject"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className="p-2" >
                                    <Grid className="bg-white custom-form with-white with-contact">
                                        <TextField
                                            multiline
                                            rows={5}
                                            fullWidth
                                            size="small"
                                            className="border rounded-2"
                                            placeholder="Message"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className="p-2" >
                                    <Button
                                        variant="contained"
                                        style={
                                            {
                                                height: 40,
                                                width: 180,
                                                background: "linear-gradient(90deg, #0072BA , #99c928 100%)"
                                            }
                                        }
                                    >
                                    Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item xs
                    component={"iframe"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.624573246943!2d-87.63862168484138!3d41.87942317922207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbf22e16dd7%3A0xc8cb80b384a3b873!2s150%20S%20Wacker%20Dr%2C%20Chicago%2C%20IL%2060606%2C%20USA!5e0!3m2!1sen!2sin!4v1650733318576!5m2!1sen!2sin"
                    style={
                        {
                            border: 0,
                            minHeight: 500
                        }
                    }
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <HomeFooter/>
            </Grid>
        }
    />;
}