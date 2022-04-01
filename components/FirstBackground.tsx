import {Grid, Button, Card, CardContent} from "@mui/material";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {IoSend} from "react-icons/io5";

const Background = ({component}: any) => {
    return (
        <Grid
            container justifyContent="center" direction="column" wrap="nowrap" style={
                {
                    background: "linear-gradient(180deg, #99c928 , #0072BA 100%)",
                    width: "100vw",
                    height: "100vh"
                }
            }
        >
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className="banner-container main-container"
                style={
                    {
                        backgroundSize: "100%",
                        paddingTop: "!important",
                    }
                }
            >
                <Grid container justifyContent="center" className="pb-0 w-auto" style={{boxSizing: "border-box"}}>
                    {component}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Background;
