import * as React from "react";
import {Button, ButtonBase, Card, CardContent, Grid, Typography} from "@mui/material";
import {BsQuestionCircleFill} from "react-icons/bs";
import MenuBox from "./MenuBox";

const Page1 = () => {
    const boxData = [
        {data: "July"},
        {data: "Aug"},
        {data: "Sep"},
        {data: "Oct"},
        {data: "Nov"},
        {data: "Dec"},
        {data: "Jan"},
        {data: "Feb"},
        {data: "Mar"},
        {data: "Apr"},
        {data: "May"},
        {data: "Jun"},
    ];

    return (
        <>
            <Grid direction="column" container className="mt-5 mb-5">
                <MenuBox/>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container justifyContent="center">
                                <Grid item className="m-3">
                                    <Typography fontSize="small">
                                    Choose the ending month of your tax year: <BsQuestionCircleFill fill="#336FBF"/> In most cases, the tax year end month is December
                                    unless the IRS has given a special permission.
                                    </Typography>
                                </Grid>
                                <Grid container className="m-5 mt-0" justifyContent="center">
                                    {
                                        boxData.map((item, key) => {
                                            return (
                                                <Grid item key={key} className="p-2">
                                                    <Grid
                                                        className="p-2 dabutton"
                                                        style={{borderRadius: 5}}
                                                        component={ButtonBase}
                                                    >
                                                        <Typography color="white">{item.data}</Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center">
                    <Button
                        className="m-3" variant="contained" style={{backgroundColor: "#85Bc3c"}}
                    >
                        Previous Step
                    </Button>
                    <Button
                        className="m-3"
                        variant="contained" style={{backgroundColor: "#336FBF"}}
                    >
                        Next Step
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Page1;