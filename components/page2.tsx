import * as React from "react";
import {Card, CardContent, Grid, Typography, Box, Button, InputLabel, Select, FormControl} from "@mui/material";
import {BsFillPersonFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";

const Page2 = () => {
    return(
        <>
            <Grid direction="column" container>
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
                    <Typography color="white">
                        DASHBOARD | FILING LIST | BUSINESS LIST |
                        <BsFillPersonFill fill="white" />
                        <BiMenu fill="white" />
                    </Typography>
                </Box>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item className="m-3">
                                    <Typography color="#336FBF" fontWeight="bold">
                                        Form 8849 Schedule 6
                                    </Typography>
                                    <Typography>
                                        Claim credits for Stolen/Destroyed/Sold/Overpayment Vehicles/Tax Overpayment Credits.
                                    </Typography>
                                </Grid>
                                <Grid item className="m-3 mt-0">
                                    <Typography fontWeight="bold">
                                        Choose from below to e-file the return:
                                    </Typography>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight="bold" className="d-inline-block">
                                            Loss Event:
                                        </Typography>
                                        <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}} className="d-inline-block m-5 mt-0 mb-0">
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">--Select Type--</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Select"
                                                >
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
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

export default Page2;