import {Grid, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import React from "react";

function Testimonial (){
    return (
        <Grid container alignItems="center" className="p-5">
            <Grid item xs={12} md={4}>
                <Typography variant="h3" className="font-weight-bold p-2">
                        What <br/> <span style={{color: "#99c928"}}>Peoples</span> Say
                </Typography>
                <Typography className="p-2">
                        When is form 2290 due? Form 2290 is an annual tax paid to the Internal Revenue Service. For heavy vehicle with a taxable gross weight of 55,000 pounds or more.
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} style={{padding: 30}}>
                <Grid container>
                    <Grid item xs={12} md={6} justifyContent="center" spacing={2}>
                        <Card sx={{maxWidth: 345}}>
                            <CardContent style={{padding: 30}}>
                                <Typography variant="body2">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                 together with your guests. Add 1 cup of frozen peas along with the mussels,
                                 if you like fasfasf fasdfsad fsadfsdafewf efhfgoiskafj oieoinv aijfo a jopgjak aoidugfnaslkaos jl.
                                </Typography>
                            </CardContent>
                            <Grid>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={
                                                {
                                                    bgcolor: "red",
                                                    width: 80,
                                                    height: 80
                                                }
                                            } aria-label="recipe"
                                        >
                                              R
                                        </Avatar>
                                    }
                                    title="Jhon Dio"
                                    subheader=""
                                />
                            </Grid>  
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent="center">
                        <Card sx={{maxWidth: 345}}>
                            <CardContent style={{padding: 30}}>
                                <Typography variant="body2">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                 together with your guests. Add 1 cup of frozen peas along with the mussels,
                                 if you like fasfasf fasdfsad fsadfsdafewf efhfgoiskafj oieoinv aijfo a jopgjak aoidugfnaslkaos jl.
                                </Typography>
                            </CardContent>
                            <Grid>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={
                                                {
                                                    bgcolor: "red",
                                                    width: 80,
                                                    height: 80
                                                }
                                            } aria-label="recipe"
                                        >
                                        R
                                        </Avatar>
                                    }
                                    title="Jhon Dio"
                                    subheader=""
                                />
                            </Grid>  
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Testimonial;