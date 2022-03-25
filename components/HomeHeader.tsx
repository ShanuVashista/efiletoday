import {Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import logo from "../public/Fin_E-fileLogo.png";
import {BsFillTelephoneFill, BsSearch} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import styles from "../styles/Home.module.scss";
import React from "react";

const HomeHeader = () => {
    return (
        <Grid
            container className="p-3 m-5" style={
                {
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    background: "linear-gradient(90deg, #99c928 , #0072BA 100%)",
                    textTransform: "unset"
                }
            }
        >
            <Grid
                item xs={1} className="p-2" style={
                    {
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        background: "linear-gradient(180deg, #FFFFFF 60%, #87CEFA)",
                    }
                }
            >
                <Image src={logo} height={100} width={150}/>
            </Grid>
            <Grid item xs={11}>
                <Grid item xs={12} className="p-2" style={{color: "white"}}>
                    <Grid item xs={6} style={{paddingLeft: 80}}>
                        <BsFillTelephoneFill />&nbsp;
                        <Typography style={{display: "inline-block"}}>+1 (414) 690-6435 &nbsp;&nbsp;|&nbsp;&nbsp;</Typography>
                        <HiOutlineMailOpen fontSize="large" />&nbsp;
                        <Typography style={{display: "inline-block"}}>info@efiletoday.com</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="p-2" style={{color: "white"}}>
                    <Grid item xs={2} className={styles.headerLinkAlign}>
                        <Typography><a href="#">Home</a></Typography>
                    </Grid>
                    <Grid item xs={2} className={styles.headerLinkAlign}>
                        <Typography><a href="#">File</a></Typography>
                    </Grid>
                    <Grid item xs={2} className={styles.headerLinkAlign}>
                        <Typography><a href="#">Pay</a></Typography>
                    </Grid>
                    <Grid item xs={2} className={styles.headerLinkAlign}>
                        <Typography><a href="#">Refunds</a> </Typography>
                    </Grid>
                    <Grid item xs={3} className={styles.headerLinkAlign}>
                        <Typography><a href="#">Forms & Instructions</a> </Typography>
                    </Grid>
                    <Grid item xs={1} className={styles.headerLinkAlign}>
                        <Typography><a href="#">Contact</a></Typography>
                    </Grid>
                    <Grid item xs={1} className={styles.headerLinkAlign}>
                        <BsSearch/>
                    </Grid>
                    <Grid xs={2} className={styles.headerLinkAlign}>
                        <Button
                            variant="contained"
                            size="large"
                            className="shadow-none"
                            style={
                                {
                                    background: "#99c928",
                                    textTransform: "unset"
                                }
                            }
                        >
                            <Typography fontSize="small">Login/Register</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomeHeader;
