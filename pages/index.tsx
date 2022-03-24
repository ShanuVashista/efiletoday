import type {NextPage} from "next";
import {Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";

const Home: NextPage = () => {
    const fileData = [
        {
            title: "Live assistance available",
            description: "Contact us today! Our experienced staff will be file your tax for you, ensuring accuracy and ease of submission.",
            link: ""
        },
        {
            title: "The e-filing process made quick and easy",
            description: "Get rid of the long process of filing paper forms insted get your stamped schedule 1 in minutes.",
            link: ""
        },
        {
            title: "We offer free VIn correction & retransmission services",
            description: "If your return was filed incorrectly or rejected, you can easily make corrections.",
            link: ""
        },
        {
            title: "Agents! Easy transfer of data",
            description: "No more calling the client's old agent to release their 2290 accounts. Transfer your account from one agent to another with ease",
            link: ""
        },
        {
            title: "IRS Authorized",
            description: "In order to ensure safe e-filing of form 2290, you must go with an IRS-authorized service provider like eform2290",
            link: ""
        },
    ];

    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid container>
                <img src={"/banner.jpg"} className="w-100"/>
            </Grid>
            <Grid container>
                <img src={"/file-bg.jpg"} className="w-100"/>
            </Grid>
            <Grid container justifyContent="center" style={{background: "#0A4970"}} className="p-5">
                <Typography component={Grid} item xs={12} className="p-3 text-center font-weight-bold text-white" variant="h4">
                    What <span style={{color: "#85bc3c"}}>efile today</span> Provides You
                </Typography>
                <Grid item lg={8} container alignItems="center" justifyContent="center" className="p-2">
                    {
                        fileData.map((data, i) => <Grid
                            item
                            key={i}
                            className="p-2"
                            xs sm={6} md={4}
                        >
                            <Grid
                                className="p-4 pl-5 pr-5 text-center rounded"
                                style={
                                    {
                                        fontSize: 12,
                                        color: "#fff",
                                        minHeight: 180,
                                        background: "#105983",
                                    }
                                }
                            >
                                <Typography variant={"subtitle2"} style={{fontWeight: 600}} className="p-2 pl-4 pr-4">
                                    {data.title}
                                </Typography>
                                <Typography className="p-2" style={{fontSize: 11}}>
                                    {data.description}
                                </Typography>
                                <Grid className="p-2">
                                    <Button
                                        size="small" style={
                                            {
                                                color: "#85bc3c",
                                                fontWeight: 600
                                            }
                                        }
                                    >
                                    Know More
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Grid>
            <Grid container className="position-relative">
                <img src={"/cta.jpg"} className="w-100"/>
                <Grid container direction="column" justifyContent="center" wrap="nowrap" className="overlay-container with-cta">
                    <Typography variant="h4" className="font-weight-bold text-white p-2">
                        Take advantage of these features and begin filling your form 2290 now
                    </Typography>
                    <Grid container wrap="nowrap" className="overlay-form p-2">
                        <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Your Email Address"
                            variant="outlined"
                        />
                        <Button
                            className="m-0 rounded-0"
                            style={
                                {
                                    background: "#0088ce",
                                    color: "#fff",
                                    width: 200,
                                    height: 56,
                                    textTransform: "inherit"
                                }
                            }
                        >
                            e-file Now 2290
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="position-relative">
                <img src={"/how-to-start.jpg"} className="w-100"/>
                <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className="overlay-container">
                    <Typography variant="h3" className="font-weight-bold p-2">
                       How to <span style={{color: "#85bc3c"}}>Start?</span>
                    </Typography>
                    <Grid container>
                        <Grid item xs md={3}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
