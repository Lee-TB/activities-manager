import React from "react";

export default function CreateActivites({ children, ...props }) {
    return (
        <button
            {...props}
            data-bs-toggle="modal"
            data-bs-target="#activitiesModalForm"
        >
            {children}
        </button>
    );
}
