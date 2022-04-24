import * as React from "react";
import UserContentContainer from "../components/UserContentContainer";
import FillingTable from "../components/FillingTable";

const FillingActivity = () => {
    return (
        <UserContentContainer component={<FillingTable/>} />
    );
};

export default FillingActivity;