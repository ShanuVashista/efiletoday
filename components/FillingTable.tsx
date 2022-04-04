import * as React from "react";
import {Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

const FillingTable = () => {
    interface Column {
        id: "reference" | "period" | "filing" | "business" | "status" | "action";
        label: string;
        minWidth?: number;
        align?: "right";
    }

    const columns: readonly Column[] = [
        { 
            id: "reference",
            label: "Reference",
            minWidth: 170
        },
        {
            id: "period",
            label: "Period",
            minWidth: 100
        },
        {
            id: "filing",
            label: "Filing Type",
            minWidth: 170,
            align: "right",
        },
        {
            id: "business",
            label: "Business",
            minWidth: 170,
            align: "right",
        },
        {
            id: "status",
            label: "Status",
            minWidth: 170,
            align: "right",
        },
        {
            id: "action",
            label: "Action",
            minWidth: 100
        }
    ];

    interface Data {
        reference: string;
        period: string;
        filing: string;
        business: string;
        status: string;
        action: string;
    }

    function createData (
        reference: string,
        period: string,
        filing: string,
        business: string,
        status: string,
        action: string,
    ): Data{
        return {
            reference,
            period,
            filing,
            business,
            status,
            action,
        };
    }

    const rows = [
        createData("View/Edit", "2021 Jul", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Aug", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
        createData("View/Edit", "2021 Sep", "Normal", "Beyond Financial", "Incomplete", "Action"),
    ];
    
    return(
        <>
            <Chip
                label="TAX PERIOD" style={
                    {
                        position: "relative",
                        margin: "auto",
                        top: 35,
                        background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                        borderRadius: 0,
                        color: "white",
                        boxSizing: "border-box"
                    }
                }
            />
            <Grid
                container className="p-5 mt-0 pt-0 m-5" justifyContent="center"
            >
                <Card className="m-3 p-2 pb-lg-4">
                    <CardContent style={{textAlign: "center"}}>
                        <Typography color="#1434A4" fontWeight="bold">Want to start an efile? Choose an option</Typography>
                    </CardContent>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}>
                                <Typography color="white">SINGLE TRUCK E-FILE</Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}>
                                <Typography color="white">MULTIPLE TRUCK E-FILE</Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}
                            >
                                <Typography color="white">E-FILE 8849</Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}
                            >
                                <Typography color="white">START AMENDMENT</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
                <Card className="m-3">
                    <Grid container className="p-3" md sm xs>
                        <Grid
                            item xs={4} style={{backgroundColor: "white"}}
                        >
                            <Chip
                                label="Page: 1 of 1" style={
                                    {
                                        position: "relative",
                                        margin: "auto",
                                        left: 75,
                                        backgroundColor: "#85Bc3c",
                                        borderRadius: 0,
                                        color: "white",
                                        boxSizing: "border-box"
                                    }
                                }
                            />
                        </Grid>
                        <Grid
                            item
                            xs={4} style={{paddingLeft: 40}}
                        >
                            <input type="text"/>
                        </Grid>
                        <Grid
                            item style={
                                {
                                    position: "relative",
                                    left: 50,
                                }
                            }
                        >
                            <Button
                                variant="contained" style={{backgroundColor: "#85Bc3c"}}
                            >Search</Button>&nbsp;&nbsp;&nbsp;
                            <Button
                                variant="contained" style={{backgroundColor: "#336FBF"}}
                            >Reset</Button>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Paper
                            sx={
                                {
                                    width: "100%",
                                    overflow: "hidden"
                                }
                            }
                        >
                            <TableContainer >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {
                                                columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{minWidth: column.minWidth}}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            rows.map((row:any) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {
                                                            columns.map((column:any) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell key={column.id} align={column.align}>
                                                                        {column?.format && typeof value === "number" ? column?.format(value) : value}
                                                                    </TableCell>
                                                                );
                                                            })
                                                        }
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Card>
            </Grid>
        </>
    );
};

export default FillingTable;