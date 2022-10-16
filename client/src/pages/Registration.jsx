import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import '../styles/form.css';
import {useLocation} from 'react-router-dom';

function Registration() {
    const [isMobile, setIsMobile] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (window) {
            if (window.matchMedia("(max-width: 500px)").matches) {
              setIsMobile(true);
            } else {
              setIsMobile(false);
            }
        } 
    })
    return (
        <div className={`${isMobile ? 'd-flex row justify-content-center' : ''} position-relative w-100 m-0 p-0 mt-5 px-3 py-5 background-pattern`}>
            <h1 className={`${isMobile ? 'fs-18 text-center' : 'fs-28 px-5 mt-5 w-100'} form-header`}>Techyon Registration Form</h1>
            <span className={`${isMobile ? 'w-75' : ' mx-5'} d-flex border-style`}></span>
            <Form isMobile={isMobile} eventDetails={location.state}/>
        </div>
    )
}

export default Registration
