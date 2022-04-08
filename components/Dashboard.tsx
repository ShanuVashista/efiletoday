import * as React from "react";
import {Card, CardContent, Chip, Grid, Typography} from "@mui/material";
import card1 from "../public/register.png";
import card2 from "../public/details.png";
import card4 from "../public/tax.png";
import Image from "next/image";
import {FaChevronCircleDown} from "react-icons/fa";
import img1 from "../public/image1.png";
import img2 from "../public/image2.png";
import img3 from "../public/image3.png";

const Dashboard = () => {
    const chipData = [{data: <Typography>SINGLE TRUCK</Typography>},
        {data: <Typography>MULTIPLE TRUCK</Typography>},
        {data: <Typography>VIEW OR COPY<br/> PREVIOUS FILING</Typography>}];

    return(
        <>
            <Grid container justifyContent="center" direction="column" className="p-2 p-md-5">
                <Grid container direction="column" className="p-2 pb-0 m-auto" justifyContent="center">
                    <Grid item className="m-auto">
                        <Card style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}>
                            <CardContent>
                                <Typography noWrap color="white" fontSize="larger" fontWeight="bold">TELL US WHAT YOU WANT TO DO?</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container className="p-3 pt-0 flex-md-wrap flex-lg-nowrap" direction="row" justifyContent="center">
                        <Grid className="p-1">
                            <Card>
                                <Grid className="p-2" wrap="nowrap" justifyContent="center" container >
                                    <Grid item >
                                        <Image src={card1} height={50} width={50}/>
                                    </Grid>
                                    <Grid item className="p-3 pt-0 pb-0" >
                                        <Typography noWrap color="#0072BA">START YOUR <br/>E-FILE 2290</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        left: "50%",
                                        bottom: 12,
                                        fill: "url(#blue-gradient)"
                                    }
                                }
                            />
                        </Grid>
                        <Grid item className="p-1">
                            <Card>
                                <Grid className="p-2" wrap="nowrap" justifyContent="center" container>
                                    <Grid item>
                                        <Image src={card2} height={50} width={50}/>
                                    </Grid>
                                    <Grid item className="p-3 pt-0 pb-0">
                                        <Typography noWrap color="#0072BA">MAKE AN AMENDMENT <br/>TO AN EXISTING FILE</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        left: "50%",
                                        bottom: 12,
                                        fill: "url(#blue-gradient)"
                                    }
                                }
                            />
                        </Grid>
                        <Grid item className="p-1">
                            <Card>
                                <Grid className="p-2" wrap="nowrap" justifyContent="center" container>
                                    <Grid item>
                                        <Image src={card2} height={50} width={50}/>
                                    </Grid>
                                    <Grid item className="p-3 pt-0 pb-0">
                                        <Typography noWrap color="#0072BA">VIEW OR COPY YOUR <br/>PREVIOUS FILING</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        left: "50%",
                                        bottom: 12,
                                        fill: "url(#blue-gradient)"
                                    }
                                }
                            />
                        </Grid>
                        <Grid item className="p-1">
                            <Card>
                                <Grid className="p-2" wrap="nowrap" justifyContent="center" container>
                                    <Grid item>
                                        <Image src={card4} height={50} width={50}/>
                                    </Grid>
                                    <Grid item className="p-3 pt-0 pb-0">
                                        <Typography noWrap color="#0072BA">START YOUR <br/>E-FILE 8849</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        left: "50%",
                                        bottom: 12,
                                        fill: "url(#blue-gradient)"
                                    }
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="p-3 pt-0 flex-md-wrap flex-lg-nowrap" direction="row" justifyContent="center">
                        <Grid>
                            <Grid className="p-1">
                                <Image src={img1} width={300} height={300}/>
                            </Grid>
                            <Chip
                                label={chipData[0].data} style={
                                    {
                                        position: "relative",
                                        left: "26%",
                                        bottom: 25,
                                        background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                        borderRadius: 0,
                                        color: "white",
                                        boxSizing: "border-box"
                                    }
                                }
                            />
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        bottom: 40,
                                        fill: "#85BC3C",
                                        transform: "rotate(180deg)"
                                    }
                                }
                            />
                        </Grid>
                        <Grid>
                            <Grid className="p-1">
                                <Image src={img2} width={300} height={300}/>
                            </Grid>
                            <Chip
                                label={chipData[1].data} style={
                                    {
                                        position: "relative",
                                        left: "26%",
                                        bottom: 25,
                                        background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                        borderRadius: 0,
                                        color: "white",
                                        boxSizing: "border-box"
                                    }
                                }
                            />
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        bottom: 40,
                                        fill: "#85BC3C",
                                        transform: "rotate(180deg)"
                                    }
                                }
                            />
                        </Grid>
                        <Grid>
                            <Grid className="p-1">
                                <Image src={img3} width={300} height={300}/>
                            </Grid>
                            <Chip
                                label={chipData[2].data}
                                style={
                                    {
                                        position: "relative",
                                        left: "26%",
                                        bottom: 30,
                                        background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                        borderRadius: 0,
                                        color: "white",
                                        boxSizing: "border-box",
                                        height: "fit-content"
                                    }
                                }
                            />
                            <FaChevronCircleDown
                                fill="red"
                                style={
                                    {
                                        position: "relative",
                                        bottom: 53,
                                        fill: "#85BC3C",
                                        transform: "rotate(180deg)"
                                    }
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#0072BA" offset="0%" />
                    <stop stopColor="#99c928" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
};

export default Dashboard;