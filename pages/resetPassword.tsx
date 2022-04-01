import * as React from "react";
import FirstBackground from "../components/FirstBackground";
import ResetPassword from "../components/ResetPassword";

const resetPassword = () => {
    return(
        <FirstBackground component={<ResetPassword/>}/>
    );
};

export default resetPassword;