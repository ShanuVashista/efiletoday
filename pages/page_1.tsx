import * as React from "react";
import Page1 from "../components/page1";
import Background from "../components/Background";

const page_1 = () => {
    return(
        <Background component={<Page1 />} />
    );
};

export default page_1;