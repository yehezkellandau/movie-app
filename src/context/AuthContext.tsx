import { createContext, PropsWithChildren, useContext, useState, useEffect } from "react";

type AuthContextType = {
    requestToken: string;
    setRequestToken: (token:string)=>void;
    sessionId: string;
    setSessionId: (sessionId:string)=>void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    requestToken:"",
    setRequestToken: ()=>{},
    sessionId:"",
    setSessionId: ()=>{},
    isAuthenticated: false
})
export const useAuthContext = ()=>useContext(AuthContext);

const AuthContextProvider = ({children}:PropsWithChildren) => {
    const [requestToken, setRequestToken] = useState<string>("");
    const [sessionId, setSessionId] = useState<string>("");
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    useEffect(()=>{
        if(requestToken && sessionId){
            setAuthenticated(true);
        }
    },[requestToken, sessionId])


    return (
        <AuthContext.Provider
        value={{requestToken, setRequestToken, sessionId, setSessionId, isAuthenticated}}
        >{children}</AuthContext.Provider>
    );
};
export default AuthContextProvider;