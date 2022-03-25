import {Avatar, Grid, List, ListItem, ListItemAvatar, Button} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MapIcon from "@mui/icons-material/Map";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";

function HomeFooter (){
    return (
        <>
            <Box
                sx={
                    {
                        bgcolor: "common.black",
                        color: "grey.700"
                    }
                }
            >
                <Container sx={{py: 12}}>

                    <Grid container spacing={4} color={"white"}>
                        <Grid item xs={12} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color={"whitesmoke"}>
                            CONTACT US
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <MapIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography variant="subtitle2" component="a" href="#">
                                    123, Main Street Milwaukee - USA
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PhoneRoundedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography variant="subtitle2" component="a" href="#">
                                    +1(414)690-643
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <DraftsRoundedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography variant="body1" component="a" href="#">
                                    info@efiletoday.com
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Grid className="p-2">
                                            <img src="/Fin_E-fileLogo.png" style={{width: 100}}/>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color={"whitesmoke"}>
                            NEWSLETTER
                                </Typography>
                                <List>
                                    <ListItem>
                                       
                                        <small>efile today empoweree diling services</small>
                                         
                                    </ListItem>
                                    <ListItem >
                                        <input></input>
                                        {/* <TextField
                            fullWidth
                            className="rounded-0"
                            placeholder="Your Email Address"
                            variant="outlined"
                        /> */}
                                        
                                    </ListItem>
                                    <ListItem>
                                        <small>efile today empowered filing services procedures for reliabel filing hub.</small>
                                    </ListItem>
                                    <ListItem>
                                        <Grid className="p-2">
                                            <Button
                                                variant="contained"
                                                size="small"
                                                className="shadow-none"
                                                style={
                                                    {
                                                        background: "linear-gradient(90deg, #0072BA , #99c928 60%)",
                                                        textTransform: "unset"
                                                    }
                                                }
                                            >
                                                Subscribe
                                            </Button>
                                        </Grid>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        
                                        <Typography variant="h5">
                                            <strong> About Us</strong>
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <small>efile today empowered filing services procedures for reliable filing hug. E-file today empowered filing services procedures for reliable filing hub</small>
                                    </ListItem>
                                </List>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color={"whitesmoke"}>
                                     PRODUCT & SERVICES
                                </Typography>
                                <List>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                efile Form 2290
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                efile 2290 by Phone
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                Free VIN Correction
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                Claim 2290 Tax Refund
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                2290 State Filing
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        
                                        <Typography variant="subtitle2" component="a" href="#">
                                                Apply for EIN
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Grid className="p-2">
                                            <img src="/irs.png" style={{width: 100}}/>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </Stack> 
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Grid className="p-2">
                                <img src="/footer.png" style={{width: 200}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={
                    {
                        bgcolor: "#85Bc3c",
                        color: "#FFFFFF"
                    }
                }
            >
                <Container sx={{py: 3}}>
                    <Grid container spacing={5} color={"white"}>
                        <Grid item xs={12} md={5}>
                            <Stack spacing={2}>
                                <Typography>
                            Privacy Police
                            |
                            News
                            |
                            FAQ
                            |
                            Support
                        
                                </Typography>
                       
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography>
                            Home
                            |
                            About Us
                            |
                            Contact Us
                            |
                            Privacy Policy
                            |
                            Cookie Policy
                            |
                            Term & Condition
                        
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Container>
            </Box>

            {/* <Box
                sx={
                    {
                        bgcolor: "common.green",
                        color: "green.700"
                    }
                }
            >
                <Container maxWidth="md" sx={{py: 3}}>

                </Container>
            </Box> */}
        </>
    );
}

export default HomeFooter;