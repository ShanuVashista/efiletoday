import * as React from "react";
import Page2 from "../components/page2";
import Background from "../components/Background";

const page_2 = () => {
    return(
        <Background component={<Page2 />} />
    );
};

export default page_2;