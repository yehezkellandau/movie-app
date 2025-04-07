import { useMutation } from "@tanstack/react-query";
import useFetch from "./useFetch";
import {CreateResponse} from '../../types/api/CreateResponse';
import { useAuthContext } from "@/context/AuthContext";


const useAddFavorite = () => {
    const fetchResource = useFetch()
    const {sessionId} = useAuthContext();
    return useMutation({mutationFn: async({mediaId, favorite}: {mediaId:number; favorite: boolean;})=> {
        return await fetchResource<CreateResponse>(`account/${import.meta.env.VITE_ACCOUNT_ID}/favorite?session_id=${sessionId}`, {method:"POST", body: JSON.stringify({media_type: "movie", media_id: mediaId, favorite})});
    }, retry:false});
}
export default useAddFavorite;