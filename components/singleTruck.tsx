import * as React from "react";
import {Box,
    Button,
    Card,
    CardContent,
    Chip,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    Select,
    Typography} from "@mui/material";
import {BsThreeDots} from "react-icons/bs";
import {AiFillInfoCircle} from "react-icons/ai";

const Truck = () => {
    return(
        <>
            <Grid container direction="column">
                <Grid item className="m-auto">
                    <img src="/truck-icon.png" style={{width: 50}}/>
                </Grid>
                <Grid item className="m-auto">
                    <Chip
                        label="SINGLE TRUCK" style={
                            {
                                position: "relative",
                                margin: "auto",
                                background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                borderRadius: 0,
                                color: "white",
                                boxSizing: "border-box",
                                fontWeight: "bold",
                                fontSize: 15
                            }
                        }
                    />
                </Grid>
                <Grid item className="m-auto">
                    <BsThreeDots fill="#336FBF"/>
                </Grid>
            </Grid>
            <Grid>
                <Grid container direction="column" className="pb-3">
                    <Card>
                        <CardContent>
                            <Grid item wrap="nowrap">
                                <Typography color="#008000" fontWeight="bold" style={{display: "inline-block"}}>
                                *
                                    <Typography color="#336FBF" fontWeight="bold" fontSize="large" style={{display: "inline-block"}}>
                                    marked fields are mandatory
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid container direction="row" className="p-2 p-md-5">
                                <Grid item xs>
                                    <Grid container direction="row" wrap="nowrap">
                                        <Grid item className="pe-md-2">
                                            <label htmlFor="html">
                                                <Typography color="#008000" fontWeight="bold" style={{display: "inline-block"}}>
                                                *
                                                </Typography>
                                            Select Business
                                            </label>
                                        </Grid>
                                        <Grid item>
                                            <input style={{border: "1.5px solid #D3D3D3"}} type="text"/><br/>
                                            <Typography noWrap>
                                            Address: xxxxxxxxxxxxxxxxxxxx<br/>
                                            City: xxxxxxxxxxxxxxxxxx<br/>
                                            Country: xxxxxxxxxxxxxxxxxxxx<br/>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography noWrap>
                                    Want to add another business to your list?
                                    </Typography>
                                    <Grid container justifyContent="center" className="pt-3">
                                        <Button
                                            style={
                                                {
                                                    background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                                    color: "white",
                                                    boxSizing: "border-box",
                                                    fontSize: 15
                                                }
                                            }
                                        >ADD NEW BUSINESS</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center" className="pb-2">
                    <BsThreeDots fill="#336FBF"/>
                </Grid>
                <Grid
                    container
                    style={
                        {
                            borderTop: "2px solid #77C32B",
                            borderBottom: "2px solid #77C32B"
                        }
                    }
                    className="p-2"
                    direction="column"
                >
                    <Grid container direction="row">
                        <Grid container className="p-2" xs>
                            <Grid item className="p-2">
                                <Typography color="#008000" fontWeight="bold" style={{display: "inline-block"}}>
                                    *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                        Tax Period
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item style={{paddingLeft: 100}}>
                                <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
                        <Grid container className="p-2" xs wrap="nowrap">
                            <Grid item className="p-2" wrap="nowrap">
                                <Typography color="#008000" noWrap fontWeight="bold" style={{display: "inline-block"}}>
                                *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                    First Used Month
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item style={{paddingLeft: 100}}>
                                <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
                    <Grid container className="p-2" xs wrap="nowrap">
                        <Grid item className="p-2" wrap="nowrap">
                            <Typography color="#008000" noWrap fontWeight="bold" style={{display: "inline-block"}}>
                                *
                                <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                    Final Return <AiFillInfoCircle fill="#3372BC"/>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <RadioGroup
                                style={
                                    {
                                        display: "inline-block",
                                        paddingLeft: 50
                                    }
                                }
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue="no"
                            >
                                <FormControlLabel
                                    value="yes" control={<Radio />}
                                    label={
                                        <Typography>
                                            Yes
                                        </Typography>
                                    }
                                />
                                <FormControlLabel
                                    value="no" control={<Radio />}
                                    label={
                                        <Typography>
                                            No
                                        </Typography>
                                    }
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" className="p-2">
                    <BsThreeDots fill="#336FBF"/>
                </Grid>
                <Grid
                    container
                    style={
                        {
                            borderTop: "2px solid #77C32B",
                            borderBottom: "2px solid #77C32B"
                        }
                    }
                    className="p-2"
                    direction="column"
                >
                    <Grid container className="p-2" xs wrap="nowrap">
                        <Grid item className="p-2" wrap="nowrap">
                            <Typography color="#008000" noWrap fontWeight="bold" style={{display: "inline-block"}}>
                                *
                                <Typography fontWeight="bold" color="black" style={{display: "inline-block"}}>
                                    Vehicle Type
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <RadioGroup
                                style={
                                    {
                                        display: "inline-block",
                                        paddingLeft: 50
                                    }
                                }
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue="taxable"
                            >
                                <FormControlLabel
                                    value="taxable" control={<Radio />}
                                    label={
                                        <Typography>
                                            Taxable Vehicle
                                        </Typography>
                                    }
                                />
                                <FormControlLabel
                                    value="suspended" control={<Radio />}
                                    label={
                                        <Typography>
                                            Suspended Vehicle
                                        </Typography>
                                    }
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid container className="p-2" xs>
                            <Grid item className="p-2">
                                <Typography color="#008000" fontWeight="bold" style={{display: "inline-block"}}>
                                    *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                        Vin <AiFillInfoCircle fill="#3372BC"/>
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item style={{paddingLeft: 100}}>
                                <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
                        <Grid container className="p-2" xs>
                            <Grid item className="p-2">
                                <Typography color="#008000" fontWeight="bold" style={{display: "inline-block"}}>
                                    *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                        Gross Weight <AiFillInfoCircle fill="#3372BC"/>
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item style={{paddingLeft: 100}}>
                                <Box sx={{minWidth: 120}} style={{backgroundColor: "white"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
                    <Grid container direction="row">
                        <Grid container className="p-2" xs>
                            <Grid item className="p-2" wrap="nowrap">
                                <Typography color="#008000" noWrap fontWeight="bold" style={{display: "inline-block"}}>
                                    *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                        Logging <AiFillInfoCircle fill="#3372BC"/>
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup
                                    style={
                                        {
                                            display: "inline-block",
                                            paddingLeft: 50
                                        }
                                    }
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="no"
                                >
                                    <FormControlLabel
                                        value="yes" control={<Radio />}
                                        label={
                                            <Typography>
                                                Yes
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        value="no" control={<Radio />}
                                        label={
                                            <Typography>
                                                No
                                            </Typography>
                                        }
                                    />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid container className="p-2" xs wrap="nowrap">
                            <Grid item className="p-2" wrap="nowrap">
                                <Typography color="#008000" noWrap fontWeight="bold" style={{display: "inline-block"}}>
                                    *
                                    <Typography color="black" fontWeight="bold" style={{display: "inline-block"}}>
                                        Tax Amount (&#x24;)
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <input style={{border: "1.5px solid #D3D3D3"}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid className="p-3 m-auto">
                        <Button
                            className="m-3" variant="contained" style={{backgroundColor: "#A9A9A9"}}
                        >Previous Step</Button>
                        <Button
                            className="m-3"
                            variant="contained" style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}
                        >IRS Payment</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Truck;