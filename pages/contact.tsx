import React from "react";
import Header from "../components/Header";

export default function ContactUs (){
    const details = {
        email: "test@gmail.com",
        phone: "1234567890"
    };

    return(
        <>
            <Header detail={details}/>
        </>
    );
}