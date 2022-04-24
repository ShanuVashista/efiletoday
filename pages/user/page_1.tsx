import * as React from "react";
import UserContentContainer from "../../components/UserContentContainer";
import Page1 from "../../components/page1";

const page_1 = () => {
    return(
        <UserContentContainer component={<Page1 />} />
    );
};

export default page_1;