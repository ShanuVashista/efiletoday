import {Button, Grid} from "@mui/material";
import * as React from "react";
import Header from "./Header";

const WebLayout = ({component}: any) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Header/>
            {component}
            <Grid
                container
                alignItems="center"
                style={
                    {
                        background: "#85Bc3c",
                        color: "#fff"
                    }
                }
                className="p-2"
            >
                <Grid item xs container alignItems="center" className="p-2">
                    <Grid>
                        <Button size="small" className="text-white">
                        Privacy Policy <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        News <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        FAQ <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        Support
                        </Button>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" className="p-2 w-auto">
                    <Grid>
                        <Button size="small" className="text-white">
                        Home <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        About <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        Contact Us <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        Cookie Policy <span style={{marginLeft: 8}}>|</span>
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="small" className="text-white">
                        Terms & Condition
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>);
};

export default WebLayout;
