import type {NextPage} from "next";
import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import HomeFooter from "../components/Footer/HomeFooter";
import {IoAddCircleSharp} from "react-icons/io5";
import {AiOutlineDownload} from "react-icons/ai";

const Pay: NextPage = () => {
    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid
                container
                justifyContent="right"
                className="banner-container p-2 p-md-5 main-container"
                style={
                    {
                        background: "url('/pricing.png') no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "100% 100%"
                    }
                }
            >
                <Grid container textAlign="right" direction="column" wrap="nowrap" xs={12} md={6} lg={5} className="p-2 p-lg-5">
                    <Typography variant="h2" className="font-weight-bold text-white banner-title p-2" style={{textShadow: "0 1px 2px black"}}>
                        <span>PRICING</span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid justifyContent="center" direction="column" container wrap="nowrap" xs={12} className="p-5">
                <Grid container justifyContent="center">
                    <Typography variant="h3" fontWeight="bold">
                        When is <span style={{color: "#77C32B"}}>Form 2290</span> due?
                    </Typography>
                </Grid>
                <Grid
                    container style={
                        {
                            maxWidth: 950,
                            textAlign: "center"
                        }
                    }
                    className="m-auto p-5"
                >
                    <Typography>
                        When is form 2290 due? Form 2290 is an annual tax paid to the Internal Revenue Service.
                        For heavy vehicles with a taxable gross weight of 55,000 pounds or more, the IRS form 2290 due date is by August 31 of every year.
                        For newly purchased vehicles, form 2290 must be filed by the last day of the month following the month of first use.<br/><br/>
                        If you want to pay tax for additional taxable trucks registered in your name for any month other than July,
                        you must file separate 2290 forms for the months during which the vehicles were in service.<br/><br/>
                        Use the drop down below to see when your Form 2290 is due.
                    </Typography>
                </Grid>
                <Grid
                    container style={
                        {
                            border: "1px solid black",
                            maxWidth: 950
                        }
                    }
                    className="m-auto p-2"
                    wrap="nowrap"
                >
                    <Grid container justifyContent="left">
                        <Typography fontWeight="bold" noWrap>
                            The HVUT Form 2290 deadline for vehicle used, reported after July happens to be as follows:
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="right">
                        <Button>
                            <IoAddCircleSharp fontSize="x-large" fill="grey"/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className="banner-container p-2 p-md-5 main-container"
                style={
                    {
                        background: "url('/g14.png') no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }
                }
            >
                <Grid item container direction="column" wrap="nowrap" xs={12} className="p-2 p-lg-5">
                    <Typography noWrap variant="h3" className="font-weight-bold text-white p-2" style={{textShadow: "0 1px 2px black"}}>
                        Add PDF <br/>Downloadable Forms
                    </Typography>
                    <Grid lg={5} container style={{backgroundColor: "red"}}>
                        <Button
                            variant="contained"
                            size="large"
                            className="shadow-none p-3"
                            style={
                                {
                                    background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                    textTransform: "unset"
                                }
                            }
                            fullWidth
                        >
                            2022-Form 2290  <AiOutlineDownload fontSize="xx-large"/>
                        </Button>
                    </Grid>
                    <br/>
                    <Grid lg={5} container style={{backgroundColor: "red"}}>
                        <Button
                            variant="contained"
                            size="large"
                            className="shadow-none p-3"
                            style={
                                {
                                    background: "linear-gradient(90deg, #99c928 , #0072BA 100%)",
                                    textTransform: "unset"
                                }
                            }
                            fullWidth
                        >
                            2022-Form 8849  <AiOutlineDownload fontSize="xx-large"/>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={7} className="p-2">
                </Grid>
            </Grid>
            <HomeFooter/>
        </Grid>
    );
};

export default Pay;
