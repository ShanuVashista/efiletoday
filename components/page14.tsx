import * as React from "react";
import {Autocomplete,
    Button,
    Card,
    CardContent,
    Chip,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography} from "@mui/material";
import {BiInfoCircle} from "react-icons/bi";
import {BsThreeDots} from "react-icons/bs";

const Page14 = () => {
    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];
    
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} container direction="column">
                <Chip
                    label="MILEAGE EXCEEDED VEHICLES" style={
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
                            <Grid item style={{borderBottom: "2px solid #77C32B"}}>
                                <Typography fontSize="small">
                                    <BiInfoCircle fill="red"/>
                                    Mileage Exceeded , a vehicle becomes taxable if it exceeds the mileage use limit of
                                    5,000 miles or more (7,500 miles or more for agriculture vehicle).
                                </Typography>
                                <Grid container direction="row" className="pt-3">
                                    <Grid xs={12} lg={6} container direction="row" className="p-3">
                                        <Grid item xs={12} lg={6}>
                                            <Typography fontWeight="bold">VIN</Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <TextField size="small" id="outlined-basic" label="VIN" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} lg={6} container direction="row" className="p-3">
                                        <Grid item xs={12} lg={6}>
                                            <Typography fontWeight="bold">New Weight Logging</Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <RadioGroup
                                                style={{display: "inline-block"}}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                defaultValue="no"
                                            >
                                                <FormControlLabel
                                                    value="yes" control={<Radio />}
                                                    label={
                                                        <Typography fontWeight="bold">
                                                            Yes
                                                        </Typography>
                                                    }
                                                />
                                                <FormControlLabel
                                                    value="no" control={<Radio />}
                                                    label={
                                                        <Typography fontWeight="bold">
                                                            No
                                                        </Typography>
                                                    }
                                                />
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="pt-3">
                                    <Grid xs={12} lg={6} container direction="row" className="p-3">
                                        <Grid item xs={12} lg={6}>
                                            <Typography fontWeight="bold">Old Weight (lbs)</Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <Autocomplete
                                                disablePortal
                                                renderInput={
                                                    (params) =>
                                                        <TextField {...params} label="55001 to 56000 Lbs(B)" />
                                                }
                                                options={selectOptions}
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="m-auto">
                                <BsThreeDots fill="#336FBF"/>
                            </Grid>
                            <Grid container justifyContent="right">
                                <Button
                                    variant="contained" style={
                                        {
                                            background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                            width: 230
                                        }
                                    }
                                >Save this Vehicle</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Page14;