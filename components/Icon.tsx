import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs'
// @ts-ignore
export default function Icon (fontsize, withBackGround) {
    console.log(fontsize, withBackGround)
    return (
        <>
            <BsFillTelephoneFill fontSize={fontsize.fontSize} color="white" />
        </>
    )
}