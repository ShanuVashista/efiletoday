import * as React from "react";
import {Box, Button, Card, CardContent, Checkbox, Grid, Typography} from "@mui/material";

const Page13 = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} direction="column" container className="mt-5 mb-5">
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
                        VEHICLE CATEGORY
                    </Typography>
                </Box>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" wrap="nowrap">
                                <Grid item className="p-2">
                                    <Typography fontWeight="bold" color="#2568BB">Select Vehicle Category</Typography>
                                </Grid>
                                <Grid item className="p-2">
                                    <Typography fontSize="small">
                                        Choose the categories of vehicles you want to e-file this return for:
                                    </Typography>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item xs={12} lg={6} className="p-3 pb-0">
                                        <Typography fontSize="small" fontWeight="bold">
                                            <Checkbox/> Taxable Vehicles
                                        </Typography>
                                        <Typography fontSize="small">
                                            Highway motor vehicles that have a taxable gross weight of 55,000 pounds
                                            or more, and runs more than 5,000 miles in a year (7,500 miles in case of
                                            agricultural) are taxable.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6} className="p-3 pb-0">
                                        <Typography noWrap fontSize="small" fontWeight="bold">
                                            <Checkbox/> Suspended Vehicles (Tax Exempted)
                                        </Typography>
                                        <Typography fontSize="small">
                                            If a highway motor vehicle does not exceed mileage 5,000 miles in a year
                                            (7,500 miles for agricultural vehicles) is except from tax.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item xs={12} lg={6} className="p-3 pb-0">
                                        <Typography fontSize="small" fontWeight="bold">
                                            <Checkbox/> Credit Vehicles
                                        </Typography>
                                        <Typography fontSize="small">
                                            Claim a credit for tax paid on vehicles that were destroyed, stolen, sold,
                                            or used upto 5,000 miles (7,500 miles or less for agricultural vehicles).
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6} className="p-3 pb-0">
                                        <Typography noWrap fontSize="small" fontWeight="bold">
                                            <Checkbox/> Prior Year Sold Suspended Vehicles
                                        </Typography>
                                        <Typography fontSize="small">
                                            If you sold your vehicle while under suspension, you have to provide few
                                            information to the IRS.
                                        </Typography>
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

export default Page13;