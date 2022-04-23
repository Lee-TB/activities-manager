import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../FireBase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp(props) {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
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
            const { email, password } = values;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === "auth/wrong-password") {
                        alert(errorCode);
                    }
                });
        },
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 m-md-auto p-4 shadow rounded-3">
                    <h1 className="mb-4 text-center">Log In</h1>
                    <form onSubmit={formik.handleSubmit}>
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
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
