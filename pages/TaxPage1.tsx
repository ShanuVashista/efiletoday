import * as React from "react";
import TaxPeriod from "../components/TaxPeriod";
import Background from "../components/Background";

const TaxPage1 = () => {
    return(
        <Background component={<TaxPeriod/>}/>
    );
};

export default TaxPage1;