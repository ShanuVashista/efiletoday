import * as React from "react";
import {Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    Grid,
    Radio,
    TextareaAutosize,
    TextField,
    Typography} from "@mui/material";
import {AiFillInfoCircle, AiFillQuestionCircle} from "react-icons/ai";
import MenuBox from "./MenuBox";

const Page10 = () => {
    const containerStyle = {
        width: "100vw", 
        maxWidth: 1170
    };

    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];

    return (
        <>
            <Grid container direction="column" justifyContent="center">
                <Grid item className="mb-5">
                    <MenuBox/>
                </Grid>
                <Grid item>
                    <Card style={containerStyle}>
                        <CardContent>
                            <Grid container justifyContent="center" className="p-2">
                                <Typography style={{textAlign: "center"}} color="#336FBF" fontWeight="bold" fontSize="large">
                                    Details of the Tax Refund
                                    <Typography color="black">
                                        Claim credits for Stolen/Destroyed/Sold/Overpayment Vehicles/Tax Overpayment credits
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid container direction="column" className="p-2">
                                <Box className="p-3">
                                    <Grid container direction="row" wrap="nowrap" style={{border: "1px solid #c8c8c8"}}>
                                        <Grid container xs={12} lg={6} className="p-2">
                                            <Typography color="#336FBF" fontWeight="bold" noWrap>TAX PAID</Typography>
                                        </Grid>
                                        <Grid container justifyContent="right" xs={12} lg={6} className="p-2">
                                            <Typography noWrap>Filing Details</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            VIN
                                            <Typography fontSize="small">Vehicle Identification Number</Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={6} className="p-2">
                                        <TextField id="outlined-basic" label="VIN" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Paid Amount (S):
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={6} className="p-2">
                                        <TextField id="outlined-basic" label="VIN" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                </Grid>
                                <Box className="p-3">
                                    <Grid container direction="row" wrap="nowrap" style={{border: "1px solid #c8c8c8"}}>
                                        <Grid container xs={12} lg={6} className="p-2">
                                            <Typography color="#336FBF" fontWeight="bold" noWrap>PAYMENT CORRECTION</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid container direction="column" style={{border: "2px solid #c8c8c8"}}>
                                    <Grid container direction="row" className="p-2">
                                        <Grid wrap="nowrap" justifyContent="center" container xs={12} lg={6} className="p-2" style={{borderRight: "2px solid #c8c8c8"}}>
                                            <FormControlLabel
                                                value="Refund Full Amount (Duplicate Payment)"
                                                control={<Radio />}
                                                label="Refund Full Amount (Duplicate Payment)"
                                            />
                                            <AiFillQuestionCircle fill="#336FBF" fontSize="x-large" className="m-auto"/>
                                        </Grid>
                                        <Grid wrap="nowrap" justifyContent="center" container xs={12} lg={6} className="p-2">
                                            <FormControlLabel
                                                value="Calculate the difference"
                                                control={<Radio />}
                                                label="Calculate the difference"
                                            />
                                            <AiFillQuestionCircle fill="#336FBF" fontSize="x-large" className="m-auto"/>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="column" className="p-2">
                                        <Grid container justifyContent="center" className="p-2" style={{borderTop: "2px solid #85BC3C"}}>
                                            <Typography>Enter the details below</Typography>
                                        </Grid>
                                        <Grid container direction="row" className="p-2">
                                            <Grid container xs={12} lg={4} className="text-style p-2">
                                                <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                                    <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                        *
                                                    </Typography>
                                                    Taxable Gross Weight
                                                </Typography>
                                            </Grid>
                                            <Grid container xs={12} lg={4} className="p-2">
                                                <Autocomplete
                                                    disablePortal
                                                    renderInput={(params) => <TextField {...params} label="Select" />}
                                                    options={selectOptions}
                                                    size="small"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid container xs={12} lg={4} className="p-2">
                                                <Checkbox />
                                                <Typography className="text-style p-2" fontWeight="bold">
                                                    Used for Logging?
                                                    <AiFillInfoCircle fontSize="x-large" fill="#336FBF"/>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="row" className="p-2">
                                            <Grid container xs={12} lg={4} className="text-style p-2">
                                                <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                                    <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                        *
                                                    </Typography>
                                                    Tax Year:
                                                </Typography>
                                            </Grid>
                                            <Grid container xs={12} lg={4} className="p-2">
                                                <Autocomplete
                                                    disablePortal
                                                    renderInput={(params) => <TextField {...params} label="Select" />}
                                                    options={selectOptions}
                                                    size="small"
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="row" className="p-2">
                                            <Grid container xs={12} lg={4} className="text-style p-2">
                                                <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                                    <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                        *
                                                    </Typography>
                                                    First Used Month:
                                                </Typography>
                                            </Grid>
                                            <Grid container xs={12} lg={4} className="p-2">
                                                <Autocomplete
                                                    disablePortal
                                                    renderInput={(params) => <TextField {...params} label="Select" />}
                                                    options={selectOptions}
                                                    size="small"
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="row" className="p-2">
                                            <Grid container xs={12} lg={4} className="text-style p-2">
                                                <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                                    Taxable Amount (S)
                                                </Typography>
                                            </Grid>
                                            <Grid container xs={12} lg={4} className="p-2">
                                                <TextField id="outlined-basic" label="Taxable Amount" variant="outlined" size="small" fullWidth />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box className="p-3">
                                    <Grid container direction="row" wrap="nowrap" style={{border: "1px solid #c8c8c8"}}>
                                        <Grid container xs={12} lg={6} className="p-2">
                                            <Typography color="#336FBF" fontWeight="bold" noWrap>CLAIM REFUND</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={4} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Overpayment of Tax ($):
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={4} className="p-2">
                                        <TextField id="outlined-basic" label="Taxable Amount" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={4} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Explanation to the IRS:
                                            <Typography fontSize="small">
                                                Provide the IRS additional information regarding your Stolen/Destroyed/Sold/ Overpayment
                                                Vehicles/Tax Overpayment Credits in order to process your refund
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={8} className="p-2">
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={3}
                                            style={{width: "100%"}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={4} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Attach file in support of claim
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="left" xs={12} lg={8} className="p-2">
                                        <TextField
                                            id="outlined-basic"
                                            label="Attachment proof for your sold vehicle"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <Typography color="#008000" fontSize="small">
                                            Upload file type: PDF | PNG | JPEG
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="right" direction="row">
                                    <Grid container xs={12} lg={8} className="p-2">
                                        <Typography fontSize="small">
                                            Upload the relevant document of proof in one of the below-mentioned formats,in order
                                            to avoid IRS rejections. For example: If your claim is Sold, submit the transaction
                                            paperwork as a proof.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={4} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Date of Overpayment Tax:
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="left" xs={12} lg={4} className="p-2">
                                        <TextField
                                            id="outlined-basic"
                                            label="-MM:DD:YYYY-"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container className="p-2">
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
        </>
    );
};

export default Page10;