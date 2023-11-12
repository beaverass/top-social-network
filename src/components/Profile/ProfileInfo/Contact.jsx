import classes from "./ProfileInfo.module.css";
import React from "react";

const Contact = ({contactTitle, contactValue}) => {

    return (
        <div className={classes.contact}>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}
export default Contact;