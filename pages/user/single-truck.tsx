import * as React from "react";
import Truck from "../../components/singleTruck";
import UserContentContainer from "../../components/UserContentContainer";

const SingleTruck = () => {
    return <UserContentContainer component={<Truck/>}/>;
};

// eslint-disable-next-line react/display-name
export default SingleTruck;