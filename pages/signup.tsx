import * as React from "react";
import FirstBackground from "../components/FirstBackground";
import SignUp from "../components/SignUp";

const signup = () => {
    return (
        <FirstBackground component={<SignUp/>}/>
    );
};

export default signup;