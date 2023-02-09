import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ProtectedLayout } from './components/ProtectedLayout';
import { Prototype } from './pages/Prototype';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<ProtectedLayout><Home /></ProtectedLayout>} />
            <Route path="/prototype" element={<Prototype/>} />
        </Routes>
    )
}