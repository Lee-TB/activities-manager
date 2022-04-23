import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../FireBase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp(props) {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(
                    /[a-zA-Z]/,
                    "Password can only contain Latin letters."
                ),
        }),
        onSubmit: (values) => {
            const { email, password, fullName } = values;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName,
                        photoURL:
                            "https://res.cloudinary.com/leetb/image/upload/v1649915686/activities-manager/user/avatar-placeholder_cjdqik.jpg",
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        },
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 m-md-auto p-4 shadow rounded-3">
                    <h1 className="mb-4 text-center">Sign Up</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                className="form-control"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            <div className="form-text text-danger">
                                {formik.touched.fullName &&
                                formik.errors.fullName ? (
                                    <div>{formik.errors.fullName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <div className="form-text text-danger">
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form-control"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <div className="form-text text-danger">
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="d-grid">
                            <button
                                className="btn btn-outline-dark ms-md-auto px-4"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
