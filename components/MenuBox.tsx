import * as React from "react";
import {Box, ButtonBase, Grid, Typography} from "@mui/material";
import {BsFillPersonFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";

const MenuBox = () => {
    return(
        <Box
            className="p-2"
            style={
                {
                    background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                    width: "fit-content",
                    position: "relative",
                    margin: "auto",
                    top: 20
                }
            }
        >
            <Typography color="white" noWrap>
                <Grid container direction="row">
                    <Grid component={ButtonBase}>DASHBOARD</Grid>
                    <Grid component={ButtonBase}>| FILING LIST |</Grid>
                    <Grid component={ButtonBase}> BUSINESS LIST |</Grid>
                    <Grid component={ButtonBase}>
                        <BsFillPersonFill fill="white" />
                        <BiMenu fill="white" />
                    </Grid>
                </Grid>
            </Typography>
        </Box>
    );
};

export default MenuBox;