import React from "react";
import ContactForm from "../components/ContactForm";
import banner from "../public/contact_banner.png";
import Image from "next/image";

export default function ContactUs (){
    return(
        <>
            <Image width={1700} height={400} src={banner} alt="Contact banner" />
            <ContactForm/>
        </>
    );
}