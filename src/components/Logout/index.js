import React from "react";
import { auth } from "../../FireBase/config";

export default function Logout({ children, ...props }) {
    const handleClick = () => {
        auth.signOut();
    };

    return (
        <button {...props} onClick={handleClick}>
            {children}
        </button>
    );
}
