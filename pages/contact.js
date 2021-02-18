import React from "react";
import ContactStyle from "../styles/Home.module.css";



const contact = () => {

    return (
        <>
            <h1>Contact</h1>
            <a href="https://github.com/echosonusharma"
                target="_blank">
                <h3 className={ContactStyle.contact}>Github</h3></a>
        </>
    )
};

export default contact;