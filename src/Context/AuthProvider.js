import React, { useEffect, useState } from "react";
import { auth } from "../FireBase/config";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                setUser({ uid, email, displayName, photoURL });
                navigate("/");
            } else {
                setUser(undefined); // use to re-render
                navigate("/login");
            }

            return () => {
                unsubscribed();
            };
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}
