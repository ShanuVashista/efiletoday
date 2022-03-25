import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "./components.module.scss";
import Icon from "./Icon";
import Logo from "../public/Fin_E-fileLogo.png";
import Image from "next/image";
import Link from "next/link";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";

// @ts-ignore
const Header = ({detail}) => {
    return (
        <>
            {
                detail ? 
                    <AppBar position="static" color="primary">
                        <Container maxWidth="xl">
                            <Typography className={styles.contactDetails}>
                                <Icon fontSize="small" withBackground={false}/> {detail.phone} | {detail.email}
                            </Typography>
                        </Container>
                    </AppBar> : null
            }
            <AppBar position="static" color="transparent">
                <Container maxWidth="xl"><br/>
                    <Grid container>
                        <Grid item xs={2}>
                            <div className={`${styles.contactDetails} ${styles.alignment}`}>
                                <Image src={Logo} height={80} width={100}/>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container spacing={0} className={styles.navMenu}>
                                <Grid item xs={1.5}><Link href="#"><a className={styles.navLinks}>Home</a></Link></Grid>
                                <Grid item xs={1.5}><Link href="#"><a className={styles.navLinks}>File</a></Link></Grid>
                                <Grid item xs={1.5}><Link href="#"><a className={styles.navLinks}>Pay</a></Link></Grid>
                                <Grid item xs={1.5}><Link href="#"><a
                                    className={styles.navLinks}
                                >Refunds</a></Link></Grid>
                                <Grid item xs={3}><Link href="#"><a className={styles.navLinks}>Forms & Instructions</a></Link></Grid>
                                <Grid item xs={1.5}><Link href="#"><a
                                    className={styles.navLinks}
                                ><b>Contact</b></a></Link></Grid>
                                <Grid item xs={1.5}>
                                    <Button variant="contained" color="success">
                                        Login/Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
