import * as React from "react";
import {Autocomplete, Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import MenuBox from "./MenuBox";

const Page2 = () => {
    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];

    return(
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} direction="column" container className="mt-5 mb-5">
                <MenuBox/>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item className="m-3">
                                    <Typography color="#336FBF" fontWeight="bold">
                                        Form 8849 Schedule 6
                                    </Typography>
                                    <Typography fontSize="small">
                                        Claim credits for Stolen/Destroyed/Sold/Overpayment Vehicles/Tax Overpayment Credits.
                                    </Typography>
                                </Grid>
                                <Grid item className="m-3 mt-0" xs={12}>
                                    <Typography fontWeight="bold">
                                        Choose from below to e-file the return:
                                    </Typography>
                                </Grid>
                                <Grid container xs={12} lg={6} className="m-3 mt-0">
                                    <Grid item xs={6}>
                                        <Typography fontWeight="bold" className="d-inline-block">
                                            Loss Event:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Autocomplete
                                            disablePortal
                                            renderInput={(params) => <TextField {...params} label="Loss Event" />}
                                            options={selectOptions}
                                            size="small"
                                        />
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
        </Grid>
    );
};

export default Page2;