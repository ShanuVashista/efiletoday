import * as React from "react";
import {Box, Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Typography} from "@mui/material";

const Page5 = () => {
    const borderStyle = {
        border: "2px solid #77C32B",
        borderTop: "none",
        borderRadius: 5,
        textAlign: "center"
    };

    const list1 = [
        {data: "Correct the VIN on any previously filed Form 2290"},
        {data: "Get the corrected schedule 1 in minutes"},
        {data: "E-file the VIN Correction with the IRS"}
    ];

    const list2 = [
        {data: "Calculate and pay the excess tax for the remainder of year"},
        {data: "Report the Taxable Gross Weight Increase to IRS"},
        {data: "E-file this amendment and get Schedule 1 in Minutes"}
    ];

    const list3 = [
        {data: "Report the suspended vehicle exceeds the Mileage limit"},
        {data: "E-file this amendment and get Schedule 1 in Minutes"},
        {data: "Calculate and pay the excess tax for the remainder of year"}
    ];

    return (
        <>
            <Grid container direction="column">
                <Chip
                    label="2290 AMENDMENT" style={
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
                <Card>
                    <CardContent>
                        <Grid container justifyContent="center" direction="column" className="p-3">
                            <Grid container justifyContent="center">
                                <Typography fontSize="small">
                                    (Applicable for WIN correction, Taxable Gross Weight Increase and Mileage Exceeded)
                                </Typography>
                                <Grid container direction="row" className="pt-3">
                                    <Grid xs container direction="column" className="p-3">
                                        <Box style={borderStyle}>
                                            <Typography fontWeight="bold" fontSize="small" color="#2568BB">Form 2290 Vin Correction</Typography>
                                        </Box>
                                        <Grid container className="p-2" justifyContent="center">
                                            <ul>
                                                {
                                                    list1.map((item, key) => {
                                                        return (
                                                            <li key={key}>
                                                                <Typography fontSize="small">
                                                                    {item.data}
                                                                </Typography>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                            <Button
                                                variant="contained" style={{backgroundColor: "#2568BB"}}
                                            >Start</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid xs container direction="column" className="p-3">
                                        <Box style={borderStyle}>
                                            <Typography fontWeight="bold" fontSize="small" color="#2568BB">Taxable Gross Weight Increased</Typography>
                                        </Box>
                                        <Grid container className="p-2" justifyContent="center">
                                            <ul>
                                                {
                                                    list2.map((item, key) => {
                                                        return (
                                                            <li key={key}>
                                                                <Typography fontSize="small">
                                                                    {item.data}
                                                                </Typography>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                            <Button
                                                variant="contained" style={{backgroundColor: "#2568BB"}}
                                            >Start</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid xs container direction="column" className="p-3">
                                        <Box style={borderStyle}>
                                            <Typography fontWeight="bold" fontSize="small" color="#2568BB">Mileage Exceeded</Typography>
                                        </Box>
                                        <Grid container className="p-2" justifyContent="center">
                                            <ul>
                                                {
                                                    list3.map((item, key) => {
                                                        return (
                                                            <li key={key}>
                                                                <Typography fontSize="small">
                                                                    {item.data}
                                                                </Typography>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                            <Button
                                                variant="contained" style={{backgroundColor: "#2568BB"}}
                                            >Start</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" style={{backgroundColor: "#71C12D"}}>
                                    Previous Step
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export  default Page5;