import {Button, Grid, TextField} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import {Mail, PhoneCall} from "react-feather";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri";

function HomeFooter (){
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

    return (
        <Grid container justifyContent="space-around" className="p-2 p-md-4 bg-black text-white footer-container">
            <Grid item xs={12} sm={6} lg={3}>
                <Grid container direction="column" wrap="nowrap">
                    <Typography variant="h6" className="p-2 text-uppercase">
                        Contact Us
                    </Typography>
                    <Grid container alignItems="center" className="p-2">
                        <Grid className="p-1" item xs={2}>
                            <img src="/map-icon.png"/>
                        </Grid>
                        <Typography variant="subtitle2" component={Grid} item xs className="p-1">
                            123, Main Street Milwaukee - USA
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Grid className="p-1" item xs={2}>
                            <PhoneCall color="#85bc3c"/>
                        </Grid>
                        <Typography variant="subtitle2" component={Grid} item xs className="p-1">
                            +1(414)690-643
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Grid className="p-1" item xs={2}>
                            <Mail color="#85bc3c"/>
                        </Grid>
                        <Typography variant="subtitle2" component={Grid} item xs className="p-1">
                            info@efiletoday.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="p-3">
                        <img src="/logo.png" style={{width: 150}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Grid container direction="column" wrap="nowrap">
                    <Typography variant="h6" className="p-2 text-uppercase">
                        NewsLetter
                    </Typography>
                    <Typography variant="subtitle2" component={Grid} item xs className="p-2">
                        efile today empowered filing services
                    </Typography>
                    <Grid className="p-2 custom-form with-white">
                        <TextField
                            fullWidth
                            size="small"
                            className="rounded-0"
                            placeholder="Email"
                            variant="outlined"
                        />
                    </Grid>
                    <Typography variant="subtitle2" component={Grid} item xs className="p-2">
                        efile today empowered filing services producers for reliable filing hub.
                    </Typography>
                    <Grid container wrap="nowrap" alignItems="center" className="p-2">
                        <Grid item xs className="p-1">
                            <Button
                                variant="contained"
                                className="shadow-none"
                                style={{background: "#99c928"}}
                            >
                                Subscribe
                            </Button>
                        </Grid>
                        <Grid className="w-auto" container alignItems="center">
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
                        </Grid>
                    </Grid>
                    <Typography variant="h6" component={Grid} item xs={12} className="p-2 font-weight-bold">
                        About Us
                    </Typography>
                    <Typography variant="subtitle2" component={Grid} item xs={12} className="p-2">
                        efile today empowered filing services producers for reliable filing hub.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
                <Grid container direction="column" wrap="nowrap">
                    <Typography variant="h6" className="p-2 text-uppercase">
                        Product & services
                    </Typography>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            EFile form 2290
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            EFile 2290 by phone
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            Free VIN Correction
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            Claim 2290 Tax Refund
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            2290 State filing
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-2">
                        <Button className="text-white">
                            Apply For En
                        </Button>
                    </Grid>
                    <Grid container alignItems="center" className="p-3">
                        <img src={"/irs-logo-light.png"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeFooter;