import * as React from "react";
import Background from "../components/Background";
import FillingTable from "../components/FillingTable";

const FillingActivity = () => {
    return (
        <Background component={<FillingTable/>} />
    );
};

export default FillingActivity;