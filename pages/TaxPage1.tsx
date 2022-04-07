import * as React from "react";
import TaxPeriod from "../components/TaxPeriod";
import Background from "../components/Background";
import {Button, Grid} from "@mui/material";

const TaxPage1 = () => {
    return(
        <>
            <Background component={<TaxPeriod/>}/>
            <Grid container wrap="nowrap" justifyContent="center">
                <Button
                    className="m-2" variant="contained" style={{backgroundColor: "#85Bc3c"}}
                >Previous Step</Button>
                <Button
                    className="m-2" variant="contained" style={{backgroundColor: "#336FBF"}}
                >Next Step</Button>
            </Grid>
        </>
    );
};

export default TaxPage1;