import {Grid} from "@mui/material";
import React from "react";
import WebLayout from "./WebLayout";

const Background = ({component}: any) => {
    return <WebLayout
        component={
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
        }
    />;
};

export default Background;
