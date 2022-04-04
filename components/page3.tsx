import * as React from "react";
import {Grid,
    Typography,
    Card,
    CardContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    Box,
    Chip, Button} from "@mui/material";
import {BiInfoCircle} from "react-icons/bi";

const Page3 = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="center">
                <Grid item className="p-5">
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
                                    boxSizing: "border-box"
                                }
                            }
                        />
                    </Grid>
                    <Card>
                        <CardContent>
                            <Grid container className="p-4 p-xs-2" justifyContent="center">
                                <Grid item>
                                    <Typography>
                                        <BiInfoCircle fill="red"/>
                                        VIN correction, enables the user to change the wrongly reported VIN in the previously accepted returns.
                                    </Typography>
                                </Grid>
                                <Grid container className="p-2" justifyContent="center">
                                    <Typography>
                                        Select your reference number to correct the VIN field on accepted 2290 return
                                    </Typography>
                                </Grid>
                                <Grid
                                    container className="p-4 pt-3 pb-3" style={{width: "100%"}}
                                >
                                    <Grid item className="pt-3">
                                        <Typography>Reference Number</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                    </Grid>
                                    <Grid item >
                                        <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}}>
                                            <FormControl fullWidth>
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
                <Grid className="p-3 m-auto">
                    <Button
                        className="m-3" variant="contained" style={{backgroundColor: "#71C12D"}}
                    >Previous Step</Button>
                    <Button
                        className="m-3"
                        variant="contained" style={{backgroundColor: "#2568BB"}}
                    >Next Step</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Page3;