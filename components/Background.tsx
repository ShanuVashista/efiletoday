import {Grid, Button, Card, CardContent} from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {IoSend} from "react-icons/io5";

const Background = ({component}: any) => {
    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className="banner-container main-container"
                style={
                    {
                        background: "url('/Group 3.png') no-repeat",
                        backgroundSize: "100%",
                        paddingTop: "110px !important",
                    }
                }
            >
                <Grid container justifyContent="center" className="m-5 pb-0 w-auto" style={{boxSizing: "border-box"}}>
                    {component}
                </Grid>
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

export default Background;
