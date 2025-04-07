import { useMutation } from "@tanstack/react-query";
import useFetch from "./useFetch";
import {CreateWithLoginResponse} from '../../types/api/CreateWithLoginResponse';
import { useAuthContext } from "@/context/AuthContext";
import useCreateSession from "./useCreateSession";


const usePostCreateWithLogin = () => {
    const fetchResource = useFetch()
    const {setRequestToken} = useAuthContext();
    const {mutate} = useCreateSession();
    return useMutation({mutationFn: async({username, password, requestToken}: {username:string; password: string; requestToken:string})=> {
        return await fetchResource<CreateWithLoginResponse>("authentication/token/validate_with_login", {method:"POST", body: JSON.stringify({username,password, request_token: requestToken})});
    }, retry:false, onSuccess:(data)=> {setRequestToken(data.request_token); mutate({requestToken: data.request_token})}});
}
export default usePostCreateWithLogin;