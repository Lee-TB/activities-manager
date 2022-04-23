import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ActivitiesModalForm from "./components/ActivitiesModalForm";

function App() {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <ActivitiesModalForm />
            </Container>
        </>
    );
}

export default App;
