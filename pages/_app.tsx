import "../styles/globals.scss";
import type {AppProps} from "next/app";
import {Grid} from "@mui/material";
import React from "react";

function MyApp ({Component, pageProps}: AppProps){
    return <Grid className="main-container">
        <Component {...pageProps} />
    </Grid>;
}

export default MyApp; 
