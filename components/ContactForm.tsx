import * as React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import styles from "./components.module.scss";
import {Box, Button, Grid, TextField} from "@mui/material";
import {IoCallOutline} from "react-icons/io5";
import {AiFillTwitterCircle, AiOutlineMail, AiOutlineShareAlt} from "react-icons/ai";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {RiFacebookCircleFill} from "react-icons/ri";
import {GrLinkedinOption} from "react-icons/gr";

const ContactForm = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [fnameError, setFnameError] = useState<any>("");
    const [emailError, setEmailError] = useState<any>("");
    const [subjectError, setSubjectError] = useState<any>("");
    const [messageError, setMessageError] = useState<any>("");

    const onSubmit = () => {
        let fnameError, emailError, subjectError, messageError, isValid = true;

        if (fname == ""){
            fnameError = "Please enter first name";
            isValid = false;
        }

        if (email ==  ""){
            emailError = "Please enter email";
            isValid = false;
        }

        if (subject == ""){
            subjectError = "Please enter subject";
            isValid = false;
        }

        if (message == ""){
            messageError = "Please enter message";
            isValid = false;
        }

        setFnameError(fnameError);
        setEmailError(emailError);
        setSubjectError(subjectError);
        setMessageError(messageError);
        return isValid;
    }; 

    return(
        <>
            <Typography variant="h3" className={styles.formHead}>
                Get In Touch
            </Typography>
            <br/>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid className={styles.leftAlign} item xs={6}>
                        <Typography fontWeight="bold">Contact Info</Typography>
                        <br/>
                        <Grid container spacing={1}>
                            <Grid item>
                                <span className={`${styles.paddingContactType} ${styles.iconBackgroundColor}`}>
                                    <IoCallOutline className={styles.iconStyle}/></span>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography color="gray" fontSize="small">CALL US</Typography>
                                <Typography color="black" fontSize="smaller">4146906435</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={1}>
                            <Grid item>
                                <span className={`${styles.paddingContactType} ${styles.iconBackgroundColor}`}>
                                    <AiOutlineMail className={styles.iconStyle}/></span>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography color="gray" fontSize="small">EMAIL</Typography>
                                <Typography color="black" fontSize="smaller">info@efiletoday.com</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={1}>
                            <Grid item>
                                <span className={`${styles.paddingContactType} ${styles.iconBackgroundColor}`}>
                                    <HiOutlineLocationMarker className={styles.iconStyle}/></span>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography color="gray" fontSize="small">LOCATION</Typography>
                                <Typography color="black" fontSize="smaller">Milwaukee WI</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={1}>
                            <Grid item>
                                <span className={`${styles.paddingContactType} ${styles.iconBackgroundColor}`}>
                                    <AiOutlineShareAlt className={styles.iconStyle}/></span>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography color="gray" fontSize="small">FOLLOW US</Typography>
                                <RiFacebookCircleFill className={styles.shareIcon} />
                                <AiFillTwitterCircle className={styles.shareIcon} />
                                <GrLinkedinOption className={styles.shareIcon} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <div >
                            <br/>
                            <br/>
                            <Grid container rowSpacing={1} columnSpacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="First Name"
                                        variant="outlined"
                                        helperText={fnameError}
                                        error={!!fnameError}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Email"
                                        variant="outlined"
                                        helperText={emailError}
                                        error={!!emailError}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Subject"
                                        variant="outlined"
                                        helperText={subjectError}
                                        error={!!subjectError}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        helperText={messageError}
                                        error={!!messageError}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <br/>
                            <Button variant="contained" color="success" onClick={onSubmit}>Send Message</Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <br/>

        </>
    );
};

export default ContactForm;