// src/routes/PrivateRoute.tsx
import {Navigate, Outlet} from "react-router-dom";
import useAuthStore from "@/store/authStore.ts";

export default function PrivateRoute() {
    const token = useAuthStore.getState().accessToken
    return token ? <Outlet/> : <Navigate to="/login"/>;
}