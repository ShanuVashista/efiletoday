import * as React from "react";
import {Box, Button, Checkbox, Grid, Typography} from "@mui/material";
import {FcPrint} from "react-icons/fc";

const Page11 = () => {
    const box2Data1 = [
        {
            col1: "Filing Type",
            col2: "Normal"
        },
        {
            col1: "Tax Period",
            col2: "July 2021 - June 2022"
        },
        {
            col1: "First Used Month",
            col2: "July"
        },
        {
            col1: "Tax Amount",
            col2: "$ 0.00"
        },
        {
            col1: "Additional Tax",
            col2: "$ 0.00"
        },
        {
            col1: "Credit Amount",
            col2: "$ 0.00"
        },
        {
            col1: "Balance Amount",
            col2: "$ 0.00"
        }
    ];

    const box2Data2 = [
        {col1: "Taxable Vehicles"},
        {col1: "Suspended Vehicles"},
        {col1: "Credit Vehicles"},
        {col1: "Prior Year Suspended Vehicles (Sold)"}
    ];

    const box3Data1 = [
        {col1: "Signing Authority Name"},
        {col1: "Signing Authority Title"},
        {col1: "Signing Authority Phone"},
        {col1: "Signing Authority PIN"},
        {col1: "Third Party Designee Name"},
        {col1: "Third Party Designee Phone"},
        {col1: "Third Party Designee PIN"},
    ];

    const box3Data2 = [
        {col1: "PTIN"},
        {col1: "Name"},
        {col1: "Self Employed"},
        {col1: "Firm's EIN"},
        {col1: "Firm's Name"},
        {col1: "Phone"},
        {col1: "Address"},
    ];

    const box4Data1 = [
        {col1: "Payment Method"},
        {col1: "Account Type"},
        {col1: "Account Number"},
        {col1: "Routing Number"},
        {col1: "Phone Number"},
    ];

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} container direction="column">
                <Grid container justifyContent="right" className="m-2">
                    <Typography className="text-style" fontSize="small">Print this page</Typography>
                    <Button><FcPrint fontSize="xx-large"/></Button>
                </Grid>
                <Grid item className="m-2">
                    <Box>
                        <Grid
                            container direction="row" wrap="nowrap" style={
                                {
                                    borderRadius: 4,
                                    backgroundColor: "white"
                                }
                            }
                        >
                            <Grid container xs={12} lg={6} className="p-2">
                                <Typography className="text-style" fontSize="small" style={{display: "inline-block"}}>
                                    <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                        Status: &nbsp;
                                    </Typography>
                                    Not submitted
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="right" xs={12} lg={6}>
                                <Button
                                    className="m-3" variant="contained" style={{backgroundColor: "#71C12D"}}
                                >Edit Here</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item className="m-2">
                    <Box>
                        <Grid
                            container direction="column" wrap="nowrap" style={
                                {
                                    borderRadius: 4,
                                    backgroundColor: "white"
                                }
                            }
                        >
                            <Grid container justifyContent="center" className="p-2">
                                <Typography fontWeight="bold">BUSINESS</Typography>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={6} lg={6} className="p-3 pb-0">
                                    <Typography fontSize="small" fontWeight="bold">EIN</Typography>
                                </Grid>
                                <Grid item xs={6} lg={6} className="p-3 pb-0">
                                    <Typography fontSize="small" color="#2568BB">975***53</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={6} lg={6} className="p-3 pb-0">
                                    <Typography fontSize="small" fontWeight="bold">Business Name</Typography>
                                </Grid>
                                <Grid item xs={6} lg={6} className="p-3 pb-0">
                                    <Typography fontSize="small" color="#2568BB">Beyond Financial</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={6} lg={6} className="p-3 pb-0">
                                    <Typography fontSize="small" fontWeight="bold">Address</Typography>
                                </Grid>
                                <Grid item xs={6} lg={6} className="p-3">
                                    <Typography fontSize="small" color="#2568BB">*************************</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item className="m-2">
                    <Box>
                        <Grid
                            container direction="column" wrap="nowrap" style={
                                {
                                    borderRadius: 4,
                                    backgroundColor: "white"
                                }
                            }
                        >
                            <Grid container direction="row">
                                <Grid container direction="column" xs={12} lg={6} className="p-3 pb-0">
                                    <Grid container justifyContent="center">
                                        <Typography fontWeight="bold">GENERAL</Typography>
                                    </Grid>
                                    {
                                        box2Data1.map((item, key) => {
                                            return (
                                                <Grid key={key} container direction="row">
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            fontWeight="bold"
                                                        >{item.col1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            color="#2568BB"
                                                        >{item.col2}</Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        })
                                    }

                                </Grid>
                                <Grid container direction="column" xs={12} lg={6} className="p-3 pb-0">
                                    <Grid container justifyContent="center">
                                        <Typography fontWeight="bold">Business</Typography>
                                    </Grid>
                                    {
                                        box2Data2.map((item, key) => {
                                            return (
                                                <Grid key={key} container direction="row">
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            fontWeight="bold"
                                                        >{item.col1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={6} className="p-1 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            color="#2568BB"
                                                        ><Checkbox/></Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        })
                                    }

                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item className="m-2">
                    <Box>
                        <Grid
                            container direction="column" wrap="nowrap" style={
                                {
                                    borderRadius: 4,
                                    backgroundColor: "white"
                                }
                            }
                        >
                            <Grid container direction="row">
                                <Grid container direction="column" xs={12} lg={6} className="p-3 pb-0">
                                    <Grid container justifyContent="center">
                                        <Typography fontWeight="bold">SIGNING AUTHORITY</Typography>
                                    </Grid>
                                    {
                                        box3Data1.map((item, key) => {
                                            return (
                                                <Grid key={key} container direction="row">
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            fontWeight="bold"
                                                        >{item.col1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            color="#2568BB"
                                                        >*********</Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        })
                                    }

                                </Grid>
                                <Grid container direction="column" xs={12} lg={6} className="p-3 pb-0">
                                    <Grid container justifyContent="center">
                                        <Typography fontWeight="bold">PAID PREPARER</Typography>
                                    </Grid>
                                    {
                                        box3Data2.map((item, key) => {
                                            return (
                                                <Grid key={key} container direction="row">
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            fontWeight="bold"
                                                        >{item.col1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                        <Typography
                                                            fontSize="small"
                                                            color="#2568BB"
                                                        >*********</Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        })
                                    }

                                </Grid>
                                <Grid item className="m-2">
                                    <Box>
                                        <Grid
                                            container direction="column" wrap="nowrap" style={
                                                {
                                                    borderRadius: 4,
                                                    backgroundColor: "white"
                                                }
                                            }
                                        >
                                            <Grid container direction="row">
                                                <Grid container direction="column" xs={12} lg={6} className="p-3 pb-0">
                                                    <Grid container justifyContent="center">
                                                        <Typography fontWeight="bold">IRS PAYMENT</Typography>
                                                    </Grid>
                                                    {
                                                        box4Data1.map((item, key) => {
                                                            return (
                                                                <Grid key={key} container direction="row">
                                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                                        <Typography
                                                                            fontSize="small"
                                                                            fontWeight="bold"
                                                                        >{item.col1}</Typography>
                                                                    </Grid>
                                                                    <Grid item xs={6} lg={6} className="p-3 pb-0">
                                                                        <Typography
                                                                            fontSize="small"
                                                                            color="#2568BB"
                                                                        >*********</Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            );
                                                        })
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Page11;