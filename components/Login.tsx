import {CardContent, Grid, Typography, Card, TextField, Button} from "@mui/material";
import * as React from "react";
import Link from "next/link";

const Login = () => {
    return(
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center">
                    <Typography color="white" fontWeight="normal" fontSize="x-large">
                    Login Here
                    </Typography>
                </Grid>
                <Grid container>
                    <Card>
                        <CardContent>
                            <Grid item className="mb-3">
                                <Typography>Email ID</Typography>
                                <TextField
                                    type="email"
                                    required
                                    id="outlined-required"
                                    label="Email ID"
                                    style={{width: 350}}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Password</Typography>
                                <TextField
                                    type="password"
                                    required
                                    id="outlined-required"
                                    label="Password"
                                    style={{width: 350}}
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
                            <Grid item>
                                <Typography>Forgot your password? <Link href="/forgotPassword"><a>Click here to reset it</a></Link></Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center" className="mt-3">
                    <Typography color="white" fontSize="small">Copyright &#169; 2022</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;