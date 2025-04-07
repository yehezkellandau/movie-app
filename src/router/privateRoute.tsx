import { useAuthContext } from "@/context/AuthContext";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({children}:PropsWithChildren) => {
    const { isAuthenticated } = useAuthContext();
    if(isAuthenticated){
        return children;
    }
    return <Navigate to="/login" replace/>
}
export default PrivateRoute;