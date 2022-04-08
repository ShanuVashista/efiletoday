import {Grid, Typography, RadioGroup, FormControlLabel, Radio, Chip, Button, ButtonBase} from "@mui/material";
import React from "react";
import {BiInfoCircle} from "react-icons/bi";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const TaxPeriod = () => {
    const paperData = [
        {data: "July 2021"},
        {data: "Aug 2021"},
        {data: "Sept 2021"},
        {data: "Oct 2021"},
        {data: "Nov 2021"},
        {data: "Dec 2021"},
        {data: "Jan 2022"},
        {data: "Feb 2022"},
        {data: "Mar 2022"},
        {data: "Apr 2022"},
        {data: "May 2022"},
        {data: "Jun 2022"},
    ];

    return (
        <>
            <Grid
                className="p-2 p-md-5 container-style"
            >
                <Chip
                    label="TAX PERIOD" style={
                        {
                            position: "relative",
                            margin: "auto ",
                            top: 15,
                            background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                            borderRadius: 0,
                            color: "white",
                            boxSizing: "border-box",
                            left: "50%",
                            transform: "translate(-50%,0 )",
                            zIndex: "999999999999",
                        }
                    }
                />
                <Grid
                    container direction="column" wrap="nowrap"
                    className="start-card-container card shadow rounded-2 opacity-50 p-3"
                >
                    <Typography color="#1434A4" fontWeight="bold" style={{display: "inline-block"}}>
                        Select Tax Period
                        <Typography color="#008000" fontWeight="bold" fontSize="large" style={{display: "inline-block"}}>
                            *
                        </Typography>
                    </Typography>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value="2021-2022" control={<Radio defaultChecked/>}
                            label={
                                <Typography fontWeight="bold">
                                    2021-2022
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="2020-2021" control={<Radio />}
                            label={
                                <Typography fontWeight="bold">
                                    2020-2021
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="2019-2020" control={<Radio />}
                            label={
                                <Typography fontWeight="bold">
                                    2019-2020
                                </Typography>
                            }
                        />
                    </RadioGroup>
                    <Typography>
                        Choose the month and year when you first used your truck &nbsp;
                        <BiInfoCircle color="blue" />
                    </Typography>
                    <br/>
                    <Grid container wrap="nowrap">
                        <Grid item xs={12} lg={2}>
                            <Typography style={{display: "inline-block"}}>
                                First used month
                                <Typography color="#008000" fontWeight="bold" fontSize="large" style={{display: "inline-block"}}>
                                    *
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={10}>
                            <Box
                                sx={
                                    {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        "& > :not(style)": {
                                            m: 1,
                                            width: 50,
                                            height: 60,
                                        },
                                    }
                                }
                            >
                                {
                                    paperData.map((item, i) => {
                                        return (
                                            <Grid component={ButtonBase} key={i} className="p-2 dabutton" style={{borderRadius: 5}}>
                                                <Typography fontSize="small" color="white">
                                                    {item.data}
                                                </Typography>
                                            </Grid>
                                        );
                                    })
                                }
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography style={{display: "inline-block"}}>
                        Final Return
                        <Typography color="#008000" fontWeight="bold" fontSize="large" style={{display: "inline-block"}}>
                            *
                        </Typography>
                        <RadioGroup
                            style={
                                {
                                    display: "inline-block",
                                    paddingLeft: 50
                                }
                            }
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="yes" control={<Radio />}
                                label={
                                    <Typography fontWeight="bold">
                                        Yes
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="no" control={<Radio />}
                                label={
                                    <Typography fontWeight="bold">
                                        No
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                        <BiInfoCircle color="blue" />
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={
                    {
                        bgcolor: "#85Bc3c",
                        borderRadius: 1
                    }
                }
            >
                <Container sx={{py: 1}}>
                    <Typography color="white" fontSize="small">
                        You are filling form 2290 for the Tax year 2021-22.Ensure that you select the correct at the top, in case you want to file for some other TAX YEAR.
                    </Typography>
                </Container>
            </Box>
        </>

    );
};

export default TaxPeriod;
