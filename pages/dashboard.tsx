import * as React from "react";
import Background from "../components/Background";
import Dashboard from "../components/Dashboard";

const MainPage = () => {
    return (
        <Background component={<Dashboard/>}/>
    );
};

export default MainPage;