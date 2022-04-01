import * as React from "react";
import ForgotPassword from "../components/ForgotPassword";
import FirstBackground from "../components/FirstBackground";

const forgotPassword = () => {
    return(
        <FirstBackground component={<ForgotPassword/>}/>
    );
};

export default forgotPassword;