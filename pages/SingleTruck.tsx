import * as React from "react";
import Background from "../components/Background";
import Truck from "../components/singleTruck";

const SingleTruck = () => {
    return (
        <Background component={<Truck/>} />
    );
};

export default SingleTruck;