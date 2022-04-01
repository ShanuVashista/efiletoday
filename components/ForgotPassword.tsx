import * as React from "react";
import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import Link from "next/link";
import {Box} from "@mui/system";

const ForgotPassword = () => {
    return (
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center">
                    <Typography color="white" fontWeight="normal" fontSize="xx-large">
                        Forgot Password
                    </Typography>
                </Grid>
                <Grid container>
                    <Box minWidth={500} style={{backgroundColor: "white"}} className="p-3 pb-2">
                        <Grid item>
                            <Typography>Enter Your Email Address</Typography>
                            <TextField
                                fullWidth
                                type="email"
                                required
                                id="outlined-required"
                                label="Enter Email ID"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained" style={{backgroundColor: "#99c928"}}
                            >Reset Password</Button>
                            <Button
                                className="m-3"
                                variant="contained" style={{backgroundColor: "#0072BA"}}
                            >Cancel</Button>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container justifyContent="center" className="mt-3">
                    <Typography color="white" fontSize="small">Copyright &#169; 2022</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ForgotPassword;