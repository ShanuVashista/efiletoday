import * as React from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";

const ResetPassword = () => {
    return (
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center">
                    <Typography color="white" fontWeight="normal" fontSize="xx-large">
                        Reset Password
                    </Typography>
                </Grid>
                <Grid container>
                    <Box minWidth={500} style={{backgroundColor: "white"}} className="p-3 pb-2">
                        <Grid item>
                            <Typography>New Password</Typography>
                            <TextField
                                fullWidth
                                type="email"
                                required
                                id="outlined-required"
                                label="Enter New Password"
                            />
                        </Grid>
                        <Grid item className="mt-3">
                            <Typography>Confirm New Password</Typography>
                            <TextField
                                fullWidth
                                type="email"
                                required
                                id="outlined-required"
                                label="Enter Confirm New Password"
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

export default ResetPassword;