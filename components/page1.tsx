import * as React from "react";
import {Card, CardContent, Grid, Typography, Box, Button} from "@mui/material";
import {BsQuestionCircleFill, BsFillPersonFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";

const Page1 = () => {
    const boxData = [
        {
            data: "July",
            style: {
                backgroundColor: "#99C928",
                borderRadius: 5
            }
        },
        {
            data: "Aug",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Sep",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Oct",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Nov",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Dec",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Jan",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Feb",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Mar",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Apr",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "May",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
        {
            data: "Jun",
            style: {
                backgroundColor: "#336FBF",
                borderRadius: 5
            }
        },
    ];

    return (
        <>
            <Grid direction="column" container className="mt-5 mb-5">
                <Box
                    className="p-2"
                    style={
                        {
                            background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                            width: "fit-content",
                            position: "relative",
                            margin: "auto",
                            top: 20
                        }
                    }
                >
                    <Typography color="white" noWrap>
                        DASHBOARD | FILING LIST | BUSINESS LIST |
                        <BsFillPersonFill fill="white" />
                        <BiMenu fill="white" />
                    </Typography>
                </Box>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container justifyContent="center">
                                <Grid item className="m-3">
                                    <Typography fontSize="small">
                                    Choose the ending month of your tax year: <BsQuestionCircleFill fill="#336FBF"/> In most cases, the tax year end month is December
                                    unless the IRS has given a special permission.
                                    </Typography>
                                </Grid>
                                <Grid container className="m-5 mt-0" justifyContent="center">
                                    {
                                        boxData.map((item, key) => {
                                            return (
                                                <Grid item key={key} className="p-2">
                                                    <Box
                                                        className="p-2"
                                                        style={item.style}
                                                    >
                                                        <Typography color="white">{item.data}</Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center">
                    <Button
                        className="m-3" variant="contained" style={{backgroundColor: "#85Bc3c"}}
                    >
                        Previous Step
                    </Button>
                    <Button
                        className="m-3"
                        variant="contained" style={{backgroundColor: "#336FBF"}}
                    >
                        Next Step
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Page1;