import type {NextPage} from "next";
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import {Plus} from "react-feather";
import HomeFooter from "../components/Footer/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import Testimonial from "../components/Home/Testimonial";

const Home: NextPage = () => {
    const fileData = [
        {
            title: "Live assistance available",
            description: "Contact us today! Our experienced staff will be file your tax for you, ensuring accuracy and ease of submission.",
            link: ""
        },
        {
            title: "The e-filing process made quick and easy",
            description: "Get rid of the long process of filing paper forms insted get your stamped schedule 1 in minutes.",
            link: ""
        },
        {
            title: "We offer free VIn correction & retransmission services",
            description: "If your return was filed incorrectly or rejected, you can easily make corrections.",
            link: ""
        },
        {
            title: "Agents! Easy transfer of data",
            description: "No more calling the client's old agent to release their 2290 accounts. Transfer your account from one agent to another with ease",
            link: ""
        },
        {
            title: "IRS Authorized",
            description: "In order to ensure safe e-filing of form 2290, you must go with an IRS-authorized service provider like eform2290",
            link: ""
        },
    ];

    const startData = [
        {
            icon: <img src="/register.png" style={{width: 60}}/>,
            title: "Register",
            description: "Register with us"
        },
        {
            icon: <img src="/details.png" style={{width: 70}}/>,
            title: "Add Details",
            description: "Fill in all the details."
        },
        {
            icon: <img src="/tax.png" style={{width: 60}}/>,
            title: "Pay Tax & Get Scheduled 1",
            description: "Schedule 1 can be obtained once you have paid your taxes. Filing form 2290 has never been this easy."
        }
    ];

    const FaqData = [
        {
            question: "How much does File by Phone service cost?",
            answer: "When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. \n When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. "
        },
        {
            question: "What if the executive makes an error is the 2290 filing?",
            answer: "When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. \n When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. "
        },
        {
            question: "How will I receive my Schedule 1 if I file by phone?",
            answer: "When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. \n When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. "
        },
        {
            question: "Do I have to share my credit card details?",
            answer: "When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. \n When is form 2290 due? Form 2290 is an annual tax paid to get internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more. "
        }
    ];

    return (
        <Grid container direction="column" wrap="nowrap">
            
            <Grid
                container
                alignItems="center"
                className="banner-container p-5"
                style={
                    {
                        background: "url('/banner.png') no-repeat",
                        backgroundSize: "cover",
                        minHeight: 900
                    }
                }
            >
                <HomeHeader/>
                <Grid item container direction="column" wrap="nowrap" xs={12} sm={6} md={5} className="p-5">
                    <Typography variant="h2" className="font-weight-bold text-white banner-title p-2" style={{textShadow: "0 1px 2px black"}}>
                        <span>File</span> IRS Form <br/> 2290 <span>Online</span>
                    </Typography>
                    <Typography className="p-2" fontWeight="bold" fontSize="medium">
                        HVUT Form 2290 Heavy Highway Vehicle Use Tax is used for heavy vehicles that have a taxable gross weight of 55,000 pounds.
                    </Typography>
                    <Grid container>
                        <Grid className="p-2">
                            <Button
                                variant="contained"
                                size="large"
                                className="shadow-none"
                                style={
                                    {
                                        background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                                        textTransform: "unset"
                                    }
                                }
                            >
                                Pay Now
                            </Button>
                        </Grid>
                        <Grid className="p-2">
                            <Button
                                color="success"
                                variant="outlined"
                                size="large"
                                className="shadow-none"
                                style={
                                    {
                                        border: "1px solid #99c928",
                                        textTransform: "unset",
                                        background: "white",
                                        color: "#0072BA"
                                    }
                                }
                            >
                                Go To IRS
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={7} className="p-2">
                    <img src="/banner-truck.png" className="w-100"/>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                className="banner-container p-5"
                style={
                    {
                        background: "url('/file-bg.jpg') no-repeat",
                        backgroundSize: "cover",
                        minHeight: 600
                    }
                }
            >
                <Grid item container direction="column" wrap="nowrap" xs={12} sm={6} md={5} className="p-2">
                    <Typography variant="h3" className="font-weight-bold p-2">
                        <span style={{color: "#99c928"}}>File 2290</span><br/> For Your Trucks
                    </Typography>
                    <Typography className="p-2">
                        HVUT Form 2290 Heavy Highway Vehicle Use Tax is used for heavy vehicles that have a taxable gross weight of 55,000 pounds or more, is used to calculate and pay taxes for those vehicle. This form is also needed when used vehicles are acquired for the current tax period.
                    </Typography>
                    <Grid container wrap="nowrap">
                        <Grid className="p-2">
                            <img src="/irs.png" style={{width: 70}}/>
                        </Grid>
                        <Grid container alignItems="center" className="p-2">
                            <img src="/call.png" style={{width: 50}}/>
                            <Typography className="p-2">
                                Give us a Call <br/>
                                <span className="font-weight-bold">
                                    +1 (414) 690-6435
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="p-2">
                        <Button
                            variant="contained"
                            size="large"
                            className="shadow-none"
                            style={
                                {
                                    background: "linear-gradient(90deg, #0072BA , #99c928 60%)",
                                    textTransform: "unset"
                                }
                            }
                        >
                            Read More
                        </Button>
                    </Grid>
                    <Grid container>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <img src="/file-truck.png" className="w-100"/>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{background: "#0A4970"}} className="p-5">
                <Typography component={Grid} item xs={12} className="p-3 text-center font-weight-bold text-white" variant="h4">
                    What <span style={{color: "#85bc3c"}}>efile today</span> Provides You
                </Typography>
                <Grid item md={10} container alignItems="center" justifyContent="center" className="p-2">
                    {
                        fileData.map((data, i) => <Grid
                            item
                            key={i}
                            className="p-2"
                            xs sm={6} md={4}
                        >
                            <Grid
                                className="p-4 pl-5 pr-5 text-center rounded"
                                style={
                                    {
                                        fontSize: 12,
                                        color: "#fff",
                                        minHeight: 180,
                                        background: "#105983",
                                    }
                                }
                            >
                                <Typography variant={"subtitle2"} style={{fontWeight: 600}} className="p-2 pl-4 pr-4">
                                    {data.title}
                                </Typography>
                                <Typography className="p-2" style={{fontSize: 11}}>
                                    {data.description}
                                </Typography>
                                <Grid className="p-2">
                                    <Button
                                        size="small" style={
                                            {
                                                color: "#85bc3c",
                                                fontWeight: 600
                                            }
                                        }
                                    >
                                    Know More
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Grid>
            <Grid container className="position-relative">
                <img src={"/cta.jpg"} className="w-100"/>
                <Grid container direction="column" justifyContent="center" wrap="nowrap" className="overlay-container with-cta">
                    <Typography variant="h5" className="font-weight-bold text-white p-2">
                        Take advantage of these features and begin filling your form 2290 now
                    </Typography>
                    <Grid container wrap="nowrap" className="overlay-form p-2">
                        <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Your Email Address"
                            variant="outlined"
                        />
                        <Button
                            className="m-0 rounded-0"
                            style={
                                {
                                    background: "#0088ce",
                                    color: "#fff",
                                    width: 200,
                                    height: 56,
                                    textTransform: "inherit"
                                }
                            }
                        >
                            e-file Now 2290
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className="start-container p-5">
                <Typography variant="h3" className="font-weight-bold p-5">
                    How to <span style={{color: "#85bc3c"}}>Start?</span>
                </Typography>
                <Grid container justifyContent="center">
                    {
                        startData.map((data, i) => <Grid key={i} item xs md={4} className="p-2">
                            <Grid
                                container direction="column" wrap="nowrap" alignItems="center" justifyContent={"center"}
                                className="start-card-container card shadow text-center rounded-2"
                            >
                                <Grid className="p-1" style={{height: 90}}>
                                    {data.icon}
                                </Grid>
                                <Typography variant={"subtitle1"} className="font-weight-bold p-1">
                                    {data.title}
                                </Typography>
                                <Typography
                                    className="p-1" style={
                                        {
                                            fontSize: 14,
                                            height: 72
                                        }
                                    }
                                >
                                    {data.description}
                                </Typography>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <img src="/faq.jpg" className="w-100"/>
                </Grid>
                <Grid item xs={12} md={7} container direction="column" className="p-5">
                    <Typography variant="h3" className="font-weight-bold p-2">
                        Frequently <br/> Asked <span style={{color: "#85bc3c"}}>Questions</span>
                    </Typography>
                    <Grid container direction="column" wrap="nowrap">
                        {
                            FaqData.map((data, i) => <Grid className="p-2" key={i}>
                                <Accordion
                                    variant="outlined"
                                    classes={{root: "border-0"}}
                                >
                                    <AccordionSummary
                                        classes={{content: "m-0 p-2"}}
                                        className="p-2 rounded-1"
                                        style={
                                            {
                                                minHeight: "auto",
                                                background: "#f7f7f7",
                                                border: "1px solid #b3b3b3"
                                            }
                                        }
                                    >
                                        <Grid
                                            container alignItems="center" justifyContent="center"
                                            className="rounded-circle" style={
                                                {
                                                    width: 22,
                                                    height: 22,
                                                    marginRight: 8,
                                                    background: "white"
                                                }
                                            }
                                        >
                                            <Plus size={15} style={{color: "#b3b3b3"}}/>
                                        </Grid>
                                        <Typography className="font-weight-bold">{data.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className="p-3 rounded-1 mt-2"
                                        style={
                                            {
                                                minHeight: "auto",
                                                background: "#f7f7f7",
                                                border: "1px solid #b3b3b3"
                                            }
                                        }
                                    >
                                        <Typography>
                                            {data.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>)
                        }
                        <Grid className="p-2">
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                className="shadow-none"
                                style={
                                    {
                                        background: "#99c928",
                                        textTransform: "inherit"
                                    }
                                }
                            >
                                View All
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Testimonial/>

            <Grid container>
                <Grid item xs={12} md={6} container direction="column" className="p-5" style={{background: "#135882"}}>
                    <Typography variant="h3" className="font-weight-bold p-2 text-white">
                        Get <span style={{color: "#85bc3c"}}>In Touch</span>
                    </Typography>
                    <Typography className="p-2 text-white">
                        When is form 2290 due? Form 2290 is an annual tax paid to tax internal Revenue Service. For heavy vehicles with a taxable gross weight of 55,000 pounds or more.
                    </Typography>
                    <Grid className="p-2 custom-form">
                        <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Full Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className="p-2 custom-form">
                        <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Email Address"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className="p-2 custom-form">
                        <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Subject"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className="p-2 custom-form">
                        <TextField
                            rows={5}
                            multiline
                            fullWidth
                            className="rounded-0"
                            placeholder="Message"
                            variant="outlined"
                            style={{background: "#0072BA"}}
                        />
                    </Grid>
                    <Grid className="p-2">
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            className="shadow-none"
                            style={{background: "#99c928"}}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="/get-in-touch.jpg" className="w-100 h-100"/>
                </Grid>
            </Grid>
            <HomeFooter/>
        </Grid>
    );
};

export default Home;
