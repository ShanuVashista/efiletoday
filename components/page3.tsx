import * as React from "react";
import {Autocomplete, Button, Card, CardContent, Chip, Grid, TextField, Typography} from "@mui/material";
import {BiInfoCircle} from "react-icons/bi";

const Page3 = () => {
    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} container direction="column" justifyContent="center">
                <Grid item className="p-2">
                    <Grid container justifyContent="center" style={{width: "100%"}}>
                        <Chip
                            label="VIN CORRECTION" style={
                                {
                                    position: "relative",
                                    margin: "auto",
                                    top: 15,
                                    background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                    borderRadius: 0,
                                    color: "white",
                                    boxSizing: "border-box",
                                    fontWeight: "bold"
                                }
                            }
                        />
                    </Grid>
                    <Card>
                        <CardContent>
                            <Grid container className="p-4 p-xs-2" justifyContent="center">
                                <Grid item>
                                    <Typography fontSize="small">
                                        <BiInfoCircle fill="red"/>
                                        VIN correction, enables the user to change the wrongly reported VIN in the previously accepted returns.
                                    </Typography>
                                </Grid>
                                <Grid container className="mt-3 mb-3" justifyContent="center">
                                    <Typography fontSize="small">
                                        Select your reference number to correct the VIN field on accepted 2290 return
                                    </Typography>
                                </Grid>
                                <Grid container className="p-3" justifyContent="center">
                                    <Grid item xs={12} lg={6}>
                                        <Typography fontSize="small">Reference Number</Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <Autocomplete
                                            disablePortal
                                            renderInput={(params) => <TextField {...params} label="Reference Number" />}
                                            options={selectOptions}
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center" wrap="nowrap">
                    <Button
                        className="m-3" variant="contained" style={{backgroundColor: "#71C12D"}}
                    >Previous Step</Button>
                    <Button
                        className="m-3"
                        variant="contained" style={{backgroundColor: "#2568BB"}}
                    >Next Step</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Page3;