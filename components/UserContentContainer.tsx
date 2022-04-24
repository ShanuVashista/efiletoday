import {Grid} from "@mui/material";
import React from "react";
import WebLayout from "./WebLayout";

const UserContentContainer = ({component}: any) => {
    return <WebLayout
        component={
            <Grid container direction="column" wrap="nowrap">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    className="banner-container main-container"
                    style={
                        {
                            background: "url('/user-bg.png') no-repeat",
                            backgroundSize: "cover",
                        }
                    }
                >
                    <Grid container justifyContent="center">
                        {component}
                    </Grid>
                </Grid>
            </Grid>
        }
    />;
};

export default UserContentContainer;
