import { useMutation } from "@tanstack/react-query";
import useFetch from "./useFetch";
import {CreateSessionResponse} from '../../types/api/CreateSessionResponse';
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router";


const useCreateSession = () => {
    const fetchResource = useFetch()
    const {setSessionId} = useAuthContext();
    const navigate = useNavigate();
    return useMutation({mutationFn: async({requestToken}: {requestToken:string})=> {
        return await fetchResource<CreateSessionResponse>("authentication/session/new", {method:"POST", body: JSON.stringify({request_token: requestToken})});
    }, retry:false, onSuccess:(data)=> {setSessionId(data.session_id); navigate("/profile") }});
}
export default useCreateSession;