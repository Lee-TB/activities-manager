import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBase/config";
import { async } from "@firebase/util";

export default function ActivitiesModalForm() {
    const [inputRoles, setInputRoles] = useState([]);
    const { user } = useContext(AuthContext);

    const handleAddRole = () => {
        setInputRoles((prev) => [...prev, { roleName: "", coefficient: 0 }]);
    };

    const handleSubRole = () => {
        setInputRoles((prev) => prev.slice(0, -1));
    };

    const formik = useFormik({
        initialValues: {
            groupName: "",
            password: "",
        },
        validationSchema: Yup.object({
            groupName: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            let { groupName } = values;
            groupName = groupName.trim();
            console.log({
                owner: user,
                groupName,
                roles: inputRoles,
                createAt: new Date(),
                members: [{ ...user, totalScore: 0 }],
                activities: [],
            });
            try {
                const docRef = await addDoc(collection(db, "groups"), {
                    owner: user,
                    groupName,
                    roles: inputRoles,
                    createAt: new Date(),
                    members: [{ ...user, totalScore: 0 }],
                    activities: [],
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },
    });
    return (
        <>
            <div
                class="modal fade"
                id="activitiesModalForm"
                tabindex="-1"
                aria-labelledby="activitiesModalFormLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <form id="groupForm" onSubmit={formik.handleSubmit}>
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="activitiesModalFormLabel"
                                >
                                    Create Activities Group
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body row g-3">
                                <div className="col-12">
                                    <label
                                        className="form-label fw-bolder"
                                        htmlFor="groupName"
                                    >
                                        Group Name
                                    </label>
                                    <input
                                        className="form-control"
                                        id="groupName"
                                        name="groupName"
                                        type="groupName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.groupName}
                                    />
                                    <div className="form-text text-danger">
                                        {formik.touched.groupName &&
                                        formik.errors.groupName ? (
                                            <div>{formik.errors.groupName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label d-block fw-bolder">
                                        Add Roles
                                    </label>
                                    <div className="row g-3 mb-3">
                                        {inputRoles.map((inputRole, index) => (
                                            <>
                                                <div className="col-9 col-lg-10">
                                                    <labe className="form-label">
                                                        Role name
                                                    </labe>
                                                    <input
                                                        type={`text`}
                                                        className="form-control"
                                                        onChange={(e) =>
                                                            setInputRoles(
                                                                (prevRoles) => {
                                                                    prevRoles[
                                                                        index
                                                                    ].roleName =
                                                                        e.target.value.trim();
                                                                    return prevRoles;
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-3 col-lg-2">
                                                    <labe className="form-label">
                                                        Coefficient
                                                    </labe>
                                                    <input
                                                        type={`number`}
                                                        min="1"
                                                        className="form-control"
                                                        onChange={(e) =>
                                                            setInputRoles(
                                                                (prevRoles) => {
                                                                    prevRoles[
                                                                        index
                                                                    ].coefficient =
                                                                        parseInt(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    return prevRoles;
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm px-2 me-2"
                                        onClick={handleAddRole}
                                    >
                                        + Add
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm px-2"
                                        onClick={handleSubRole}
                                    >
                                        - Sub
                                    </button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-outline-dark"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-dark ms-md-auto px-4"
                                        data-bs-dismiss="modal"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
