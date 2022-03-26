import {Grid, Button, Card, CardContent} from "@mui/material";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {IoSend} from "react-icons/io5";

const TaxPage1 = ({component}: any) => {
    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className="banner-container p-5 main-container"
                style={
                    {
                        background: "url('/Group 3.png') no-repeat",
                        backgroundSize: "100%",
                        paddingTop: "110px !important",
                    }
                }
            >
                <Grid container justifyContent="center" className="pb-5 mb-5" style={{boxSizing: "border-box"}}>
                    <HomeHeader/>
                </Grid>
                <Grid container justifyContent="center" className="p-5 pb-0 w-auto" style={{boxSizing: "border-box"}}>
                    {component}
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
                <br/>
                <Button
                    className="m-5" variant="contained" style={{backgroundColor: "#85Bc3c"}}
                >Previous Step</Button>
                <Button
                    variant="contained" style={{backgroundColor: "#336FBF"}}
                >Next Step</Button>
            </Grid>
            <Grid container wrap="nowrap" direction="column">
                <Grid item xs className="pb-3">
                    <Card
                        style={{float: "right"}}
                    >
                        <CardContent>
                            <Typography>Need help?</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card
                        style={{float: "right"}}
                    >
                        <CardContent>
                            <Typography>
                                Write a message
                                <Button><IoSend fontSize="large" fill="grey"/></Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box
                className="mt-5"
                sx={
                    {
                        bgcolor: "#85Bc3c",
                        color: "#FFFFFF"
                    }
                }
            >
                <Container sx={{py: 3}}>
                    <Grid container spacing={5} color={"white"}>
                        <Grid item xs={12} md={5}>
                            <Stack spacing={2}>
                                <Typography>
                                    Privacy Police
                                    |
                                    News
                                    |
                                    FAQ
                                    |
                                    Support

                                </Typography>

                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography>
                                Home
                                |
                                About Us
                                |
                                Contact Us
                                |
                                Privacy Policy
                                |
                                Cookie Policy
                                |
                                Term & Condition

                            </Typography>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Grid>
    );
};

export default TaxPage1;
