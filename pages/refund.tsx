import React from "react";
import {NextPage} from "next";
import {Button, Grid, Typography} from "@mui/material";
import {CircleRounded} from "@mui/icons-material";
import {AiOutlineDownload} from "react-icons/ai";
import HomeFooter from "../components/Footer/HomeFooter";
import WebLayout from "../components/WebLayout";

const Refund:NextPage = () => {
    const fileData = [
        {title: "Provider of IRS-approved e-filing services"},
        {title: "Schedule 6 will be delivered to your inbox 24 hours a day, 7 days a week"},
        {title: "Schedule 6 is also available for a direct download from the website in PDF format"},
        {title: "Files are filed quickly and securely"},
        {title: "Update on filings in real-time"},
        {title: "VIN rectification is completely free"},
    ];

    return <WebLayout
        component={
            <Grid container direction="column" wrap="nowrap">
                <img src="refund-banner.png" className="w-100"/>
                <Grid
                    container
                    alignItems="center"
                    className="p-2 p-md-5 main-container"
                    style={
                        {
                            background: "url('/refund-content-bg.png') no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                        }
                    }
                >
                    <Typography
                        component={Grid} item xs={12} sm={10} md={8} variant="h4"
                        className="font-weight-semi-bold p-2 text-center mx-auto"
                    >
                E-File <span style={{color: "#85bc3c"}}>Form 8849</span>
                    </Typography>
                    <Typography
                        component={Grid} item xs={12} sm={10} md={8} variant="subtitle2"
                        className="font-weight-semi-bold p-2 text-center mx-auto"
                    >
                8849 is filed to request a refund of excise taxes. Attach Schedules 1, 2, 3, 5 and 8 to claim certain
                fuel-related refunds, such as nontaxable gasoline usage (or sales). To claim sums claimed as a credit
                on Form 720, Schedule C, Form 730, Form 2290 or Form 4136.
                    </Typography>
                    <Grid item xs={12} sm={8} md={5} container direction="column" wrap="nowrap">
                        <Typography
                            variant="h4"
                            className="p-2 font-weight-semi-bold"
                        >
                    Who is Required to <br/> File <span style={{color: "#85bc3c"}}>IRS Form 8849?</span>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className="p-2"
                        >
                    Form 8849 can be e-filed by anyone who needs to claim a refund or credit on previously paid heavy
                    vehicle use taxes for sold / stolen / destroyed cars or vehicle that did not exceed the mileage
                    limit.
                        </Typography>
                        <Typography
                            variant="h6"
                            className="font-weight-semi-bold p-2"
                        >
                    Have the following information on hand when completing Form 2290.
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        Your business identification number(EIN).<br/>
                        (To file Form 2290, you must have and EIN. DO NOT USE your social security number).
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Each vehicle's vehicle identification number (VIN).
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        The taxable gross weight of each vehicle is used to classify it.
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" style={{background: "#0A4970"}} className="p-2 p-md-5 main-container">
                    <Typography component={Grid} item xs={12} className="p-3 text-center font-weight-bold text-white" variant="h4">
                Benefits of <span style={{color: "#85bc3c"}}>filing form 8849</span> with us are
                    </Typography>
                    <Grid item md={10} container alignItems="center" justifyContent="center" className="p-2">
                        {
                            fileData.map((data, i) => <Grid
                                item
                                key={i}
                                className="p-2"
                                xs={12} sm={6} md={4}
                            >
                                <Grid
                                    className="p-4 pl-5 pr-5 text-center rounded"
                                    container alignItems="center"
                                    justifyContent="center"
                                    style={
                                        {
                                            fontSize: 12,
                                            color: "#fff",
                                            minHeight: 180,
                                            background: "#105983",
                                        }
                                    }
                                >
                                    <Typography variant="subtitle2" className="p-2 pl-4 pr-4">
                                        {data.title}
                                    </Typography>
                                </Grid>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
                <Grid
                    container
                    className="position-relative main-container advantage-container"
                    style={
                        {
                            background: "url('/refund-cta-background.png') no-repeat",
                            backgroundSize: "cover"
                        }
                    }
                >
                    <Grid container alignItems="center" className="with-cta">
                        <Typography component={Grid} item xs={12} md={7} variant="h4" className="font-weight-semi-bold text-white p-2">
                    Add PDF <br/> Downloadable Forms
                        </Typography>
                        <Grid item xs={12} md={7} container wrap="nowrap" className="overlay-form p-2">
                            <Button
                                className="m-0 rounded-0"
                                style={
                                    {
                                        height: 56,
                                        width: 300,
                                        color: "#fff",
                                        textTransform: "inherit",
                                        background: "linear-gradient(120deg, #99c928, #0072BA 80%)"
                                    }
                                }
                            >
                        2022 - Form 8849 <AiOutlineDownload size={20} style={{marginLeft: 8}}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" className="refund-policy-container">
                    <Grid
                        item xs={12} md={9}
                        container direction="column" wrap="nowrap"
                        className="refund-policy-content-container p-2 p-md-5"
                    >
                        <Typography
                            variant="h4"
                            className="font-weight-semi-bold p-2"
                        >
                    Refund <span style={{color: "#85bc3c"}}>Policy</span>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        Once the transaction is initiated with the IRS NO refunds will be granted.
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        No refunds will be granted after 30 days from the transaction date.
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                                <a href="efiletoday.com" style={{color: "#0088CE"}}>efile<span style={{color: "#85bc3c"}}>today.com</span></a> reserves the right for processing / declining a refund request.
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        Refunds initiated against any transaction may be subject to Transaction Fees and other charges.
                            </Typography>
                        </Typography>
                        <Typography
                            component={Grid}
                            container
                            variant="subtitle2"
                            className="p-1"
                        >
                            <Grid className="p-1">
                                <CircleRounded style={{fontSize: 11}}/>
                            </Grid>
                            <Typography variant="subtitle2" className="p-1" component={Grid} item xs>
                        EMail <a href="mailto:info@efiletoday.com" style={{color: "#0088CE"}}>info@efile<span style={{color: "#85bc3c"}}>today.com</span></a> to request / initiate any refunds.
                            </Typography>
                        </Typography>
                    </Grid>
                    <img src="/refund-policy-background.png" className="w-100"/>
                </Grid>
                <HomeFooter/>
            </Grid>
        }
    />;
};

export default Refund;