import React from "react";
import {NextPage} from "next";
import {Button, Grid, Typography} from "@mui/material";
import HomeFooter from "../components/Footer/HomeFooter";
import {CircleRounded} from "@mui/icons-material";
import WebLayout from "../components/WebLayout";

const Pay:NextPage = () => {
    const priceData = [
        {
            title: "Do It Yourself",
            list: [
                "Single Vehicle $6.99",
                "For 2 Vehicles $12.99",
                "For 3 Vehicles $18.99",
                "For 4 Vehicles $23.99",
                "For 5 Vehicles $28.99",
                "For 6 - 25 Vehicles $49.99",
                "For 26 - 100 Vehicles $99.99",
                "Unlimited Vehicles $135.99",
                "VIN Correction FREE if you filed your return with us. $9.99 if you filed elsewhere.",
                "Sch 6 (FORM 8849) Refund / Claims $10.99",
            ]
        },
        {
            isSecondary: true,
            title: "We Do It For You",
            list: [
                "Single Vehicle $56.99",
                "For 2 Vehicles $112.99",
                "For 3 Vehicles $168.99",
                "For 4 Vehicles $223.99",
                "For 5 Vehicles $278.99",
                "For 6 - 25 Vehicles $299.99 + $50 per truck",
                "For 26 - 100 Vehicles $99.99 + $50 per truck",
                "Unlimited Vehicles $135.99 + $50 per truck",
                "VIN Correction FREE if you filed your return with us. $9.99 if you filed elsewhere.",
                "Sch 6 (FORM 8849) Refund / Claims $10.99",
            ]
        }
    ];

    return <WebLayout
        component={
            <Grid container direction="column" wrap="nowrap">
                <img src="pricing-banner.png" className="w-100"/>
                <Grid
                    container
                    direction="column"
                    wrap="nowrap"
                    className="p-2 p-md-5 main-container pricing-banner-container"
                    style={
                        {
                            background: "url('/pricing-background.png') no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                        }
                    }
                >
                    <img src="pricing-tag.png" className="pricing-tag"/>
                    <Grid container alignItems="center" justifyContent="center">
                        {
                            priceData.map((data, i) =>  <Grid
                                key={i} item xs={12} sm={6} md={4}
                                className="p-2 pricing-container"
                            >
                                <Grid container direction="column" wrap="nowrap" style={{background: "#135882"}} className="shadow">
                                    <Typography
                                        variant="h4" component={Grid} container alignItems="center" justifyContent="center"
                                        className="p-2 font-weight-semi-bold text-white text-center"
                                        style={
                                            {
                                                height: 150,
                                                color: data?.isSecondary ? "#85bc3c !important" : "#fff"
                                            }
                                        }
                                    >
                                        {data.title}
                                    </Typography>
                                    <Grid container alignItems="center" className="p-2 p-md-4 bg-white">
                                        {
                                            data.list.map((list, index) => <Grid alignItems="center" container key={index} className="p-2">
                                                <Grid className="p-1">
                                                    <CircleRounded style={{fontSize: 8}}/>
                                                </Grid>
                                                <Typography variant="body2" className="p-1" component={Grid} item xs>
                                                    {list}
                                                </Typography>
                                            </Grid>)
                                        }
                                    </Grid>
                                    <Button
                                        fullWidth size="large" variant="contained" style={{background: "#85bc3c"}}
                                        className="rounded-0"
                                    >Get Now</Button>
                                </Grid>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
                <HomeFooter/>
            </Grid>
        }
    />;
};

export default Pay;