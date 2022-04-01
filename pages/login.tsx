import * as React from "react";
import FirstBackground from "../components/FirstBackground";
import Login from "../components/Login";

const login = () => {
    return(
        <FirstBackground component={<Login/>} />
    );
};

export default login;