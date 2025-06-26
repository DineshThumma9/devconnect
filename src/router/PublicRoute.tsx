// src/routes/PublicRoute.tsx
import {Navigate, Outlet} from "react-router-dom";
import type {JSX} from "react";
import useAuthStore from "@/store/authStore.ts";

export default function PublicRoute() {
    const token = useAuthStore.getState().accessToken
    return token ? <Navigate to="/app"/> : <Outlet/>;
}