import {Grid, Typography, TextField, Button, Box} from "@mui/material";
import * as React from "react";
import Link from "next/link";

const Login = () => {
    return(
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center">
                    <Typography color="white" fontWeight="normal" fontSize="xx-large">
                    Login Here
                    </Typography>
                </Grid>
                <Grid container>
                    <Box minWidth={500} style={{backgroundColor: "white"}} className="p-3 pb-2">
                        <Grid item className="mb-3">
                            <Typography>Email ID</Typography>
                            <TextField
                                type="email"
                                required
                                id="outlined-required"
                                label="Email ID"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Typography>Password</Typography>
                            <TextField
                                type="password"
                                required
                                id="outlined-required"
                                label="Password"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained" style={{backgroundColor: "#99c928"}}
                            >Login</Button>
                            <Link href="/signup">
                                <Button
                                    className="m-3"
                                    variant="contained" style={{backgroundColor: "#0072BA"}}
                                >Sign Up</Button>
                            </Link>
                        </Grid>
                        <Grid item className="mb-2">
                            <Typography>Forgot your password? <Link href="/forgotPassword"><a>Click here to reset it</a></Link></Typography>
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

export default Login;