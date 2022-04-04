import {Grid} from "@mui/material";
import React from "react";

const Background = ({component}: any) => {
    return (
        <Grid container direction="column" wrap="nowrap">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className="banner-container main-container"
                style={
                    {
                        background: "url('/Group 3.png') no-repeat",
                        backgroundSize: "100%",
                        paddingTop: "110px !important",
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
